import React from "react";
import {
  GoogleLogin,
  googleLogout,
  GoogleOAuthProvider,
} from "@react-oauth/google";

const Login = () => {
  return (
    <div>
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
      >
        <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
          <div className="flex gap-6 md:gap-20 ">
            <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto"></div>
            <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
              <GoogleLogin
                onSuccess={(response) => createOrGetUser(response, addUser)}
                onError={() => console.log("Login Failed")}
              />
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
