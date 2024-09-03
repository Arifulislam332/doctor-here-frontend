"use client";

import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const MyAuth0Provider = ({ children }: PropsWithChildren) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const callbackUri = process.env.NEXT_PUBLIC_AUTH0_URI;

  if (!domain || !clientId || !callbackUri) {
    throw new Error("Unable to initialize auth0");
  }

  const router = useRouter();

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    // router.push(appState?.returnTo || "/auth-callback");
    console.log(user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default MyAuth0Provider;
