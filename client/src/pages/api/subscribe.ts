import type { APIRoute } from "astro";
import dotenv from "dotenv";

export const prerender = false;

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
	try {
		const { email } = await request.json();

		if (!email || !email.includes("@")) {
			return new Response(
				JSON.stringify({ error: "Valid email is required" }),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
		const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

		if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
			console.error("Missing Beehiiv credentials");
			return new Response(
				JSON.stringify({ error: "Server configuration error" }),
				{ status: 500, headers: { "Content-Type": "application/json" } },
			);
		}

		// Beehiiv API v2 endpoint
		const response = await fetch(
			`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${BEEHIIV_API_KEY}`,
				},
				body: JSON.stringify({
					email: email,
					reactivate_existing: false,
					send_welcome_email: true,
					utm_source: "website",
					utm_medium: "organic",
					utm_campaign: "homepage_signup",
				}),
			},
		);

		const data = await response.json();

		if (!response.ok) {
			console.error("Beehiiv API error:", data);
			return new Response(
				JSON.stringify({
					error: data.error || "Failed to subscribe",
					details: data,
				}),
				{
					status: response.status,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Successfully subscribed!",
				data: data,
			}),
			{ status: 200, headers: { "Content-Type": "application/json" } },
		);
	} catch (error) {
		console.error("Subscribe error:", error);
		return new Response(
			JSON.stringify({ error: "An unexpected error occurred" }),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
};
