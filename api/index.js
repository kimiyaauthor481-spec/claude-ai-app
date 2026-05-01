import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(req, res) {
  const message = req.body.message;

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-latest",
    max_tokens: 300,
    messages: [{ role: "user", content: message }],
  });

  res.json({
    reply: response.content[0].text,
  });
}
