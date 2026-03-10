import type { APIRoute } from "astro";
import OpenAI from "openai";
import dotenv from "dotenv";

export const prerender = false;

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
	try {
		const { messages } = await request.json();

		if (!messages || !Array.isArray(messages)) {
			return new Response(
				JSON.stringify({ error: "messages array is required" }),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
		const OPENAI_PROMPT_ID = process.env.OPENAI_PROMPT_ID;

		if (!OPENAI_API_KEY || !OPENAI_PROMPT_ID) {
			console.error("Missing OPENAI_API_KEY or OPENAI_PROMPT_ID");
			return new Response(
				JSON.stringify({ error: "Server configuration error" }),
				{ status: 500, headers: { "Content-Type": "application/json" } },
			);
		}

		const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

		// Map chat history to the input format the Responses API expects.
		// Each message becomes a { role, content } input item.
		const input = messages.map((msg: { role: string; content: string }) => ({
			role: msg.role as "user" | "assistant",
			content: msg.content,
		}));

		const response = await openai.responses.create({
			prompt: {
				id: OPENAI_PROMPT_ID,
				version: "2",
			},
			input,
			text: {
				format: {
					type: "text",
				},
			},
			reasoning: {},
			max_output_tokens: 2048,
			store: true,
		} as Parameters<typeof openai.responses.create>[0]);

		// The Responses API returns output as an array of content blocks.
		// Find the first text output item.
		const outputItem = response.output?.find(
			(item: { type: string }) => item.type === "message",
		) as
			| {
					type: "message";
					content: { type: string; text: string }[];
			  }
			| undefined;

		const reply =
			outputItem?.content?.find((c) => c.type === "output_text")?.text ?? "";

		if (!reply) {
			console.error(
				"No text reply found in OpenAI response:",
				JSON.stringify(response, null, 2),
			);
			return new Response(JSON.stringify({ error: "No reply generated" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify({ reply }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error: unknown) {
		console.error("Chat API error:", error);
		const message =
			error instanceof Error ? error.message : "An unexpected error occurred";
		return new Response(JSON.stringify({ error: message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
