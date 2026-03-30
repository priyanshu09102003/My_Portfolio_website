export const projectDetails = {
    1: {
        title: "CodePilot",
        tagline: "A browser-based, AI-powered cloud code editor — build, preview, and ship with an intelligent agentic AI layer, live WebContainers preview, and full GitHub integration.",
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
    
}