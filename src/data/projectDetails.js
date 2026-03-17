export const projectDetails = {
    1: {
        tagline: "A browser-based, AI-powered code editor with agentic intelligence — like Cursor, but as a SaaS.",
        features: [
            { title: "AI Agentic Code Editor", description: "Powered by Inngest AgentKit, the AI agent can create, edit, and reason about your entire codebase autonomously." },
            { title: "Live Preview System", description: "Fully functional in-browser preview that updates in real time as you code, powered by WebContainers." },
            { title: "GitHub Import & Export", description: "Seamlessly import repositories from GitHub and push changes back — full version control integration." },
            { title: "Syntax Highlighting", description: "Professional IDE-level syntax highlighting across multiple programming languages." },
            { title: "Conversational AI Coding Agent", description: "Chat with the AI to explain, debug, refactor, or generate code — context-aware across your entire project." },
            { title: "SaaS Billing Layer", description: "Complete subscription system with authentication and payment integration for production-ready deployment." },
        ],
        techStack: [
            { tech: "Next.js", reason: "Chosen for its hybrid SSR/SSG capabilities, enabling fast loads and seamless API routes for the SaaS backend." },
            { tech: "Inngest AgentKit", reason: "Powers the agentic AI layer — handles durable workflows, retries, and multi-step reasoning for the AI coding agent." },
            { tech: "WebContainers", reason: "Enables full in-browser Node.js runtime so users can run and preview code without any server-side execution." },
            { tech: "React", reason: "Used for building the interactive IDE UI with complex state management and real-time editor updates." },
            { tech: "Tailwind CSS", reason: "Enables rapid, consistent UI development with utility classes matching the dark IDE aesthetic." },
            { tech: "Vercel", reason: "Deployed on Vercel for instant CI/CD, edge functions, and global CDN performance." },
        ]
    },
    2: {
        tagline: "A visual AI-automation platform to build, automate, and deploy intelligent AI workflows at scale.",
        features: [
            { title: "Visual Drag-and-Drop Builder", description: "Build complex AI workflows visually using an intuitive node-based drag-and-drop canvas powered by React Flow." },
            { title: "Multiple AI Provider Support", description: "Integrate with OpenAI, Anthropic, and other LLM providers seamlessly within your workflows." },
            { title: "Real-Time Triggers", description: "Set up event-based triggers that fire workflows automatically based on webhooks, schedules, or external events." },
            { title: "Messaging Integrations", description: "Connect with Slack, email, and other messaging platforms to send and receive data within workflows." },
            { title: "tRPC API Layer", description: "End-to-end type-safe API communication between frontend and backend for a robust SaaS experience." },
            { title: "SaaS Authentication & Billing", description: "Complete auth system with Better Auth and subscription management for production deployment." },
        ],
        techStack: [
            { tech: "Next.js 15", reason: "Latest Next.js for server components, optimized routing, and seamless API integration in a SaaS architecture." },
            { tech: "React Flow", reason: "The core of the visual builder — provides the canvas, node management, and edge connections for workflow creation." },
            { tech: "Inngest", reason: "Handles durable background jobs and event-driven workflow execution reliably at scale." },
            { tech: "tRPC", reason: "Ensures full type safety across the entire stack, eliminating runtime errors in API communication." },
            { tech: "Better Auth", reason: "Modern authentication solution with session management, OAuth, and role-based access control." },
            { tech: "PostgreSQL + Prisma", reason: "Relational database with Prisma ORM for type-safe, schema-driven data management of workflows and users." },
        ]
    }
}