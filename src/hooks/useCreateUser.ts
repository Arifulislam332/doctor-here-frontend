import { API_BASE_URL } from "@/constants";
import { CreateUserType } from "@/types/userType";
import { useMutation } from "react-query";

export const useCreateUser = () => {
  const createUserRequest = async (user: CreateUserType) => {
    const res = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Failed to create user!");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(createUserRequest);

  return { createUser, isLoading, isError, isSuccess };
};
