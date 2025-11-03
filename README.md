## Cage-free Tracker

Cage-free tracker is Webapp with AI powered APIs to track cage-free egg initiatives globally, with real-time data on corporate pledges, regional progress, and implementation status.


## 🧱 Tech Stack Overview

| Layer         | Technology                            | Purpose |
|--------------|----------------------------------------|---------|
| Frontend     | React + Tailwind or Material UI        | Responsive UI |
| Backend/API  | Node.js + Express                      | API routing and data aggregation |
| AI Layer     | OpenAI GPT API or Azure OpenAI         | Summarization, Q&A, insight generation |
| Data Sources | EggTrack, CageFreeTracker, Planet4All  | Real-time pledge and progress data |
| Database     | MongoDB or PostgreSQL                  | Store pledge data, progress logs |
| Auth         | Firebase Auth or Auth0                 | Optional user login for dashboards |
| Hosting      | Vercel or Netlify                      | Frontend deployment |
| Visualization| D3.js or Chart.js                      | Maps, graphs, timelines |

---

## 🔍 Key Features

### 1. Global Cage-Free Dashboard
- Total number of caged vs cage-free hens by region (Asia, Europe, Americas).
- Country-level breakdowns with filters.
- Year-over-year progress graphs.

### 2. Corporate Pledge Tracker
- List of major corporations (e.g., Nestlé, Unilever, McDonald’s) with:
  - Pledge year
  - Target year
  - Current progress (% cage-free)
  - Region of operation
- GPT-powered summaries of each company’s public statements and controversies.

### 3. Interactive Map
- Color-coded world map showing cage-free adoption rates.
- Clickable countries for detailed stats and corporate activity.

### 4. AI Insights & Q&A
- Users can ask: “Which companies in Asia are lagging behind?” or “What’s the cage-free progress in India?”
- GPT responds with summarized, cited answers using scraped data and reports.

### 5. Progress Timeline
- Visualize implementation milestones.
- Highlight delays, accelerations, and policy changes.

---

## GPT Use Cases

- **Summarize corporate reports** and extract key metrics.
- **Generate region-specific insights** based on raw data.
- **Answer user questions** about trends, ethics, and policy.
- **Detect greenwashing language** in corporate statements.

---

## 🔌 External Data Sources

- [EggTrack](https://www.eggtrack.com/) – Corporate pledge tracking across regions
- [Planet4All](https://www.planet4all.org/en/post/2025-cage-free-transition-progress-1) – 2025 progress updates
- [CageFreeTracker](https://www.cagefreetracker.com/asia) – Asia-specific corporate monitoring

You can scrape or request access to their APIs (if available), or use Puppeteer/Cheerio for structured scraping.

---

##  MVP Development Plan

1. Set up React frontend with basic dashboard layout.
2. Build backend API to fetch and store data from EggTrack and others.
3. Integrate GPT API for summarization and Q&A.
4. Create MongoDB schema for pledges, companies, and progress logs.
5. Design visualizations for maps and timelines.
6. Deploy and test with real user queries.

