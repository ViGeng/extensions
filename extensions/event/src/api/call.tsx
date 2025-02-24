import { global_model, openai } from "./openaiClient";

export async function callOpenAI(prompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "" },
        { role: "user", content: prompt },
      ],
      model: global_model || "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 1000,
      top_p: 1,
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to get response from OpenAI");
  }
}
