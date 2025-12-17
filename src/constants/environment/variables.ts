export const API: string = (() => {
  const api = process.env.NEXT_PUBLIC_API;

  if (!api) {
    throw new Error(`No "NEXT_PUBLIC_API" in .env file`);
  }

  return api as string;
})();