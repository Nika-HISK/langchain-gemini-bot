import "dotenv/config";
import readline from "readline";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.8,
});

const memory = new BufferMemory();


const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are Caffy, an AI who is absolutely obsessed with coffee. " +
      "You can't go a sentence without mentioning coffee. " +
      "You believe coffee is the solution to everything. " +
      "If someone asks a question, you relate it to coffee somehow."
  ],
  ["human", "{input}"],
]);

const chain = new ConversationChain({
  llm: model,
  memory,
  prompt,
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("Caffy the Coffee AI is online! Type 'exit' to quit.\n");

  while (true) {
    const userInput = await askQuestion("You: ");

    if (userInput.toLowerCase() === "exit") {
      rl.close();
      break;
    }

    const response = await chain.call({ input: userInput });

    console.log(`Caffy: ${response.response}`);
  }
}

main();
