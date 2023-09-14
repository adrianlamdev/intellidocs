import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { experimental_buildLlama2Prompt } from "ai/prompts";

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  console.log(messages);

  const response = await Hf.textGenerationStream({
    // for debugging code and code completion
    // model: "codellama/CodeLlama-13b-hf",

    // for python (model too large for hugging face inference)
    // model: 'codellama/CodeLlama-13b-Python-hf',

    // for instruct and chats
    model: "codellama/CodeLlama-34b-Instruct-hf",
    inputs: experimental_buildLlama2Prompt(messages),
    parameters: {
      max_new_tokens: 256,
      // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
      typical_p: 0.9,
      repetition_penalty: 1.05,
      truncate: 1000,
      temperature: 0.1,
      return_full_text: false,
    },
  });

  // Convert the response into a friendly text-stream
  const stream = HuggingFaceStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
