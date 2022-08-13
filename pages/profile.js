import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore, { createOrGetUser } from "../allexports";

export default function Login({ getDocs, mentors }) {
  const [user, setUser] = useState(null);
  const [mentorsarray, setMentorsarray] = useState([]);
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  const getData = () => {
    getDocs(mentors).then((data) => {
      setMentorsarray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const verifiedmentor = mentorsarray.filter((teacher) => {
    if (user) {
      return user.loginemail !== teacher.email ? false : true;
    }
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>Profile</title>
      </Head>
      {!user && (
        <div>
          <img src="/vercel.svg" alt="logo" className="w-auto h-12 mx-auto" />
          <h1 className="text-3xl font-extrabold my-6">Sign In / Sign Up</h1>
        </div>
      )}
      {user ? (
        <>
          {verifiedmentor == false ? (
            <div className="flex gap-5 md:gap-10">
              <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-12 mx-auto">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                      Fill up a form
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      Whatever cardigan tote bag tumblr hexagon brooklyn
                      asymmetrical gentrify.
                    </p>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            defaultValue={user.userName}
                            name="name"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.loginemail}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          onClick={getData}
                          className="w-full border-2 text-white bg-indigo-500 rounded-md p-2 hover:bg-indigo-600"
                        >
                          View all Mentors
                        </button>
                        <button
                          className="w-full border-2 p-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                          onClick={() => {
                            googleLogout();
                            removeUser();
                          }}
                        >
                          Logout
                        </button>
                      </div>
                      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <h1 className="font-bold text-2xl">Our Mentors:</h1>
                        <p>
                          {mentorsarray.map((teacher) => {
                            return (
                              <div key={teacher.id}>
                                <h3>Name: {teacher.name}</h3>
                                <p>Description: {teacher.description}</p>
                              </div>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <h1>You are a Mentor! Yay !!</h1>
            </div>
          )}
        </>
      ) : (
        <GoogleLogin
          onSuccess={(response) => createOrGetUser(response, addUser)}
          onError={() => console.log("Login Failed")}
        />
      )}
    </div>
  );
}
