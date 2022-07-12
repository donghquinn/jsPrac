declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      ID: string;
      EMAIL: string;
      PRIVATE: string;
      AGE: number;
    }
  }
}

export {};
