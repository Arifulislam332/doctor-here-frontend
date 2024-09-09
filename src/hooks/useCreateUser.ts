import { API_BASE_URL } from "@/constants";
import { CreateUserType } from "@/types/userType";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: CreateUserType) => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

  return {
    createUser,
    isError,
    isLoading,
    isSuccess,
  };
};
