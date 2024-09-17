"use client";

import UserAppoinmentForm from "@/components/UserAppoinmentForm";
import { useCreateUserAppoinment } from "@/hooks/useCreateUserAppoinment";

const UserAppoinment = () => {
  const { createAppoinment, isLoading } = useCreateUserAppoinment();
  return <UserAppoinmentForm isLoading={isLoading} onSave={createAppoinment} />;
};

export default UserAppoinment;
