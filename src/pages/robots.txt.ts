import type { APIRoute } from "astro";
import { FEED_LINKS } from "../lib/links";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "# Sitemap",
    `Sitemap: ${FEED_LINKS.sitemap}`,
    "",
    "# LLM-friendly content",
    "# These files provide documentation in a format optimized for AI and LLMs",
    `# Discovered at: ${FEED_LINKS.llms}`,
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
