export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface Route {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  handler: (req: Request) => Promise<Response> | Response;
}

export interface RouteParams {
  [key: string]: string;
}

export interface QueryParams {
  [key: string]: string | string[] | undefined;
}
