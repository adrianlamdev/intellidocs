import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await Hf.textGenerationStream({
    // model: 'codellama/CodeLlama-34b-hf',
    // model: 'codellama/CodeLlama-34b-Python-hf',
    model: "codellama/CodeLlama-34b-Instruct-hf",
    inputs: `<|prompter|>Format in markdown and include relevant examples: ${prompt}<|endoftext|><|assistant|>`,
    parameters: {
      max_new_tokens: 1000,
      // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
      typical_p: 0.2,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false,
    },
  });

  // Convert the response into a friendly text-stream
  const stream = HuggingFaceStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
