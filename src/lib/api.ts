/* eslint-disable */

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class ApiClient {
    private client: AxiosInstance;
    private static instance: ApiClient;

    private constructor() {
        // Try to read backend URL from env variables
        const url = process.env.NEXT_PUBLIC_BACKEND_URL 
            || process.env.NEXT_PUBLIC_PROD_BACKEND_URL
            || process.env.NEXT_PUBLIC_DEV_BACKEND_URL;

        if (!url) {
            console.error(`[ApiClient] No backend URL found. Ensure NEXT_PUBLIC_BACKEND_URL is set in your environment.`);
        }

        this.client = axios.create({
            baseURL: url || '103.138.96.92:8000',
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

    private handleError(error: unknown): void {
        if (error instanceof AxiosError) {
            // Only log non-404 errors
            if (error.response?.status !== 404) {
                console.error(`Request failed with status: ${error.response?.status}`);
            }
        } else if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
    }
}

const api = ApiClient.getInstance();
export default api;