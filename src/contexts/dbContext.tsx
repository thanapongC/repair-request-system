// contexts/DatabaseContext.tsx

"use client"

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";


export interface UserManagement {
  keyId: string;
  userId: string;
  roleId: string;
  status: string;
  email: string;
  name: string;
  surname: string;
}

// กำหนดประเภทของ Context
interface DatabaseContextProps {
  userState: UserManagement[];
}

// สร้าง Context
const DatabaseContext = createContext<DatabaseContextProps | undefined>(
  undefined
);

export const DatabaseProvider = ({ children }: { children: ReactNode }) => {

  const [userState, setUserState] = useState<UserManagement[]>([
    {
      keyId: "1",
      userId: "1",
      roleId: "1",
      status: "active",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
    {
      keyId: "2",
      userId: "2",
      roleId: "1",
      status: "waiting",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
    {
      keyId: "3",
      userId: "3",
      roleId: "1",
      status: "active",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
    {
      keyId: "4",
      userId: "4",
      roleId: "1",
      status: "active",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
    {
      keyId: "5",
      userId: "5",
      roleId: "1",
      status: "active",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
    {
      keyId: "6",
      userId: "6",
      roleId: "1",
      status: "active",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
    {
      keyId: "7",
      userId: "7",
      roleId: "1",
      status: "inactive",
      email: "test@gmail.com",
      name: "thanapong",
      surname: "chunc",
    },
  ]);

  return (
    <DatabaseContext.Provider
      value={{
        userState,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

// Hook สำหรับใช้ Context
export const useDatabaseContext = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error(
      "useDbContext must be used within a DbProvider"
    );
  }
  return context;
};
