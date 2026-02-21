import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { getCurrentUser, isTokenValid } from "@/utils/api";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session and validate token
    const savedUser = localStorage.getItem("ethioagri-user");
    const token = localStorage.getItem("ethioagri-token");
    
    if (savedUser && token && isTokenValid()) {
      // Validate token with server and get fresh user data
      getCurrentUser().then(userData => {
        if (userData) {
          setUser(userData);
          localStorage.setItem("ethioagri-user", JSON.stringify(userData));
        } else {
          // Token invalid, clear stored data
          setUser(null);
          localStorage.removeItem("ethioagri-user");
          localStorage.removeItem("ethioagri-token");
        }
        setIsLoading(false);
      }).catch(() => {
        // On error, clear stored data
        setUser(null);
        localStorage.removeItem("ethioagri-user");
        localStorage.removeItem("ethioagri-token");
        setIsLoading(false);
      });
    } else {
      // No valid session
      setUser(null);
      localStorage.removeItem("ethioagri-user");
      localStorage.removeItem("ethioagri-token");
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        const userData = data.user;
        setUser(userData);
        localStorage.setItem("ethioagri-user", JSON.stringify(userData));
        localStorage.setItem("ethioagri-token", data.token);
        setIsLoading(false);
        toast({
          title: "Welcome back!",
          description: `Logged in as ${userData.name}`,
        });
        return true;
      } else {
        setIsLoading(false);
        toast({
          title: "Login failed",
          description: data.message || "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Login failed",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, phone: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (data.success) {
        const userData = data.user;
        setUser(userData);
        localStorage.setItem("ethioagri-user", JSON.stringify(userData));
        localStorage.setItem("ethioagri-token", data.token);
        
        setIsLoading(false);
        toast({
          title: "Account created!",
          description: `Welcome, ${name}!`,
        });
        return true;
      } else {
        setIsLoading(false);
        toast({
          title: "Signup failed",
          description: data.message || "Failed to create account",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Signup failed",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ethioagri-user");
    localStorage.removeItem("ethioagri-token");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
