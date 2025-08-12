# Caffy - The Coffee-Obsessed AI Bot

A delightfully caffeinated AI chatbot built with LangChain and Google's Gemini AI that's absolutely obsessed with coffee! Meet Caffy, an AI assistant who believes coffee is the solution to everything and can't go a sentence without mentioning it.

## Features

- **Coffee-Themed Personality**: Caffy relates every conversation back to coffee somehow
- **Conversational Memory**: Remembers your chat history throughout the session using LangChain's BufferMemory
- **Powered by Gemini 2.0 Flash**: Uses Google's latest AI model for intelligent responses
- **Interactive CLI**: Simple command-line interface for chatting with Caffy

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- A Google AI API key for Gemini

### Installation

1. Clone this repository:
```bash
git clone https://github.com/Nika-HISK/langchain-gemini-bot
cd langchain-gemini-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env` file

### Running the Bot

Start chatting with Caffy:
```bash
npx ts-node src/index.ts
```

Type `exit` to quit the conversation.

## Tech Stack

- **TypeScript**: For type-safe development
- **LangChain**: Framework for building LLM applications
- **@langchain/google-genai**: Google Gemini AI integration
- **dotenv**: Environment variable management
- **Node.js readline**: For interactive CLI input

## Project Structure

```
langchain-gemini-bot/
├── src/
│   └── index.ts          # Main application file
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## How It Works

1. **Model Initialization**: Creates a ChatGoogleGenerativeAI instance with the Gemini 2.0 Flash model
2. **Memory Management**: Uses BufferMemory to maintain conversation context
3. **Custom Prompt**: Defines Caffy's coffee-obsessed personality through system prompts
4. **Conversation Chain**: Combines the model, memory, and prompt into a conversational AI
5. **Interactive Loop**: Continuously prompts for user input and generates coffee-themed responses

## Configuration

The bot uses the following default settings:

- **Model**: `gemini-2.0-flash`
- **Temperature**: `0.8` (for creative, varied responses)
- **Memory**: Buffer memory for conversation history

You can modify these settings in `src/index.ts` to customize Caffy's behavior.

## Example Conversation

```
You: How do I solve a math problem?

Caffy: Well, grab a steaming cup of coffee first - caffeine sharpens the mind! 
For math problems, I always recommend the coffee shop method: break it down 
step by step, just like brewing the perfect espresso. Take your time, let 
each step percolate in your mind like coffee grounds in hot water, and 
you'll find the solution as satisfying as that first morning sip! ☕

You: What's the weather like?

Caffy: I don't have real-time weather data, but I can tell you that ANY 
weather is perfect coffee weather! Rainy day? Perfect for a cozy indoor 
coffee session. Sunny? Time for an iced coffee! Cold? Hot coffee will warm 
you right up! Snow? Nothing beats watching snowflakes fall while sipping 
a warm latte! Whatever the weather, make sure you've got your favorite 
brew in hand! 
```

## Development

### Adding New Features

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Building for Production

Compile TypeScript to JavaScript:
```bash
npx tsc
```

The compiled files will be in the `dist/` directory.

## Dependencies

### Runtime Dependencies
- `@langchain/google-genai`: ^0.2.16
- `dotenv`: ^17.2.1
- `langchain`: ^0.3.30

### Development Dependencies
- `@types/node`: ^24.2.1
- `ts-node`: ^10.9.2
- `typescript`: ^5.9.2

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google AI Gemini API key | Yes |
