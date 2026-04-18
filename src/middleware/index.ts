// Middleware - production site, no password protection
export function onRequest({ request }: any, next: any) {
  // Pass through all requests without protection
  return next();
}
