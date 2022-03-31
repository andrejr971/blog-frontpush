import { AuthProvider } from "./auth";

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}