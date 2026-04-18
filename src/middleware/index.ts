// Middleware to check for dev password
const DEV_PASSWORD = import.meta.env.DEV_PASSWORD || 'dev-secret-123';

export function onRequest({ request, redirect }: any, next: any) {
  // Only protect if DEV_PASSWORD is set
  if (!DEV_PASSWORD) {
    return next();
  }
  
  const url = new URL(request.url);
  
  // Check for auth cookie
  const cookie = request.headers.get('cookie');
  const hasAuth = cookie?.includes('dev-auth=1');
  
  if (hasAuth) {
    return next();
  }
  
  // Check query param for password
  const password = url.searchParams.get('password');
  if (password === DEV_PASSWORD) {
    // Set cookie and redirect to remove password from URL
    const response = redirect(url.pathname);
    response.headers.set('Set-Cookie', 'dev-auth=1; Path=/; HttpOnly; SameSite=Strict');
    return response;
  }
  
  // Show password form
  return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dev Site - Password Required</title>
      <style>
        body { 
          background: #0f172a; 
          color: white; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          margin: 0;
          font-family: sans-serif;
        }
        .box { 
          background: #1e293b; 
          padding: 2rem; 
          border-radius: 12px; 
          text-align: center;
        }
        input { 
          padding: 12px; 
          margin: 1rem 0; 
          width: 250px; 
          border-radius: 6px; 
          border: none;
        }
        button { 
          padding: 12px 24px; 
          background: #3b82f6; 
          color: white; 
          border: none; 
          border-radius: 6px; 
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>🔒 Dev Site</h2>
        <p>Password required</p>
        <form method="get">
          <input type="password" name="password" placeholder="Enter password" autofocus>
          <br>
          <button type="submit">Enter</button>
        </form>
      </div>
    </body>
    </html>
  `, { 
    status: 401, 
    headers: { 'Content-Type': 'text/html' } 
  });
}
