import { AppResponse } from "../types";

const createResponse = (
  type: "success" | "error",
  statusCode: number,
  data?: any | null,
  error?: { message: string; details?: string } | null
): AppResponse => {
  return {
    status: type,
    statusCode: statusCode,
    data: data,
    error: error,
  };
};

export default createResponse;
