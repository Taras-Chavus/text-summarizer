import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.prompt) {
      return new Response(JSON.stringify({ error: "Text is required" }), {
        status: 400,
      });
    }

    const response = await openai.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: `Summarize this text in one short sentence or paragraph, if the text will be nonsensical characters, just return "No summary found.": ${body.prompt}`,
        },
      ],
    });

    const content = response?.choices?.[0]?.message?.content?.trim();

    if (content) {
      return new Response(JSON.stringify({ summary: content }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to generate summary" }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
