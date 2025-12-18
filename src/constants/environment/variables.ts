export const API: string = (() => {
  const api = process.env.NEXT_PUBLIC_API;

  if (!api) {
    throw new Error(`No "NEXT_PUBLIC_API" in .env file`);
  }

  return api as string;
})();

export const GOOGLE_CLIENT_ID: string = (() => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    throw new Error(`No "NEXT_PUBLIC_GOOGLE_CLIENT_ID" in .env file`);
  }

  return clientId as string;
})();