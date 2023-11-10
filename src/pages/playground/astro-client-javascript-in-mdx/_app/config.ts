export const isAppEnabled = globalThis.location.pathname.includes(
  "astro-client-javascript-in-mdx"
);

if (process.env.NODE_ENV === "development" && isAppEnabled) {
  console.debug(`isAppEnabled: ${globalThis.location.pathname}`);
}
