# 🔥 README Roast — የኮድ ጥብስ

### Your README talks big. Let's see what AI has to say about it.

**README Roast** is an AI-powered web application that turns ordinary GitHub repository documentation into a brutally honest comedy experience — entirely in Amharic.

Paste a GitHub repository URL, choose your preferred roasting personality, and let AI examine the README before delivering hilarious, context-aware criticism.

We believe code reviews don't always have to be boring. Sometimes, developers need a little laughter, a reality check, and an uncomfortable amount of honesty.

> ኮድህን አይተናል... READMEህ ግን ሌላ ችግር ነው! 🔥

---

## 🎯 The Problem

Developers spend countless hours building projects, but documentation often gets neglected.

README files are frequently:
- Poorly structured and difficult to understand.
- Missing essential installation and usage instructions.
- Filled with vague descriptions and unrealistic project claims.
- Written without considering the experience of other developers.

Traditional documentation reviews can feel repetitive and uninspiring.

## 💡 Our Solution

README Roast transforms documentation feedback into an entertaining, AI-powered experience.

Instead of receiving another generic checklist, developers get a personalized Amharic roast based on the actual contents of their repository's README.

Behind the humor is a simple idea: **make developers laugh while helping them recognize what needs improvement.**

## ✨ Key Features

- **🔗 GitHub Repository Integration:** Automatically retrieves README files from public GitHub repositories using their repository URLs.
- **🤖 AI-Powered Analysis:** Uses Google Gemini to understand the README and generate context-aware feedback.
- **🇪🇹 Amharic-First Experience:** Delivers creative, natural, and entertaining roasts in Amharic.
- **🎭 Multiple AI Personalities:** Choose how brutally your documentation gets judged.

  | Personality | Description |
  |---|---|
  | ☕ Senior Developer | An overworked senior developer with zero patience. |
  | 😤 Disappointed Tech Lead | Expected excellence. Found your README. |
  | 👴 Ethiopian Elder | Traditional wisdom meets modern programming. |

- **🔥 Context-Aware Roasting:** Generates 5–7 observations based on actual README content.
- **⚖️ README Verdict:** Rates the documentation out of 10.
- **💡 Constructive Feedback:** Ends every roast with a genuinely useful improvement tip disguised as a joke.
- **🌙 Modern Developer UI:** Clean, responsive, dark-themed interface.

## ⚙️ How It Works

1. **Submit:** Paste a public GitHub repository URL.
2. **Fetch:** The backend retrieves the repository's README using the GitHub API.
3. **Analyze:** The README content is sent to Google Gemini.
4. **Roast:** Gemini generates a personalized Amharic roast using the selected personality.
5. **Verdict:** Receive your brutal review, score, and improvement tip.

## 🧠 AI Output Structure

Every roast follows a consistent format:

| Component | Description |
|---|---|
| Headline | A hilarious opening statement. |
| Roast | 5–7 personalized observations. |
| Verdict | A score in the format `ፍርድ: X/10`. |
| Improvement Tip | One practical recommendation delivered humorously. |

The AI is instructed to focus on repository documentation and project quality rather than personally attacking developers.

## 🛠️ Technology Stack

| Technology | Role |
|---|---|
| HTML5 | Frontend structure |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend logic and API communication |
| Google Gemini API | AI analysis and Amharic roast generation |
| GitHub REST API | Repository README retrieval |
| Vercel | Deployment and serverless backend |

## 🏗️ Architecture

The application follows a simple frontend-backend architecture.

```text
        USER
         |
         v
   GitHub Repository URL
         |
         v
   FRONTEND (HTML/CSS/JS)
         |
         v
    VERCEL BACKEND
         |
         +------------------+
         |                  |
         v                  v
     GITHUB API         GEMINI API
         |                  |
         v                  v
     README             AI ANALYSIS
         |                  |
         +--------+---------+
                  |
                  v
          AMHARIC ROAST
                  |
                  v
             USER 🔥
```

## 🚀 Live Demo

**Try it yourself:**

🌐 [README Roast — Live Application](https://aws-fun-hackathon.vercel.app/)

Don't just tell us your project is amazing. Give us your README and let us decide.

## 🔧 Running Locally

### Prerequisites

- Git
- Node.js and npm
- Google Gemini API key
- GitHub Personal Access Token (optional)

### Setup

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

**2. Enter the project directory**

```bash
cd YOUR_REPOSITORY
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file or configure the variables in your hosting provider:

```env
GEMINI_API_KEY=your_gemini_api_key
GITHUB_TOKEN=your_github_token
```

The GitHub token is optional and can increase the API rate limit.

**5. Start the application**

```bash
npm run dev
```

Use the development command configured in the project's `package.json`.

### 🔐 Security

API keys are stored as server-side environment variables and must never be exposed in frontend code or committed to the repository.

## 🌍 Why This Project Matters

README Roast is more than an entertainment tool.

- **Developer Education:** Encourages better documentation practices.
- **AI Accessibility:** Demonstrates the practical use of generative AI in an Ethiopian language.
- **Local Innovation:** Brings Ethiopian humor and language into the developer experience.
- **Developer Engagement:** Makes an otherwise boring part of software development interactive and memorable.

Our goal is to show that AI applications can be technically useful, culturally relevant, and genuinely fun.

## 🔮 Future Improvements

- Support for more Ethiopian languages.
- Analysis of source code beyond README documentation.
- Repository quality reports with structured recommendations.
- Support for private repositories through secure GitHub authentication.
- Roast sharing and downloadable roast cards.
- More Ethiopian-inspired AI personalities.

## 👥 Team

Built with creativity, collaboration, and a passion for technology.

**Project:** README Roast — የኮድ ጥብስ

**Category:** AI / Developer Tools

**Live Demo:** https://aws-fun-hackathon.vercel.app/

## 📜 Disclaimer

README Roast is an entertainment and educational project. AI-generated ratings and comments are subjective and should not be considered a professional code audit.

---

<p align="center">

### Made with ❤️ in Ethiopia 🇪🇹

**ኮድህን አትከላከል። READMEህን አስቀድመህ አስተካክል! 🔥**

*Your README. Our AI. Your public embarrassment.*

</p>
