import {api} from "./api";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export async function request(method: HttpMethod, endpoint: string, data?: any) {
  try {
    const response = await api({
      method,
      url: endpoint,
      data
    })
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching movies:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
}
