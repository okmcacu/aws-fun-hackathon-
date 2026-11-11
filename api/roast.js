// Vercel serverless function. Secrets come from Environment Variables:
//   GEMINI_API_KEY (required), GITHUB_TOKEN (optional, raises GitHub rate limit)
const TONES = {
  espresso: "አንድ ቡና በብዛት የጠጣ ሲኒየር ገንቢ",
  lead: "የተናደደ እና የተከፋ ቴክ ሊድ",
  elder: "ምሳሌ እየጠቀሰ የሚሰድብ ኢትዮጵያዊ ሽማግሌ",
};

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  try {
    const { repo, tone } = req.body || {};
    const m = String(repo || "").match(/github\.com\/([^\/\s]+)\/([^\/\s#?]+)/i);
    if (!m) return res.status(400).json({ error: "የGitHub repo ሊንክ ትክክል አይደለም።" });
    const owner = m[1], name = m[2].replace(/\.git$/, "");

    const gh = { Accept: "application/vnd.github.raw+json", "User-Agent": "readme-roast" };
    if (process.env.GITHUB_TOKEN) gh.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
    const r = await fetch(`https://api.github.com/repos/${owner}/${name}/readme`, { headers: gh });
    if (r.status === 404) return res.status(404).json({ error: "README አልተገኘም (ወይም repo private ነው)። ይሄ ራሱ ትልቅ ጥብስ ነው 😅" });
    if (!r.ok) return res.status(502).json({ error: "GitHub ሊደረስ አልቻለም፤ ቆይተህ ሞክር።" });
    const readme = (await r.text()).slice(0, 12000);

    const persona = TONES[tone] || TONES.espresso;
    const prompt =
      `አንተ ${persona} ነህ። የሚከተለውን GitHub ፕሮጀክት README በአማርኛ ብቻ በጣም ጨካኝ፣ አስቂኝ እና ተጫዋች በሆነ መንገድ ጥብስ።\n` +
      `ህጎች:\n- ሙሉ በሙሉ በአማርኛ (እንደ README፣ install፣ API ያሉ የቴክኒክ ቃላት በእንግሊዝኛ ሊቀሩ ይችላሉ)።\n` +
      `- የREADMEውን ትክክለኛ ይዘት ጥቀስ፤ ባዶ ጽሑፍ፣ የጠፋ installation፣ የተጋነነ ማብራሪያ፣ ስክሪንሾት አለመኖር፣ ግልጽ ያልሆነ ዓላማ ወዘተ ፈልገህ ተጠቀም።\n` +
      `- ኮዱን/ሰነዱን ብቻ ተሳደብ፤ ሰውየውን በግል (ዘር፣ ሃይማኖት፣ ጾታ ወዘተ) አትሳደብ።\n` +
      `- ቅርጸት: አጭር ርዕስ፣ 5-7 የጥብስ ነጥቦች (በኢሞጂ ጀምር)፣ 'ፍርድ: X/10'፣ እና አንድ ቅን ምክር በቀልድ መልክ። ከ350 ቃላት አይበልጥ።\n\n` +
      `Repo: ${owner}/${name}\n\nREADME:\n"""\n${readme}\n"""`;

    const key = (process.env.GEMINI_API_KEY || "").trim();
    if (!key) return res.status(500).json({ error: "GEMINI_API_KEY በVercel ላይ አልተገኘም። ካስገባህ በኋላ Redeploy አድርግ።" });
    const MODELS = ["gemini-3-flash-preview", "gemini-3.1-flash-lite-preview", "gemini-2.5-flash", "gemini-2.5-flash-lite"];
    let text = "", lastErr = "";
    for (const model of MODELS) {
      const g = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-goog-api-key": key },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: { temperature: 1, maxOutputTokens: 1500 },
          }),
        }
      );
      if (g.ok) {
        const data = await g.json();
        text = data?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
        if (text) break;
        lastErr = model + ": empty reply";
        continue;
      }
      const detail = await g.text();
      console.error("Gemini", model, g.status, detail);
      lastErr = model + " -> " + g.status + " " + detail.slice(0, 250);
      if (g.status === 400 || g.status === 401 || g.status === 403) break; // key problem, other models won't help
    }
    if (!text) return res.status(502).json({ error: "Gemini ስህተት: " + lastErr });
    res.status(200).json({ roast: text, repo: `${owner}/${name}` });
  } catch (e) {
    res.status(500).json({ error: "ያልታሰበ ስህተት።" });
  }
};
