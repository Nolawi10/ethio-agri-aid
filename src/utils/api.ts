// API utility functions for making authenticated requests

const API_BASE_URL = '/api';

// Get stored JWT token
const getToken = (): string | null => {
  return localStorage.getItem('ethioagri-token');
};

// Generic API request function with authentication
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = getToken();
  const url = `${API_BASE_URL}${endpoint}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add Authorization header if token exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return fetch(url, {
    ...options,
    headers,
  });
};

// Specific API methods
export const api = {
  get: (endpoint: string) => apiRequest(endpoint, { method: 'GET' }),
  post: (endpoint: string, data: any) => 
    apiRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  put: (endpoint: string, data: any) => 
    apiRequest(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (endpoint: string) => apiRequest(endpoint, { method: 'DELETE' }),
};

// Check if token is valid (not expired)
export const isTokenValid = (): boolean => {
  const token = getToken();
  if (!token) return false;

  try {
    // Decode JWT payload (simple check without verification)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Date.now() / 1000;
    return payload.exp > now;
  } catch {
    return false;
  }
};

// Get current user from API
export const getCurrentUser = async () => {
  if (!isTokenValid()) return null;

  try {
    const response = await api.get('/auth/me');
    const data = await response.json();
    
    if (data.success) {
      return data.user;
    }
    return null;
  } catch {
    return null;
  }
};
