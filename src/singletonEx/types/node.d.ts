declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ID: string;
      EMAIL: string;
      PRIVATE: string;
    }
  }
}

export {};
