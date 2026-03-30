export const projectDetails = {
    1: {
        title: "CodePilot",
        tagline: "AI-powered cloud IDE — like Cursor, but as a SaaS.",
        description: "CodePilot is a full-stack, browser-based code editor powered by an autonomous AI agent built with Inngest AgentKit. It combines a professional IDE experience — syntax highlighting, tabbed file switcher, ghost text completions, and Cmd+K quick edits — with a live in-browser preview via WebContainers, deep GitHub import/export, Firecrawl-powered URL scraping for real-time docs injection, and a complete SaaS billing layer. The AI agent reasons over your entire file tree and conversation history to autonomously create, edit, and delete files — all while you watch the changes reflect live.",
        liveUrl: "https://codepilot-ai-cloud-ide.vercel.app",
        githubUrl: "https://github.com/priyanshu09102003/codepilot-AI_CLOUD_IDE",
        features: [
            {
                title: "AI Agentic Code Editor",
                description: "Powered by Inngest AgentKit, the AI agent autonomously creates, edits, and deletes files across your project in response to natural language prompts — reasoning over your full file tree and conversation history."
            },
            {
                title: "Ghost Text Suggestions",
                description: "Inline AI completions render as greyed-out ghost text as you type, implemented as a custom CodeMirror 6 decoration. Accept with Tab, dismiss by continuing to type."
            },
            {
                title: "Cmd+K Quick Edit",
                description: "Select any code block, press Cmd+K, describe the change, and the AI rewrites the selection and streams the result back into the editor with full context awareness."
            },
            {
                title: "Live Preview via WebContainers",
                description: "Runs a full Node.js environment directly in the browser using WebAssembly. Mounts the file tree, runs npm install and npm run dev, and forwards the dev server to an iframe — no backend required."
            },
            {
                title: "GitHub Import & Export",
                description: "Connect via Clerk OAuth to import any GitHub repository into the IDE instantly. Export back with a single click via a durable Inngest background job that handles binary files and real-time status tracking."
            },
            {
                title: "Firecrawl URL Scraping",
                description: "Paste any URL — docs page, README, API reference — and CodePilot scrapes it with Firecrawl, converts it to clean Markdown, and injects it into the AI agent's context for accurate, up-to-date code generation."
            },
            {
                title: "Persistent Conversation System",
                description: "Every project stores a full conversation history in Convex. Browse past conversations, resume them, and cancel long-running generations — with a live 'Thinking...' indicator while the agent runs."
            },
            {
                title: "SaaS Billing & Authentication",
                description: "Complete subscription management via Clerk Billing with subscription gating, a billing portal, webhook sync, and full auth (sign-in/sign-up, GitHub OAuth, session middleware)."
            },
        ],
        techStack: [
            {
                tech: "Next.js 15",
                reason: "Full-stack framework powering the IDE shell — App Router, Server Components, and API routes for SSR performance and a clean separation between the editor UI and AI backend."
            },
            {
                tech: "TypeScript",
                reason: "End-to-end type safety across the entire codebase, from Convex schema definitions to React components, making the complex AI agent tooling system easier to reason about."
            },
            {
                tech: "Inngest AgentKit",
                reason: "Powers the agentic AI layer with durable background job execution, automatic retries, and step functions — the agent survives page refreshes and handles multi-step file editing reliably."
            },
            {
                tech: "Convex DB",
                reason: "Reactive real-time database that pushes live updates to the client without polling — keeps the file explorer, chat sidebar, and export status in sync across tabs instantly."
            },
            {
                tech: "WebContainers API",
                reason: "Runs a full Node.js runtime in the browser via WebAssembly, enabling in-browser project execution and live preview with zero backend infrastructure."
            },
            {
                tech: "CodeMirror 6",
                reason: "Best-in-class modular code editor with One Dark theme, multi-language syntax highlighting, tabbed file switcher, and a custom ghost text extension for inline AI completions."
            },
            {
                tech: "Clerk",
                reason: "Handles authentication, GitHub OAuth for repository access, session middleware, and the complete SaaS billing layer including subscription gating and the billing portal."
            },
            {
                tech: "Vercel AI SDK",
                reason: "Used for streaming ghost text completions and the Cmd+K quick edit modal, handling selection-based editing and Firecrawl-enhanced prompt pipelines."
            },
            {
                tech: "Firecrawl",
                reason: "Scrapes any URL to clean Markdown on demand, injecting live documentation into the AI agent's context so it always writes code against the latest API references."
            },
            {
                tech: "TailwindCSS + Zustand",
                reason: "Tailwind handles all styling with utility classes for the dark IDE aesthetic; Zustand manages client-side editor state — open tabs, file content cache, and ghost text state."
            },
            {
                tech: "Sentry",
                reason: "Full error tracking and AI monitoring — captures background job failures, unhandled exceptions, and every LLM call (prompts, tokens, latency, cost) with structured user context."
            },
            {
                tech: "xterm.js",
                reason: "Full-featured terminal emulator rendered in the browser, connected to the WebContainer process for real-time install logs, command execution, and dev server interaction."
            },
        ]
    },
    2: {
        title: "FluxorAI",
        tagline: "Visual AI workflow automation — build and ship intelligent pipelines without code.",
        description: "FluxorAI is a production-ready SaaS platform for building intelligent automation workflows through a drag-and-drop canvas powered by React Flow. Connect trigger nodes (Webhook, Google Forms, Stripe, Manual) to AI nodes (OpenAI, Claude, Gemini) and messaging nodes (Discord, Slack) with a type-safe variable templating system that passes data seamlessly between steps. Workflows run as durable Inngest background jobs with automatic retries and real-time WebSocket updates that animate the canvas live. All credentials are encrypted at rest with Cryptr, every LLM call is tracked via Sentry AI Monitoring, and the full SaaS billing layer is powered by Polar — with a 1-month free trial and global tax compliance out of the box.",
        liveUrl: "https://fluxor-ai-automation.vercel.app/",
        githubUrl: "https://github.com/priyanshu09102003/fluxorAI",
        features: [
            {
                title: "Visual Drag-and-Drop Workflow Builder",
                description: "Build complex automation workflows visually on a React Flow canvas with zoom, pan, minimap, auto-layout, and real-time WebSocket execution updates that animate nodes live as they run."
            },
            {
                title: "Multi-Provider AI Nodes",
                description: "Integrate OpenAI, Anthropic Claude, and Google Gemini 2.5 Flash directly into workflows. Each AI node supports dynamic prompt templates using variable syntax like {{trigger.input}}, with secure auto-loaded credentials."
            },
            {
                title: "Smart Trigger Nodes",
                description: "Start workflows from Webhook (HTTP POST/GET/PUT/DELETE), Google Form submissions via Apps Script OAuth, Stripe payment and subscription events, or a Manual trigger for testing and one-off runs."
            },
            {
                title: "Messaging Integrations",
                description: "Send automated notifications to Discord (rich embeds, mentions, file attachments) and Slack (Block Kit messages, thread replies, channel routing) using dynamic variable templating from upstream nodes."
            },
            {
                title: "Variable & Templating System",
                description: "Pass data between nodes with a type-safe variable system using {{nodeName.output}} dot-notation syntax. View live variable values during execution and access nested objects from any upstream node."
            },
            {
                title: "Secure Credential Management",
                description: "All AI provider API keys and OAuth tokens are encrypted at rest using Cryptr before storage in Neon PostgreSQL — never exposed client-side, with user-scoped isolation and seamless auto-injection at runtime."
            },
            {
                title: "Reliable Background Execution with Inngest",
                description: "Workflows run as durable Inngest background jobs with automatic retries, exponential backoff, step functions, and concurrency control — surviving server restarts and page refreshes without data loss."
            },
            {
                title: "Execution History & AI Monitoring",
                description: "Full audit trail of every workflow run with node-by-node logs, stack traces, variable inspection, and replay for failed runs. Sentry AI Monitoring tracks all LLM calls with token usage, latency, and cost attribution."
            },
            {
                title: "SaaS Billing with Polar",
                description: "1-month free trial (no card required) followed by a $15/month PRO plan. Powered by Polar with global currency support, automatic tax compliance, PDF invoice generation, and a full subscription management portal."
            },
        ],
        techStack: [
            {
                tech: "Next.js 15",
                reason: "Full-stack framework with App Router, Server Components, and API routes powering the entire SaaS — SSR for performance and clean separation between the visual canvas UI and the workflow execution backend."
            },
            {
                tech: "React Flow",
                reason: "The core of the visual builder — provides the interactive canvas with drag-and-drop nodes, edge connections, minimap, zoom/pan, and custom node rendering for all trigger, AI, and messaging node types."
            },
            {
                tech: "Inngest",
                reason: "Powers durable workflow execution as background jobs with automatic retries, step functions, sleep/delay support, and event-driven orchestration — ensuring reliable execution at scale even through failures."
            },
            {
                tech: "tRPC",
                reason: "End-to-end type-safe API layer between frontend and backend, eliminating runtime errors in API communication and providing automatic TypeScript types from server to client with no code generation."
            },
            {
                tech: "Better Auth",
                reason: "Modern authentication with email/password, GitHub OAuth, and Google OAuth — providing session management, role-based access control, and type-safe auth APIs across the application."
            },
            {
                tech: "Neon PostgreSQL + Prisma",
                reason: "Serverless autoscaling Postgres (Neon) for the database layer, with Prisma ORM providing type-safe queries, auto-generated TypeScript types, and schema-driven migrations for all workflow and user data."
            },
            {
                tech: "WebSockets",
                reason: "Enables real-time workflow execution feedback — nodes animate on the canvas as they run, variable values update live, and status badges change instantly without polling."
            },
            {
                tech: "Cryptr",
                reason: "Encrypts all AI provider API keys and OAuth tokens before storing in the database, ensuring credentials are never in plain text and are only decrypted server-side during workflow execution."
            },
            {
                tech: "OpenAI / Anthropic / Gemini SDKs",
                reason: "Official TypeScript SDKs for all three AI providers — enabling text generation, streaming, embeddings, and multimodal processing within workflow AI nodes, each with configurable prompts and parameters."
            },
            {
                tech: "Polar",
                reason: "SaaS payment and subscription infrastructure handling recurring billing, global currency conversion, automatic tax compliance (VAT/GST), PDF invoice generation, and the full customer billing portal."
            },
            {
                tech: "Sentry + AI Monitoring",
                reason: "Application error tracking with full stack traces and breadcrumbs, plus specialized LLM monitoring that logs every AI API call with token usage, latency, cost attribution, and AI-suggested fix recommendations."
            },
            {
                tech: "TailwindCSS + Shadcn UI",
                reason: "Tailwind utility classes for rapid, consistent UI development; Shadcn UI provides accessible, Radix-based components (dialogs, dropdowns, forms) fully customized to match the platform's visual design."
            },
        ]
    },

     3: {
        title: "Signalist",
        tagline: "Real-time market intelligence for stocks & crypto — all in one place.",
        description: "Signalist is a comprehensive market intelligence platform for stocks and cryptocurrencies. The dashboard combines live sector heatmaps, TradingView candlestick charts, real-time financial tables, and top market news — all powered by Finnhub and CoinGecko APIs. A global ⌘K search gives instant access to any stock or coin, with detailed pages showing OHLCV charts, technical analysis gauges, and full fundamental data (P/E, margins, cash flow, ROE). Add any stock to your watchlist and Inngest background workflows kick in automatically — running daily cron jobs that fetch live data, generate AI-powered buy/sell insights, and deliver personalized email reports via Nodemailer. The crypto section covers trending coins, top categories (DeFi, L1, stablecoins), exchange listings, and a multi-currency price converter.",
        liveUrl: "https://signalist-tracker.vercel.app/",
        githubUrl: "https://github.com/priyanshu09102003/Signalist_Stock_Market_Application",
        features: [
            {
                title: "Real-Time Stock & Crypto Dashboard",
                description: "Live market overview with sector performance charts, a color-coded heatmap across Electronic Technology, Health Tech, Finance, and more, financial tables with real-time price/change/volume data, and top market-moving news — all updating continuously via Finnhub and CoinGecko."
            },
            {
                title: "Global Search (⌘K)",
                description: "Instant search modal accessible from anywhere in the app. Shows the top 10 most popular global stocks by default and returns real-time results as you type, with company name, ticker, stock type, and a direct link to the full details page."
            },
            {
                title: "Professional Stock Details Page",
                description: "Per-stock pages with interactive TradingView candlestick charts across multiple timeframes (1m, 5m, 30m, 1h, 1d), a technical analysis sentiment gauge showing buy/sell/neutral signal counts, and a full fundamentals panel — valuation ratios, profitability margins, efficiency ratios, and cash flow data from Finnhub."
            },
            {
                title: "AI-Powered Watchlist Alerts",
                description: "Add any stock to your watchlist and Inngest automatically activates daily cron workflows — fetching live Finnhub data each morning, generating AI-driven buy/sell signal insights, and emailing a personalized market report via Nodemailer."
            },
            {
                title: "Cryptocurrency Intelligence",
                description: "Dedicated crypto dashboard with TradingView live charts for thousands of coins, trending assets, top categories (DeFi, L1, stablecoins), exchange listings, a coin search, and a real-time multi-currency price converter — all powered by CoinGecko."
            },
            {
                title: "Smart Onboarding & Email Notifications",
                description: "On signup, Better Auth triggers an Inngest onboarding workflow that sends a personalized welcome email via Nodemailer tailored to the user's chosen investment preferences and markets of interest."
            },
            {
                title: "Secure Authentication & Personalization",
                description: "Better Auth handles email/password login and OAuth (GitHub, Google) with session management and MFA support. Watchlists, alert configs, and preferences are persisted per user in MongoDB and sync across devices."
            },
        ],
        techStack: [
            {
                tech: "Next.js",
                reason: "Full-stack framework providing SSR, App Router, and API routes — powering the dashboard UI, stock/crypto data fetching, and the Inngest workflow endpoints from a single codebase."
            },
            {
                tech: "TypeScript",
                reason: "End-to-end type safety across API integrations, database models, and React components — critical for reliably handling complex financial data structures from multiple external APIs."
            },
            {
                tech: "Finnhub API",
                reason: "Primary data source for all stock market data — live prices, OHLCV data, sector fundamentals, valuation metrics, earnings, and financial news, powering the dashboard, stock detail pages, and watchlist workflows."
            },
            {
                tech: "CoinGecko API",
                reason: "Comprehensive crypto data source providing real-time prices, market cap, 24h volume, trending coins, category breakdowns, exchange listings, and currency conversion rates for the crypto dashboard."
            },
            {
                tech: "TradingView Widgets",
                reason: "Industry-standard financial charting library rendering interactive candlestick charts with OHLCV data, technical indicators, and multi-timeframe support — used across both the stock and crypto detail pages."
            },
            {
                tech: "Inngest",
                reason: "Powers all background automation — daily cron jobs that fetch watchlist stock data, generate AI-powered buy/sell insights, trigger alert emails, and run the personalized onboarding workflow on new signups."
            },
            {
                tech: "Nodemailer",
                reason: "Handles all transactional email delivery via SMTP/OAuth2 — sending personalized welcome emails on signup and daily AI-generated watchlist insight reports to users."
            },
            {
                tech: "Better Auth",
                reason: "Manages authentication with email/password, GitHub OAuth, Google OAuth, MFA, and session handling — with user preferences and watchlist data scoped securely per account."
            },
            {
                tech: "MongoDB",
                reason: "Flexible NoSQL database storing user watchlists, alert configurations, session data, and preferences in JSON-like documents — well-suited to the dynamic, user-specific data structures of the platform."
            },
            {
                tech: "Shadcn UI + TailwindCSS",
                reason: "Shadcn provides accessible, customizable components (tables, modals, dropdowns) while Tailwind handles all utility-first styling — enabling the clean, data-dense financial dashboard aesthetic."
            },
        ]
    }
}