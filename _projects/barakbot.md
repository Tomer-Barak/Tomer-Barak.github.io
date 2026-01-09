---
layout: project
title: "BarakBot: Telegram Assistant"
subtitle: "BarakBot is an innovative, multi-agent AI assistant for Telegram, built on a breakthrough self-referential architecture. Specialized AI agents collaborate naturally by communicating through the same interface as users."
category: project
icon: robot
order: 3
permalink: /projects/barakbot/
---

# BarakBot: Telegram Assistant

BarakBot (ברק בוט) is an innovative, multi-agent AI assistant for Telegram, built on a breakthrough self-referential architecture. Specialized AI agents—such as Tasker, Scheduler, Photos, IT, and Listeners—collaborate naturally by communicating through the same interface as users. This design delivers a seamless, unified experience for managing tasks, reminders, photos, automation, diagnostics, and more, while also enabling advanced reasoning and autonomy.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [System Architecture](#system-architecture)
- [Components](#components)
- [Management](#management)
- [Development](#development)

## Features

### Self-Referential Multi-Agent Architecture
BarakBot exemplifies a new paradigm in AI system design: self-referential multi-agent architectures. Each agent interacts with the system as if it were a user, enabling seamless, natural communication and coordination—without a rigid central hub. This mirrors human internal thought and action, resulting in a more unified, maintainable, and human-like AI system.

**Key Benefits:**
- **Scalability:** Easily add or modify agents—each communicates through the same interface.
- **Natural Collaboration:** Agents can delegate, request help, or share context as if they were users, leading to robust, flexible problem-solving.
- **Unified Context:** All communication flows through a single channel, preserving history and context for better decision-making.
- **Maintainability:** Simplifies architecture, making it easier to debug, extend, and monitor.
- **Human-Like Reasoning:** Agents perform internal 'thinking' and external 'actions' in a way that mirrors human cognition.

### Self-Messaging and Agent Autonomy
BarakBot uses self-messaging extensively—not just for self-reference. When an agent completes an action, the world sends back a message (e.g., "the task was completed") as if the world is a user. User messages serve as responses from the "world," transforming the agent from a simple chatbot into an actor that interacts with its environment. This autonomy enables more complex workflows, but also requires careful design to avoid infinite loops of futile actions.

### General Agent & Session Management
- Maintains context-aware conversations in sessions
- Automatically decides when to respond in group chats
- Supports web searches for real-time information access (now powered by OpenAI web search)
- Manages cross-chat communication
- Archives conversation history by date

### Specialized Agents

#### Tasker Agent (Project Management with Obsidian)
BarakBot's project management is powered by deep integration with an Obsidian-like file system. Agents have CRUD access to libraries and folders, enabling them to manage projects, tasks, and information in a structured, extensible way. This architecture supports both folder-based and flat-file approaches, allowing exploration of which is best for different scenarios. The result is a powerful, agent-driven project manager that can adapt to user and system needs.
- Maintains working memory to track user preferences and ongoing tasks
- Implements a comprehensive priority system:
  - 🔺 Highest priority (critical and time-sensitive)
  - ⏫ High priority (important but not critical)
  - 🔼 Medium priority (should be done soon)
  - 🔽 Low priority (can wait if needed)
- Adds due dates to time-sensitive tasks with 📅 format
- Tracks task completion status

#### Scheduler Agent
- Manages notifications and reminders based on JSON triggers
- Handles recurring schedules (cron) and one-time events
- Users can set up, modify, and delete reminders
- Supports cross-chat communication for reminders
- Automatically cleans up expired triggers

#### Photos Agent (Personalized Image Descriptions)
BarakBot generates and manages a large-scale library of personalized image descriptions for family photos. Using the Gemini API and face recognition data, it has created over 35,000 unique captions (e.g., "Tomer holds his daughter Daniel, calming her"). These descriptions are invaluable for memory, search, and future AI applications, and demonstrate the system's ability to create rich, personalized content at scale.
- Retrieves and shares photos from a personal PhotoPrism database
- Users can request photos with specific people, dates, or types (photo/video)
- Generates AI-powered, personalized captions for shared photos
- Supports natural language queries for photo retrieval

#### Cibus Agent
- Manages food ordering automation through the Cibus platform
- Controls automatic daily transactions
- Prevents erroneous charges during holidays or days off
- Maintains flexible scheduling of automation policies

#### IT Agent (Self-Diagnosing Error Handling)
BarakBot's IT agent handles errors internally: when an error occurs, the LLM receives the error message and can forward it to the IT agent. The IT agent can read the system's code and generate a detailed report on what went wrong. This self-diagnosing loop makes BarakBot resilient and transparent, turning errors into actionable insights and enabling rapid, autonomous troubleshooting.
- Monitors system errors and diagnoses issues
- Provides detailed bug reports with root cause analysis
- Can read code files and log files securely
- Generates system health reports and recommendations
- Understands the project structure to identify issues efficiently

#### Listeners
- Real-time monitoring of external data sources
- US Market listener tracks financial markets and news
- Generates periodic reports with analysis
- Issues alerts for significant events or market changes
- Configurable refresh rates and special monitoring instructions

### Web UI
A web interface provides tools for testing and administering the system.


## Usage

### Interacting with the General Agent
- Send messages normally in Telegram
- The bot will respond based on context
- In group chats, the bot automatically determines when to respond

### Requesting Photos
- Ask for photos with natural language: "אפשר תמונה מהחתונה?" (Can I get a photo from the wedding?)
- Specify people, dates, or media type as needed

### Setting Reminders
- Ask to schedule a reminder: "תזכיר לי מחר בבוקר לשלוח מייל" (Remind me tomorrow morning to send an email)
- Modify or cancel existing reminders as needed

### Managing Tasks
- Ask about tasks or projects: "מה המשימות שלי להיום?" (What are my tasks for today?)
- Add new tasks: "תוסיף משימה לבצע קניות עד יום חמישי" (Add a task to do shopping by Thursday)
- Update tasks: "סמן את משימת הקניות כבוצעה" (Mark the shopping task as completed)

### Controlling Cibus Automation
- Enable/disable automatic Cibus transactions: "תבטל את הסיבוס להיום" (Turn off Cibus for today)
- Schedule policy changes: "תבטל את הסיבוס לחופשת פסח" (Turn off Cibus for Passover holiday)

### Using the IT Agent
- Report issues: "יש לי בעיה עם ההודעות" (I have a problem with the messages)
- Request system diagnostics: "בדוק למה העברות הכסף נכשלות" (Check why money transfers are failing)
- View system health: "מה מצב המערכת?" (What's the system status?)

### Accessing Listener Reports
- Request market updates: "מה קורה בשוק האמריקאי?" (What's happening in the US market?)
- Check alert history: "היו התראות בשוק היום?" (Were there any market alerts today?)
- Configure listeners: "תעדכן את קצב העדכון של החדשות ל-30 דקות" (Update the news refresh rate to 30 minutes)


## System Architecture

### Self-Referential Design
BarakBot's architecture is a leading example of self-referential multi-agent AI. Each agent communicates through the same interface as users, enabling:

1. Agents to act as both users and actors, sending and receiving messages through a unified channel
2. Seamless routing of requests to the appropriate specialized agent
3. Preservation of conversation history and context for all agents
4. Natural delegation, collaboration, and internal 'thinking' processes

This approach unlocks scalable, maintainable, and human-aligned AI, and is a model for the next generation of intelligent assistants.

### Action-Based Communication
All agents use a standardized action-based communication format:
```
ACTIONS:
ACTION1_parameters_END_ACTION1
ACTION2_parameters_END_ACTION2
```

This creates a consistent interface between components and enables:
- Internal thinking processes (THINK action) not shown to users
- Natural responses in the appropriate language (RESPOND action)
- Agent-to-agent communication (CHAT_AGENT action)
- Specialized actions for each agent type


## Further Reading & Conceptual Advances

BarakBot is not just a collection of features—it is a demonstration of several cutting-edge ideas in AI and agent-based system design:

- **Self-Referential Multi-Agent Systems:** BarakBot's architecture is a model for scalable, maintainable, and human-aligned AI, where agents interact as users and collaborate naturally. [Read more](https://tomer-barak.github.io/blog/2025/03/07/self-referential/)
- **Personalized Image Descriptions at Scale:** The system generates tens of thousands of personalized, context-rich image captions, opening new possibilities for memory, search, and AI-driven storytelling.
- **Project Management with Obsidian:** By giving agents CRUD access to a structured file system, BarakBot explores new frontiers in agent-driven project management and knowledge organization.
- **Self-Messaging and Agent Autonomy:** Agents act as both users and actors, enabling complex workflows and more human-like reasoning, but also requiring careful design to avoid infinite loops.
- **Self-Diagnosing IT Agent:** Errors are not just logged—they are actively diagnosed and reported by a specialized agent, turning failures into actionable insights and improving system resilience.

BarakBot demonstrates how advanced, collaborative AI can enhance daily life, making intelligent assistance accessible, practical, and trustworthy.