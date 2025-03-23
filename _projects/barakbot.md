---
layout: default
title: "BarakBot: AI-Powered Telegram Assistant"
category: development
icon: robot
order: 1
features:
  - "Multi-Agent System: Specialized agents for different tasks"
  - "Tasker Agent: Obsidian integration for task and information management"
  - "Session Management: User conversations in sessions"
  - "Scheduler Integration: Notifications and reminders"
  - "Photo Handling: Caption generation for photos"
  - "Web UI: Testing interface for prompts"
link: "#"
link_text: "Learn More"
---

BarakBot (ברק בוט) is an advanced multi-agent system where users interact with specialized Language Learning Models (LLMs) via a Telegram bot interface. Originally designed for family communication in both Hebrew and English, the project has evolved into a comprehensive personal assistant capable of handling various tasks through different specialized agents, each with specific roles and capabilities.

## Features

### Multi-Agent Architecture
BarakBot utilizes a self-referential agent architecture where specialized LLM agents collaborate to handle different tasks. Rather than using a complex "agent hub," each agent can request assistance from other agents by communicating with the bot itself—the same way a human user would. This creates a more natural interaction flow and simplifies system architecture.

### Tasker Agent with Obsidian Integration
The newest addition to BarakBot is a dedicated Tasker Agent that helps users manage their tasks, projects, and information using an integrated Obsidian vault:
- Creates, reads, updates, and deletes notes in an organized structure
- Maintains a working memory to track user preferences and ongoing tasks
- Implements a comprehensive priority system for tasks:
  - 🔺 Highest priority (critical and time-sensitive)
  - ⏫ High priority (important but not critical)
  - 🔼 Medium priority (should be done soon)
  - 🔽 Low priority (can wait if needed)
- Adds due dates to time-sensitive tasks with 📅 format
- Tracks task completion status ([ ] vs [x])
- Organizes information in a logical folder structure
- Presents information naturally without exposing the underlying note-taking system to users

### General Agent & Session Management
A general agent serves as the primary interface, managing conversation flows and deciding when to invoke specialized agents. It maintains context-aware conversations in sessions, with prompts and responses handled appropriately based on whether the interaction is in a private chat or group setting.

### Scheduler Integration
The scheduler agent manages notifications and reminders based on triggers defined in a JSON file. It can handle both recurring schedules (using cron syntax) and one-time events:
- Users can set up reminders for specific times or days
- The scheduler can trigger other agents automatically
- Cross-chat communication is supported, allowing messages to be sent between different chats
- Reminders can be modified or rescheduled as needed

### Photo Handling
The photo agent manages image sharing and captioning. Users can request photos from specific time periods or with particular family members, and the agent will retrieve and caption appropriate images. This creates an interactive photo-sharing experience that feels natural and contextual.

### Web UI
A web interface provides tools for prompting and testing the LLMs, making it easier to develop and refine prompts without going through the Telegram interface.

## System Architecture

### Self-Referential Design
The self-referential agent architecture allows BarakBot to function as a cohesive system while maintaining specialized capabilities. When an agent needs functionality outside its domain:

1. It identifies the need for another agent's capabilities
2. Rather than using a dedicated communication channel, it simply sends a message to the bot itself
3. The bot routes the message to the appropriate specialized agent
4. The response is returned through the same channel

This approach simplifies agent coordination without requiring additional infrastructure, creating a more natural and coherent experience for both users and the system itself.

### Action-Based Communication
All agents use a standardized action-based communication format:
```
ACTIONS:
ACTION1_parameters_END_ACTION1
ACTION2_parameters_END_ACTION2
```

This creates a consistent interface between components and allows for:
- Internal thinking processes (THINK action) that aren't shown to users
- Natural responses in the appropriate language (RESPOND action)
- Agent-to-agent communication (CHAT_AGENT action)
- Specialized actions for each agent type (e.g., GET_PHOTO, VAR_CIBUS_RUN)

## Technologies Used

- Python for backend logic and agent coordination
- Telegram Bot API for messaging and user interactions
- OpenAI's GPT models for language understanding and natural responses
- Obsidian for structured information and task management
- Flask for the web testing interface
- Redis for session management and state persistence
- Docker for containerization and deployment
- JSON for configuration and scheduling data
- Web search capabilities for real-time information access