import { API_BASE_URL } from "@/constants";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const useCreateUserAppoinment = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserAppoinmentRequest = async (appoinmentFormData: FormData) => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/user/appoinment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: appoinmentFormData,
    });

    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to create appoinment details");
    }

    return res.json();
  };

  const {
    mutate: createAppoinment,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createUserAppoinmentRequest);

  if (isSuccess) {
    toast.success("Appoinment created successfully");
  }

  if (error) {
    toast.error("Unable to create appoinment");
  }

  return { createAppoinment, isLoading, isSuccess, error };
};
