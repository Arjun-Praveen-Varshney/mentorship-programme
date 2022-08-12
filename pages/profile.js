import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore from "../allexports";
import { createOrGetUser } from "../allexports";
export default function Login() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);
  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>Profile</title>
      </Head>
      {user ? (
        <div className="flex gap-5 md:gap-10">
          {user.image && (
            <div>
              <Image
                className="rounded-full cursor-pointer"
                src={user.image}
                alt="user"
                width={40}
                height={40}
              />
              <p>{user.userName}</p>
            </div>
          )}
          <button
            type="button"
            className="border-2 p-2 rounded-full cursor-pointer outline-none shadow-md"
            onClick={() => {
              googleLogout();
              removeUser();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(response) => createOrGetUser(response, addUser)}
          onError={() => console.log("Login Failed")}
        />
      )}
    </div>
  );
}
