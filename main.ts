const page = await Deno.readTextFile(new URL("./index.html", import.meta.url));
Deno.serve(() => new Response(page, { headers: { "content-type": "text/html; charset=utf-8" } }));
