import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useAuthStore from "../allexports";

const Allmentors = ({ getDocs, mentors }) => {
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
  return (
    <div>
      <Head>
        <title>All Mentors</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR MENTORS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {mentorsarray.map((mentor) => {
              return (
                <div key={mentor.id} className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={mentor.image}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {mentor.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3">{mentor.skill}</h3>
                      <p className="mb-4">{mentor.description}</p>
                      {user && (
                        <button
                          className="inline-flex text-white items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0"
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          Apply under this mentor
                        </button>
                      )}
                      <button
                        className="inline-flex text-white items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base m-1"
                        onClick={() => {
                          router.push("/");
                        }}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allmentors;
