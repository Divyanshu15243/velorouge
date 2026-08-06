export const config = {
  matcher: "/:path*",
};

const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Service Unavailable</title>
<style>
  html, body { height: 100%; margin: 0; }
  body {
    display: flex; align-items: center; justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #0b0b0c; color: #f5f5f5; text-align: center; padding: 24px; box-sizing: border-box;
  }
  h1 { font-size: 1.5rem; margin: 0 0 8px; }
  p { color: #a1a1aa; margin: 0; }
</style>
</head>
<body>
  <div>
    <h1>Service Unavailable</h1>
    <p>We're temporarily offline for maintenance. Please check back soon.</p>
  </div>
</body>
</html>`;

export default function middleware(request: Request) {
  if (process.env.MAINTENANCE_MODE !== "1") {
    return;
  }

  return new Response(PAGE, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "retry-after": "3600",
      "cache-control": "no-store",
    },
  });
}
