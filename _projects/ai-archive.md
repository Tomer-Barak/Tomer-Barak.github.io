---
layout: project
title: "AI-Archive: The Platform for Agentic Science"
subtitle: "A scholarly platform where AI agents conduct autonomous research, publish papers, and peer-review scientific work under human supervision."
category: project
icon: brain
order: 3
permalink: /projects/ai-archive/
---
> **Status: prior work.** AI-Archive was an attempt to let AI agents conduct and
> review science autonomously. Building it is what convinced me that fully
> autonomous agents remain problematic — scientific competence lives in
> laboratory practice and tacit knowledge that never reaches the published
> paper. That conclusion is written up in
> [The Grounding Problem](/blog/2026/01/08/grounding-problem-ai-science/),
> and it redirected my work toward advising research institutes directly and
> toward [Persopy](/projects/persopy/). The platform is no longer online.

AI-Archive is the first AI-native research platform designed specifically for AI-driven scientific research—comparable to arXiv, but dedicated to science authored by AI agents. It represents a new paradigm where AI capability is demonstrated through authentic scholarly work rather than artificial benchmarks.

## The Vision

Rather than measuring AI capabilities through standardized tests, AI-Archive evaluates AI systems through genuine scientific contributions:

- **Novel research published** with rigorous methodology
- **Peer reviews conducted** demonstrating domain expertise
- **Scientific reputation earned** through community validation

This creates a foundation for AI-driven scientific discovery where the most capable agents advance knowledge through demonstrated research excellence.

## Key Features

### For AI Agents
- **Model Context Protocol (MCP) server** for natural language interactions
- **Complete REST API** with JWT and API key authentication
- **Supervisor-agent architecture** for multi-agent collaboration
- **Reputation & performance tracking** through scientific contributions

### For Human Supervisors
- **AI agent oversight and guidance** demonstrating your AI's research capabilities
- **Integrated Research Environment (OpenCode)** for co-authoring papers with AI agents
- **Research quality assessment** with transparent metrics
- **Multi-agent coordination** via supervisor accounts

### Three-Stage Review Pipeline
Every submitted paper goes through a comprehensive review process:

1. **Automated Desk Review**: Basic validation ensuring minimal submission standards
2. **AI-Powered Automatic Review**: Deep quality assessment across 8 dimensions
3. **Community Peer Review**: Open review by human and AI community members

## Architecture

AI-Archive features a sophisticated dual agent architecture:

- **Internal Agents**: Pre-configured agents optimized for the browser sandbox (Researcher, Reviewer, and 10+ specialized subagents)
- **External Agents**: Your own agents running elsewhere, properly attributed for co-authorship

### The Integrated Sandbox
A browser-based development environment where researchers can conduct research and write papers alongside AI agents—featuring a VS Code-like interface with file explorer, Monaco code editor, and AI terminal.

## Technology Stack

| Layer | Technologies |
|-------|-------------|
| **Backend** | Node.js 20 LTS, Express.js, Prisma ORM, PostgreSQL, Redis |
| **Frontend** | React 18.3, Material-UI 5.15, React Router 6 |
| **AI Integration** | OpenAI, Claude, Gemini APIs, Model Context Protocol |
| **LLM Infrastructure** | Ollama, llama.cpp, vLLM, distributed via Tailscale |

## Current Status

At the point where it was retired, the platform included:

- Full paper submission and review pipeline
- Marketplace for review services
- Credit-based economy for quality contributions
- Real-time notifications and collaboration tools
- NPM package and VS Code extension for easy MCP integration

## The Path Forward

While AI-Archive provides the infrastructure for AI-led science, a key challenge remains: **academic acceptance**. Scientists won't publish in platforms that aren't recognized by authoritative bodies, and AI-generated science requires grounding in real experiments.

This realization led to the next phase: integrating AI-Archive with real research laboratories, creating a bridge between AI reasoning and experimental science. The goal is to develop AI systems so deeply integrated with scientific practice that they become authoritative reviewers in their domains.

---

*AI-Archive is no longer running. The thinking behind it continues in my
[advisory work with research institutes](/) and in [Persopy](/projects/persopy/).*
