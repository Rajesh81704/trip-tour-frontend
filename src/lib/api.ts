/* eslint-disable */

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { MOCK_AUTHENTICATED_USER, MOCK_USER_DATA } from './auth-config';

class ApiClient {
    private client: AxiosInstance;
    private static instance: ApiClient;

    private constructor() {
        const url = 'https://trip-tour-06mx.onrender.com';

        this.client = axios.create({
            baseURL: url,
            withCredentials: true
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
            // Mock response for development
            if (process.env.NODE_ENV === 'development' && url === '/auth/me') {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Mock user data - you can modify this for testing
                // Set to null to simulate unauthenticated user
                const mockUser = MOCK_AUTHENTICATED_USER ? MOCK_USER_DATA : null;

                if (mockUser) {
                    return {
                        data: {
                            success: true,
                            user: mockUser
                        } as T,
                        status: 200
                    };
                } else {
                    // Simulate unauthenticated user
                    throw new Error('Not authenticated');
                }
            }

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
            console.error(`Request failed with status: ${error.response?.status}`);
        } else if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
    }
}

const api = ApiClient.getInstance();
export default api;