export interface Env {
  PORT: string;
  MONGODB_URI: string;
  DOMAIN: string;
}

export declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
