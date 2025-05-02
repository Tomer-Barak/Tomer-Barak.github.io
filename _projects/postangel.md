---
layout: project
title: "PostAngel: Social Media Assistant"
subtitle: "PostAngel is a privacy-focused Android app that helps users engage meaningfully with social media. Whether you're writing new posts or crafting replies, PostAngel uses AI to generate content tailored to your personal knowledge base."
category: project
icon: mobile
order: 2
permalink: /projects/postangel/
github: https://github.com/Tomer-Barak/PostAngel
---

# PostAngel: Social Media Assistant

PostAngel is a privacy-focused Android app that helps users engage meaningfully with social media. Whether you're writing new posts or crafting replies, PostAngel uses AI to generate content tailored to your personal knowledge base. It’s built with power users in mind—those who want to maintain control over their voice while leveraging intelligent automation.

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technical Details](#technical-details)

## Features

- ✍️ **AI-Generated Posts**: Generate creative, engaging posts based on your chosen themes and knowledge base.
- 💬 **Smart Reply Suggestions**: Share screenshots of social media posts to get suggested AI replies aligned with your goals.
- 🌒 **PostDemon Mode**: Activate a more sarcastic and edgy tone in dark mode.
- 👁️ **Vision-Powered Analysis**: Uses OpenAI's Vision API to understand screenshots and suggest relevant responses.
- 🧠 **Personal Knowledge Base**: Promote your preferred topics in a subtle, contextual way.
- 🔐 **Privacy-Focused**: Fully local knowledge base and user-controlled API integration.
- 🛠️ **Open Source**: MIT-licensed and designed with transparency in mind.

## How It Works

### Screenshot Response Flow
1. Take a screenshot of a social media post.
2. Share it with PostAngel from the Android share menu.
3. PostAngel uses AI to:
   - Understand the screenshot via OpenAI Vision
   - Match relevant ideas from your personal knowledge base
   - Generate a contextual, optionally sarcastic response

### Post Creation Flow
1. Select topics from your knowledge base.
2. PostAngel generates an original post that communicates your ideas clearly and creatively.
3. Review and copy the content to your preferred social platform.

### PostDemon Feature
- Automatically enabled in dark mode.
- Adjusts tone to be more humorous, sarcastic, or biting.
- Adds personality while keeping relevance to your selected themes.

## Installation

You can download the latest APK from the [GitHub Releases](https://github.com/Tomer-Barak/PostAngel/releases).

To build locally:
1. Clone the repository.
2. Open in Android Studio.
3. Set up your OpenAI API key in the app settings.
4. Run the app on your Android device (API 26+).

## Usage

### Creating Posts
- Launch the app.
- Tap **Create Post**.
- Choose from your list of focus topics.
- Review the AI-generated post and share.

### Responding to Posts
- Screenshot a post you want to respond to.
- Share it to **PostAngel**.
- The app will generate a suggested reply using AI + your knowledge base.

## Configuration

- **API Key**: Required for OpenAI Vision & LLM services.
- **Knowledge Base**: Add themes or topics you care about—PostAngel uses these for post and reply generation.
- **PostDemon Mode**: Enabled automatically in dark mode; can be toggled in settings.

## Technical Details

- Built for Android 8.0+ (API 26+)
- Uses OkHttp for network communication
- Integrates OpenAI's Vision and language models
- Handles screenshot sharing via Android intents
- Local data storage for knowledge base topics
- Minimal external dependencies, privacy-first design

## License

PostAngel is open source and licensed under the MIT License.
