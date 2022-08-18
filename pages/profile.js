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

  useEffect(() => {
    getDocs(mentors).then((data) => {
      setMentorsarray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, []);

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
      {user && (
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
                            value={user.loginemail}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="college"
                            className="leading-7 text-sm text-gray-600"
                          >
                            College
                          </label>
                          <input
                            type="text"
                            id="college"
                            name="college"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="course"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Course
                          </label>
                          <input
                            type="text"
                            id="course"
                            name="course"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="yearofpassout"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Year of Passout
                          </label>
                          <input
                            type="text"
                            id="yearofpassout"
                            name="yearofpassout"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="fieldofinterest"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Field of Interest
                          </label>
                          <input
                            list="fieldsofinterest"
                            type="text"
                            id="fieldofinterest"
                            name="fieldofinterest"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          <datalist id="fieldsofinterest">
                            <option value="AI/ML" />
                            <option value="VR/AR" />
                            <option value="Brain Computer Interface" />
                            <option value="Mobile App Development" />
                            <option value="Web Development" />
                            <option value="UI/UX Design" />
                            <option value="Others" />
                          </datalist>
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            htmlFor="allmentors"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Select a Mentor
                          </label>
                          <input
                            list="sarementors"
                            type="text"
                            id="allmentors"
                            name="allmentors"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          <datalist id="sarementors">
                            {mentorsarray.map((teacher) => {
                              return (
                                <option key={teacher.id} value={teacher.name} />
                              );
                            })}
                          </datalist>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="discussion"
                            className="leading-7 text-sm text-gray-600"
                          >
                            What are you interested in discussing with the
                            mentor? (Long answer)
                          </label>
                          <textarea
                            id="discussion"
                            name="discussion"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="linkedin"
                            className="leading-7 text-sm text-gray-600"
                          >
                            LinkedIn Profile
                          </label>
                          <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="github"
                            className="leading-7 text-sm text-gray-600"
                          >
                            GitHub Profile
                          </label>
                          <input
                            type="text"
                            id="github"
                            name="github"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="portfolio"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Portfolio Link
                          </label>
                          <input
                            type="text"
                            id="portfolio"
                            name="portfolio"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="personalwebsite"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Personal Website
                          </label>
                          <input
                            type="text"
                            id="personalwebsite"
                            name="personalwebsite"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="cv"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Updated CV
                          </label>
                          <input
                            type="file"
                            id="cv"
                            name="cv"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button className="w-full border-2 text-white bg-indigo-500 rounded-md p-2 hover:bg-indigo-600">
                          Submit
                        </button>
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
      )}
    </div>
  );
}
