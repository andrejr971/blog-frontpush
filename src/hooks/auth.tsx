import { IAuthorDTO } from "dtos/IAuthorDTO";
import { createContext, useContext, useState } from "react";

type IAuthContextData = {
  user: IAuthorDTO;
  setUser: (user: IAuthorDTO) => void;
  token: null | string;
  setToken: (token: string) => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const IAuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState({} as IAuthorDTO);
  const [token, setToken] = useState<null | string>(null);

  return (
    <IAuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </IAuthContext.Provider>
  );
}

export function useAuth(): IAuthContextData {
  const context = useContext(IAuthContext);

  return context;
}