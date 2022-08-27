import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore, { createOrGetUser } from "../allexports";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Mentorship Program</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/onetoonementoring"}>
            <a className="mr-5 hover:text-gray-900">1-1 Mentoring</a>
          </Link>
          <Link href={"/ihubwalkthrough"}>
            <a className="mr-5 hover:text-gray-900">iHUB Walkthrough</a>
          </Link>
          <Link href={"/allmentors"}>
            <a className="mr-5 hover:text-gray-900">Browse Mentors</a>
          </Link>
        </nav>
        {user ? (
          <button
            className="inline-flex text-white items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0"
            onClick={() => {
              googleLogout();
              removeUser();
              router.push("/");
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin
            onSuccess={(response) => {
              createOrGetUser(response, addUser);
              router.push("/profile");
            }}
            onError={() => console.log("Login Failed")}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
