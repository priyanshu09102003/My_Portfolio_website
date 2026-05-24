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
        tagline: "A visual AI-automation platform to build, automate, and deploy intelligent AI workflows at scale.",
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
    },

    5: {
    title: "DeepScope",
    tagline: "AI-powered genomic variant analysis — predict DNA mutation pathogenicity with a 7B genomic language model.",
    description: "DeepScope is a full-stack biomedical web application built by me and my team as a research project, aimed to make state-of-the-art genomic intelligence accessible through a modern browser-based interface. The platform was developed across two phases. Phase I established a molecular design and drug discovery research layer, integrating NVIDIA MolMIM (a latent variable model trained on 1.54 billion molecules from ZINC-15) with PubChem chemical data and RDKit cheminformatics — enabling novel drug-like molecule generation with 85% novelty and 92% Lipinski compliance using the CMA-ES optimisation algorithm. Phase II delivered the core production system: a genomic variant analysis engine powered by the EVO2 7B genomic language model, trained on 8.8 trillion tokens across all domains of life using the StripedHyena 2 architecture. Deployed on serverless NVIDIA H100 GPUs via Modal, DeepScope accepts a genomic position and an alternative nucleotide, fetches a live 8,192 base-pair reference window from the UCSC Genome Browser, scores both the reference and mutated sequences via log-likelihood analysis, and classifies Single Nucleotide Variants (SNVs) as Likely Pathogenic or Likely Benign with a calibrated confidence score. The classification threshold was derived from a ROC analysis on BRCA1 variants from the ClinVar database. The Next.js frontend features a live interactive nucleotide sequence viewer, gene and chromosome browser, a paginated ClinVar variant explorer, and a side-by-side comparison modal to benchmark EVO2 predictions against established clinical classifications — validated on genes including BRCA1, BRAF, TP53, and LDLR.",
    liveUrl: "https://deepscope.vercel.app",
    githubUrl: "https://github.com/priyanshu09102003/deepscope",
    features: [
        {
            title: "EVO2 7B Genomic Language Model",
            description: "Integrates the ArcInstitute's EVO2 7B model — trained on 8.8 trillion genomic tokens using the StripedHyena 2 architecture — for zero-shot Single Nucleotide Variant (SNV) pathogenicity prediction via log-likelihood delta scoring. No fine-tuning required; the model generalises across all human genes."
        },
        {
            title: "Serverless H100 GPU Inference",
            description: "The EVO2 model is deployed as a FastAPI endpoint on Modal's serverless cloud infrastructure, provisioned with an NVIDIA H100 GPU. Model weights (~15GB) are cached in a persistent Modal Volume, delivering 3–5 second warm inference times per variant with zero idle compute costs."
        },
        {
            title: "SNV Pathogenicity Classification",
            description: "Classifies variants as Likely Pathogenic or Likely Benign by computing the log-likelihood delta (Δ = log P(variant) − log P(reference)) against a threshold of −0.0009178519, derived from ROC analysis on known BRCA1 variants. Confidence scores are normalised using class-specific standard deviations for calibrated predictions."
        },
        {
            title: "ClinVar Comparison Modal",
            description: "After running an EVO2 prediction, users can compare the result side-by-side against established ClinVar clinical classifications in a dedicated comparison overlay — enabling direct assessment of agreement between the deep learning model and expert-curated clinical consensus."
        },
        {
            title: "Live Interactive Gene & Sequence Browser",
            description: "Search any gene by name (e.g. BRCA1, BRAF, TP53) or browse by chromosome. The reference DNA sequence is fetched live from the UCSC Genome Browser API and rendered as a colour-coded interactive nucleotide viewer — clicking any base automatically pre-fills the variant position in the analysis form."
        },
        {
            title: "Known Variant Explorer (ClinVar)",
            description: "Paginated table of known clinical variants for the selected gene region, pulled in real-time from NCBI ClinVar via the E-utilities API. Each entry shows position, reference and alternative alleles, and ClinVar significance — with a one-click 'Analyse with EVO2' button that auto-populates the analysis form."
        },
        {
            title: "Genome Assembly Selector",
            description: "Supports multiple UCSC genome assemblies including hg38 (GRCh38, the current human reference genome) and others, with the genome list fetched live from the UCSC API — ensuring compatibility with different research and clinical contexts."
        },
        {
            title: "Molecular Design Engine",
            description: "Built on NVIDIA MolMIM, a latent variable model with a Perceiver Encoder and Transformer Decoder trained on 1.54 billion molecules from ZINC-15. Generates novel drug-like molecules optimised for target properties using the CMA-ES algorithm, with an 85% novelty rate against PubChem and 92% Lipinski compliance."
        },
        {
            title: "PubChem & RDKit Integration",
            description: "Integrates the PubChem chemical database for molecular data retrieval and RDKit cheminformatics for structural analysis, property computation, and molecule visualisation — forming the data backbone of the Phase I drug discovery research platform."
        },
        {
            title: "Secure Proxy Architecture",
            description: "The Modal GPU inference endpoint URL is protected through a server-side Next.js API proxy route — the browser never sees the backend URL, preventing endpoint abuse and CORS issues while keeping GPU inference costs controlled."
        },
    ],
    techStack: [
        {
            tech: "EVO2 7B (StripedHyena 2)",
            reason: "The core AI engine — a genomic foundation model trained on 8.8 trillion nucleotide tokens from all domains of life. Used for zero-shot log-likelihood scoring of reference and variant DNA sequences to predict SNV pathogenicity without any task-specific fine-tuning."
        },
        {
            tech: "Modal (Serverless GPU)",
            reason: "Provisions and auto-scales NVIDIA H100 GPU containers for EVO2 inference on demand. Handles container image builds with CUDA 12.8, PyTorch 2.7.1, and FlashAttention 2.8.0, and caches the 15GB model weights in a persistent Volume — enabling warm inference in 3–5 seconds with zero idle costs."
        },
        {
            tech: "FastAPI",
            reason: "REST API framework serving the EVO2 inference endpoint on Modal. Handles Pydantic request validation, the UCSC genome sequence fetch fallback, the variant sequence construction pipeline, and JSON result serialisation."
        },
        {
            tech: "Python 3.12",
            reason: "Core backend language powering the Modal application, the EVO2 model lifecycle management, the log-likelihood delta scoring pipeline, the ROC calibration analysis, and all genomic data processing utilities."
        },
        {
            tech: "Next.js 15",
            reason: "Full-stack React framework powering the entire frontend — App Router, Server Components, and the /api/analyze server-side proxy route that securely bridges the browser and the Modal GPU inference endpoint."
        },
        {
            tech: "TypeScript",
            reason: "End-to-end type safety across all React components, the genome-api.ts utility module, and the T3 env.js Zod schema — critical for reliably handling complex genomic coordinate types and multi-source API response structures."
        },
        {
            tech: "UCSC Genome Browser API",
            reason: "Primary data source for live reference genome sequences — fetches 8,192 bp windows centred on variant positions from the hg38 assembly in real time, supporting both the frontend nucleotide viewer and the backend inference pipeline."
        },
        {
            tech: "NCBI ClinVar / E-utilities API",
            reason: "Provides known clinical variant classifications for any gene region via a two-step esearch + esummary query pipeline, powering the ClinVar variant explorer table and the EVO2 vs ClinVar comparison feature."
        },
        {
            tech: "NLM Clinical Tables API",
            reason: "Powers the real-time gene name search and autocomplete component, returning NCBI gene identifiers for any human gene name query — enabling seamless gene navigation without requiring local gene index data."
        },
        {
            tech: "NVIDIA MolMIM",
            reason: "Phase I molecular design engine — a latent variable model with a Perceiver Encoder and Transformer Decoder trained on 1.54 billion molecules. Used for CMA-ES-guided generation of novel drug-like molecules optimised for target pharmacological properties."
        },
        {
            tech: "RDKit + PubChem",
            reason: "Phase I cheminformatics stack — RDKit handles molecular structural analysis, property computation, and 2D structure visualisation; PubChem provides the chemical database layer for molecular data retrieval and novelty benchmarking."
        },
        {
            tech: "Tailwind CSS + Shadcn UI",
            reason: "Tailwind utility classes handle all responsive styling for the data-dense genomic interface; Shadcn UI (built on Radix UI) provides accessible, customisable components including tabs, cards, tables, and modals used throughout the variant explorer."
        },
        {
            tech: "Vercel",
            reason: "Frontend hosting and edge deployment for the Next.js application, with environment variable management for the server-side BACKEND_URL secret and automatic CI/CD from the GitHub repository."
        },
        {
            tech: "HuggingFace Hub",
            reason: "Hosts the arcinstitute/evo2_7b model weights (~15GB). On first Modal deployment, weights are downloaded and cached in a persistent Modal Volume — subsequent container starts load from cache, avoiding repeat downloads."
        },
    ]
},

    6: {
    title: "SpecTrum",
    tagline: "A unified learning platform that merges instructor-led courses with AI-powered on-demand learning.",
    description: "SpecTrum is a full-stack educational technology platform built with my team at the Dawn of Code Hackathon, where we reached the finals. It solves the 'knowledge juggle' problem — students, researchers, and professionals waste up to 40% of their productive time context-switching across fragmented tools like Coursera, ChatGPT, Google Docs, and Zotero. SpecTrum consolidates all of this into one seamless ecosystem. The platform operates on a dual-mode architecture: the 'Guided Path' for structured, instructor-led courses with timestamps, note uploads, and a doubt engine — and the 'Express Lane', an LLM-powered AI engine that generates fully personalised courses on any topic in under 60 seconds, complete with curated resources, lecture summaries, video content, and digital notes. The frontend integrates Three.js for immersive 3D learning environments, transforming traditional course interfaces into interactive spatial experiences. The backend is built on Prisma ORM with PostgreSQL for type-safe data management, Arcjet for bot protection and rate limiting, AWS S3 with pre-signed URLs for secure media storage, and Stripe for subscription billing.",
    liveUrl: "",
    githubUrl: "",
    features: [
        {
            title: "AI Express Lane — Instant Course Generation",
            description: "LLM-powered engine that generates a fully personalised course on any topic in under 60 seconds. Users specify the duration and difficulty level, and the AI produces a structured curriculum with curated resources, lecture summaries, code snippets, and comprehensive digital notes — all in one click."
        },
        {
            title: "Guided Path — Instructor-Led Courses",
            description: "Structured course creation dashboard for educators with course structuring tools, automatic timestamp generation, note and resource uploading, and an integrated doubt engine — enabling a complete instructor-to-learner experience within the platform."
        },
        {
            title: "Immersive 3D Learning Environments",
            description: "Integrates Three.js to render interactive 3D environments within the learning interface, transforming traditional flat course pages into spatial, immersive experiences that improve engagement and knowledge retention."
        },
        {
            title: "Inbuilt Video Player with Curated Lectures",
            description: "Both Express Lane and Guided Path courses include an inbuilt video player with curated video lectures matched to the user's topic, duration preference, and difficulty — going beyond just text notes to deliver a complete multimedia learning experience."
        },
        {
            title: "Automated Knowledge Curation",
            description: "For every AI-generated course, the platform automatically curates and organises the most relevant external resources, references, and reading materials — eliminating the need for learners to manually search across multiple platforms."
        },
        {
            title: "Secure Authentication & Bot Protection",
            description: "Clerk handles user authentication with OAuth and session management, while Arcjet provides comprehensive bot protection, rate limiting, and attack prevention — ensuring the platform is secure at scale."
        },
        {
            title: "AWS S3 Media Infrastructure",
            description: "All course media — videos, notes, uploaded instructor files — are stored on Amazon S3 with pre-signed URLs for secure, direct content delivery. Designed for scalability and reliable access across all user types."
        },
        {
            title: "Stripe Subscription Billing",
            description: "Full subscription management via Stripe, supporting recurring billing, plan gating between free and premium tiers, and secure payment processing — providing the complete SaaS monetisation layer for both learners and educators."
        },
    ],
    techStack: [
        {
            tech: "Next.js 15",
            reason: "Full-stack framework powering the entire platform — App Router, Server Components, and API routes handle both the dual-mode learning UI and the backend data pipeline for course generation and content delivery."
        },
        {
            tech: "Three.js",
            reason: "Powers the immersive 3D learning environments integrated into the course interface, enabling interactive spatial experiences that go beyond traditional flat course layouts."
        },
        {
            tech: "LLM API",
            reason: "The core of the Express Lane feature — drives instant, personalised course generation from a single topic input, producing structured curricula, curated resources, summaries, and digital notes in under 60 seconds."
        },
        {
            tech: "TypeScript",
            reason: "End-to-end type safety across all React components, API routes, and database queries — critical for maintaining reliability across the dual-mode platform's complex data flows."
        },
        {
            tech: "Prisma ORM + PostgreSQL",
            reason: "PostgreSQL provides a robust, scalable relational database for all course, user, and content data; Prisma adds type-safe, auto-generated query APIs and schema-driven migrations."
        },
        {
            tech: "Clerk",
            reason: "Handles user authentication with email/password and OAuth, session management, and role-based access control for both learner and instructor account types."
        },
        {
            tech: "Arcjet",
            reason: "Provides comprehensive application security — bot detection, rate limiting, and protection against common web attacks — ensuring the platform remains reliable and abuse-resistant under load."
        },
        {
            tech: "Amazon S3 (AWS)",
            reason: "Industry-standard scalable object storage for all course media and uploaded instructor content, with pre-signed URLs enabling secure, direct browser access without routing large files through the server."
        },
        {
            tech: "Stripe",
            reason: "Handles all subscription billing and payment processing — recurring plans, plan-based feature gating, and secure checkout — providing the complete monetisation infrastructure for the SaaS platform."
        },
        {
            tech: "TailwindCSS + Shadcn UI",
            reason: "Tailwind utility classes enable rapid, consistent styling for the data-dense learning interface; Shadcn UI provides accessible, Radix-based components customised to match the platform's minimalist but immersive design language."
        },
    ]
},

7: {
    title: "MeetFlow - AI Video Intelligence with RAG",
    tagline: "Transform any video or meeting recording into structured, queryable intelligence.",
    description: "MeetFlow is a full-stack AI pipeline that ingests YouTube videos or local audio/video files and processes them through a six-stage intelligence engine to deliver structured, actionable knowledge. It generates full verbatim transcripts, professional bullet-point summaries, and automatically extracts action items, key decisions, and open questions — all powered by Gemini 2.0 Flash. The standout feature is a RAG-powered conversational chat interface that lets you ask any question about the video content and receive answers grounded strictly in the transcript itself, with ChromaDB as the persistent vector store and all-MiniLM-L6-v2 for semantic embeddings — ensuring zero hallucination. A first-class Hindi and Hinglish support layer via Sarvam AI's saaras:v2.5 model performs speech-to-text transcription and English translation in a single API call, making the full downstream pipeline — summarisation, extraction, and RAG chat — available for Indian-language recordings. The summarisation pipeline uses a map-reduce architecture to handle transcripts of any length, and the interface is built on Streamlit extended with custom CSS, CSS variables, Syne and JetBrains Mono typography, and animated pipeline status indicators for a production-grade dark UI.",
    liveUrl: "",
    githubUrl: "https://github.com/priyanshu09102003/Meetflow-AI_Video_Assistant_with_RAG",
    features: [
        {
            title: "RAG-Powered Conversational Chat",
            description: "Ask any question about the video or meeting and get an answer grounded strictly in the transcript. The RAG pipeline embeds the transcript into ChromaDB using all-MiniLM-L6-v2, retrieves the top-4 most semantically relevant chunks per query, and passes them to Gemini with an explicit grounding instruction — if the answer isn't in the transcript, the model says so rather than hallucinating."
        },
        {
            title: "Hindi & Hinglish Support",
            description: "One of very few RAG pipelines with native support for Hindi and code-switched Hinglish audio. Sarvam AI's saaras:v2.5 model performs speech-to-text transcription and English translation in a single API call — the resulting English transcript feeds directly into the same summarisation, extraction, and RAG pipeline as any English recording, with no downstream code changes required."
        },
        {
            title: "Map-Reduce Summarisation",
            description: "Handles transcripts of any length using a two-phase map-reduce approach — the transcript is split into 6000-token chunks, each independently summarised by Gemini (map phase), and all partial summaries are combined into a final professional bullet-point summary (reduce phase). No context window limits, no truncation."
        },
        {
            title: "Automated Insight Extraction",
            description: "Three independent LangChain chains run against the full transcript to extract action items with owners and deadlines, key decisions made during the session, and open questions needing follow-up. Empty categories are hidden entirely — the UI expands non-empty results to fill available width dynamically."
        },
        {
            title: "Multi-Source Audio Ingestion",
            description: "Accepts YouTube URLs (downloaded via yt-dlp with FFmpeg post-processing) and local file uploads across MP4, MKV, MOV, MP3, WAV, M4A, and WebM formats. All audio is normalised to mono 16kHz WAV — the exact format Whisper and Sarvam expect — and chunked into 10-minute segments to stay within API limits."
        },
        {
            title: "Local Whisper Transcription",
            description: "English audio is transcribed entirely locally using OpenAI's Whisper small model — no API call, no cost, full privacy. All chunk transcripts are concatenated into a single continuous transcript string that feeds the downstream pipeline."
        },
        {
            title: "Persistent Vector Store",
            description: "ChromaDB persists the vector index to disk at ./vector_db/, surviving app restarts and avoiding redundant re-embedding of the same transcript across sessions. The 500-token chunk size with 50-token overlap is tuned for high retrieval precision — each chunk maps to roughly 30–45 seconds of speech, a semantically coherent unit."
        },
        {
            title: "Production-Grade Dark UI",
            description: "Built on Streamlit extended with custom CSS variables, a grid background, glow effects, animated pipeline status dots, and Syne + JetBrains Mono typography — far beyond Streamlit's default aesthetic. The sidebar shows a live six-stage pipeline status with pulsing indicators, and the results layout adapts responsively based on which insight categories have content."
        },
    ],
    techStack: [
        {
            tech: "Gemini 2.0 Flash",
            reason: "Primary LLM powering title generation, map-reduce summarisation, insight extraction (action items, decisions, open questions), and RAG answer generation — chosen for its 15 RPM / 1500 RPD free tier, which comfortably handles the 6–8 sequential API calls the pipeline fires per session."
        },
        {
            tech: "OpenAI Whisper (small)",
            reason: "Local English speech-to-text transcription — runs entirely on CPU with no API call, no cost, and full privacy. The small model balances transcription accuracy and speed for recordings up to several hours."
        },
        {
            tech: "Sarvam AI (saaras:v2.5)",
            reason: "State-of-the-art Indian language speech model that performs Hindi/Hinglish transcription and English translation in a single API call. Handles code-switching between Hindi and English natively, producing an English transcript that feeds directly into the downstream pipeline."
        },
        {
            tech: "ChromaDB",
            reason: "Persistent vector store for the RAG engine — stores 384-dimensional embeddings of transcript chunks on disk, enabling cosine similarity search for top-k retrieval per query and surviving app restarts without re-embedding."
        },
        {
            tech: "LangChain (LCEL)",
            reason: "Powers all LLM chain composition — the map-reduce summarisation chains, the three insight extraction chains, and the RAG chain built with LangChain Expression Language for declarative, composable retriever → prompt → LLM → parser pipelines."
        },
        {
            tech: "HuggingFace all-MiniLM-L6-v2",
            reason: "22M parameter sentence transformer producing 384-dimensional dense vectors for both transcript chunk indexing and query embedding. Runs entirely locally on CPU — no API latency or cost — with strong semantic accuracy on short text passages."
        },
        {
            tech: "Streamlit",
            reason: "Web UI framework extended with custom CSS variables, typography, glow effects, animated pipeline status indicators, and a responsive card layout — delivering a production-grade dark interface well beyond Streamlit's default aesthetic."
        },
        {
            tech: "yt-dlp + FFmpeg",
            reason: "yt-dlp handles YouTube audio extraction with FFmpeg post-processing to convert downloaded streams to clean mono 16kHz WAV — the exact format required by both Whisper and Sarvam for accurate transcription."
        },
        {
            tech: "PyDub",
            reason: "Handles format conversion for locally uploaded files (MP4, MKV, MOV, MP3, M4A, WebM) to normalised WAV, and performs the 10-minute chunking of long recordings to stay within transcription API size limits."
        },
        {
            tech: "Python 3.12",
            reason: "Core language powering the entire pipeline — audio processing, transcription routing, LLM chain orchestration, vector store management, and the Streamlit application layer."
        },
    ]
}, 

8: {
    title: "Apex UI",
    tagline: "An open-source React component library for building production-grade applications faster.",
    description: "Apex UI is a premium, open-source UI component library built with Next.js 16, React 19+, TypeScript, and Tailwind CSS v4. It delivers 100+ beautifully crafted, animated, and accessible components and composite blocks that drop into any project with a single CLI command. The library is architected around a dual registry system — separate registries for modular individual components and multi-file composite blocks — with automated CLI-based installation via the shadcn registry protocol and intelligent dependency resolution that handles transitive requirements automatically. Components are built on top of shadcn/ui and Radix UI primitives, extended with custom CSS animations, advanced interactivity, and WCAG accessibility compliance. The documentation site is built with Fumadocs and features live component previews, interactive code playgrounds, and v0 editor integration for real-time editing. The theming system is built on Tailwind CSS v4 CSS variables and design tokens, enabling full visual customisation without touching component internals. Apex UI was created to empower developers with production-grade UI components, improve design consistency across applications, and contribute high-quality reusable components back to the open-source community.",
    liveUrl: "https://apexui-kappa.vercel.app",
    githubUrl: "https://github.com/priyanshu09102003/apexui",
    features: [
        {
            title: "100+ Production-Ready Components & Blocks",
            description: "A comprehensive library of individually modular components (cards, buttons, inputs, modals, and more) and composite blocks — multi-file, multi-component assemblies like AI card generators — all production-ready, animated, and accessible out of the box."
        },
        {
            title: "Dual Registry Architecture",
            description: "Engineered separate shadcn registries for components and blocks, with each entry declaring its own dependency graph. The CLI resolves and installs all required files, utilities, and peer dependencies automatically — reducing integration from hours to a single command."
        },
        {
            title: "One-Command CLI Installation",
            description: "Any component or block installs with a single shadcn CLI command across npm, pnpm, and bun. The registry protocol handles file placement, dependency installation, and utility setup — developers go from install to rendered component in seconds."
        },
        {
            title: "Modern Animation Library",
            description: "Every component ships with carefully crafted CSS animations and transition effects — hover states, entrance animations, interactive feedback, and micro-interactions — all tuned to feel premium without sacrificing performance."
        },
        {
            title: "Tailwind CSS v4 Theming System",
            description: "The entire library is built on Tailwind CSS v4 CSS variables and design tokens, enabling full theme customisation — colours, radius, spacing, typography — without modifying any component internals. Light and dark mode support is built in."
        },
        {
            title: "Interactive Documentation with Fumadocs",
            description: "Comprehensive documentation built with Fumadocs featuring live component previews, copy-ready code snippets, interactive code playgrounds, and v0 editor integration — so developers can see, edit, and copy components without leaving the docs."
        },
        {
            title: "WCAG Accessibility Compliance",
            description: "All components are built on Radix UI primitives, inheriting keyboard navigation, screen reader support, focus management, and ARIA attribute handling — meeting WCAG accessibility standards without any additional configuration."
        },
        {
            title: "Monorepo & Multi-Package Support",
            description: "The CLI supports monorepo workspaces via the -c flag, allowing teams to install components directly into specific workspace packages — making Apex UI usable in enterprise monorepo setups alongside standard single-repo projects."
        },
    ],
    techStack: [
        {
            tech: "Next.js 16 + React 19",
            reason: "Powers the Apex UI documentation and preview site — App Router and Server Components deliver fast, SEO-friendly pages for the component catalogue, while React 19's concurrent features support the live interactive previews."
        },
        {
            tech: "TypeScript",
            reason: "End-to-end type safety across all component props, variant definitions, and utility functions — ensuring every component shipped in the registry has fully typed APIs that integrate cleanly into any TypeScript project."
        },
        {
            tech: "Tailwind CSS v4",
            reason: "The styling backbone of every component — utility classes handle all layout, spacing, and responsive behaviour, while CSS variables and the v4 design token system power the theming layer that lets users customise the entire library from a single config."
        },
        {
            tech: "shadcn/ui + Radix UI",
            reason: "The architectural foundation — shadcn/ui's registry protocol enables the CLI-based installation system, while Radix UI primitives provide the accessible, unstyled component behaviours (dialogs, dropdowns, tabs, selects) that Apex UI components are built on top of."
        },
        {
            tech: "Fumadocs",
            reason: "Powers the interactive documentation site with live component previews, syntax-highlighted code blocks, copy buttons, and v0 editor integration — purpose-built for component library documentation with a clean, searchable layout."
        },
        {
            tech: "Custom shadcn Registry",
            reason: "A dual registry system with separate JSON manifests for individual components and composite blocks, each declaring file paths, dependencies, and peer requirements — enabling the shadcn CLI to resolve and install everything automatically."
        },
        {
            tech: "Lucide React",
            reason: "Default icon library used across components — consistently sized, stroke-based SVG icons that scale cleanly with Tailwind utility classes and respect the theming system's colour tokens."
        },
    ]
}

}