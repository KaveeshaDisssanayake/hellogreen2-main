export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  authProviders: {
    google: boolean;
    credentials: boolean;
    github: boolean;
  };
  emailVarification: {
    verified: boolean;
    token: string;
    tokenExpiry: number;
  };
  passwordReset: {
    token: string;
    tokenExpiry: number;
  } | null;
}

export interface AppResponse {
  status: "success" | "error";
  statusCode: number;
  data?: any | null;
  error?: {
    message: string;
    details?: string;
  } | null;
}
