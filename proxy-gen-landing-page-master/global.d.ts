declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_BASE_API_URL: string;
    }
  }
}
