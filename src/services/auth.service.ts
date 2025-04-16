import api from './api';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  userType: string;
  stallType?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  status: string;
  token: string;
  data: {
    user: {
      name: string;
      email: string;
      userType: string;
      stallType?: string;
      _id: string;
    };
  };
}

export const authService = {
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    return response.data;
  },

  login: async (loginData: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', loginData);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },
};
