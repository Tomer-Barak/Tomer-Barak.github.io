---
layout: default
title: "BarakBot: AI-Powered Telegram Assistant"
category: development
icon: robot
order: 1
features:
  - "Session Management: User conversations in sessions"
  - "Scheduler Integration: Notifications and reminders"
  - "Photo Handling: Caption generation for photos"
  - "Web UI: Testing interface for prompts"
link: "#"
link_text: "Learn More"
---

BarakBot is an advanced project where users interact with a Language Learning Model (LLM) via a Telegram bot. The project is designed to handle various tasks through different LLMs, each with specific roles.

## Features

### Session Management
BarakBot manages users' conversations in sessions, with prompts and responses handled by the LLMs. This allows for context-aware interactions that remember previous messages in the conversation.

### Scheduler Integration
The scheduler LLM manages notifications and reminders based on triggers defined in a JSON file. Users can set up reminders and receive notifications at specific times or based on specific events.

### Photo Handling
The photo LLM generates captions for photos and sends them to users. This feature allows users to get AI-generated descriptions of images they send to the bot.

### Web UI
A web interface provides tools for prompting and testing the LLMs, making it easier to develop and refine prompts without going through the Telegram interface.

## Technologies Used

- Python for backend logic
- Telegram Bot API for messaging
- OpenAI's GPT models for language understanding
- Flask for web interface
- Redis for session management
- Docker for containerization
