/* eslint-disable */

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class ApiClient {
    private client: AxiosInstance;
    private static instance: ApiClient;

    private constructor() {
        // Read backend URL from env variables
        const url = process.env.NEXT_PUBLIC_BACKEND_URL;

        if (!url) {
            throw new Error(
                `[ApiClient] Backend URL is required. Ensure NEXT_PUBLIC_BACKEND_URL is set in your .env file.`
            );
        }

        console.log(`[ApiClient] Initializing with backend URL: ${url}`);

        this.client = axios.create({
            baseURL: url,
            withCredentials: true,
            timeout: 10000,
            headers: {
                'Accept-Encoding': 'gzip, deflate, br',
            },
        });
    }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<{ data: T; status: number }> {
        try {
            const response: AxiosResponse<T> = await this.client.get(url, { params });
            return { data: response.data, status: response.status };
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async post<T>(url: string, data: Record<string, any>, isFormData: boolean = false): Promise<{ data: T; status: number }> {
        try {
            const response: AxiosResponse<T> = await this.client.post(url, data, {
                headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' }
            });
            return { data: response.data, status: response.status };
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async put<T>(url: string, data: Record<string, any>, isFormData: boolean = false): Promise<{ data: T; status: number }> {
        try {
            const response: AxiosResponse<T> = await this.client.put(url, data, {
                headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' }
            });
            return { data: response.data, status: response.status };
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async delete<T>(url: string): Promise<{ data: T; status: number }> {
        try {
            const response: AxiosResponse<T> = await this.client.delete(url);
            return { data: response.data, status: response.status };
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async patch<T>(url: string, data: Record<string, any>, isFormData: boolean = false): Promise<{ data: T; status: number }> {
        try {
            const response: AxiosResponse<T> = await this.client.patch(url, data, {
                headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' }
            });
            return { data: response.data, status: response.status };
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async checkHealth(): Promise<boolean> {
        try {
            const response = await this.client.get('/health');
            console.log('[ApiClient] Health check passed:', response.data);
            return response.status === 200;
        } catch (error) {
            console.error('[ApiClient] Health check failed - Backend may not be running');
            return false;
        }
    }

    private handleError(error: unknown): void {
        if (error instanceof AxiosError) {
            console.error(`[ApiClient] Request failed:`, {
                status: error.response?.status,
                statusText: error.response?.statusText,
                url: error.config?.url,
                data: error.response?.data,
                message: error.message,
            });
        } else if (error instanceof Error) {
            console.error('[ApiClient] Error:', error.message);
        } else {
            console.error('[ApiClient] Unknown error:', error);
        }
    }
}

const api = ApiClient.getInstance();
export default api;