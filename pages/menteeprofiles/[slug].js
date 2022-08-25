import React, { useEffect, useState } from "react";
import { query, where, getDocs } from "firebase/firestore";
import Head from "next/head";
import { mentees } from "../_app";
import useAuthStore from "../../allexports";
import Link from "next/link";

const Slug = ({ onementee }) => {
  const [user, setUser] = useState(null);
  const { userProfile } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);
  return (
    <div>
      <Head>
        <title>
          {onementee[0].length > 0 ? onementee[0][0].name : "No mentee found"}
        </title>
      </Head>
      {onementee[0].map((student) => {
        return (
          <div
            key={student.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Applicant Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.fieldofinterest}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.email}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">College</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.college}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Year of Passout
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.yearofpassout}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Course</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.course}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Mentor requested for
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.mentor}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Topic for Discussion
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {student.talk}
                  </dd>
                </div>
                {student.linkedin != "" && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      LinkedIn
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {student.linkedin}
                    </dd>
                  </div>
                )}
                {student.github != "" && (
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      GitHub
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {student.github}
                    </dd>
                  </div>
                )}
                {student.portfolio != "" && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Portfolio
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {student.portfolio}
                    </dd>
                  </div>
                )}
                {student.personalwebsite != "" && (
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Personal Website
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {student.personalwebsite}
                    </dd>
                  </div>
                )}

                {student.cv != "" && (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Attachments
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul
                        role="list"
                        className="border border-gray-200 rounded-md divide-y divide-gray-200"
                      >
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                              {" "}
                              cv.pdf{" "}
                            </span>
                          </div>

                          <div className="ml-4 flex-shrink-0">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={student.cv}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              View{" "}
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                )}
                {user && user.loginemail == student.email && (
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Actions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul
                        role="list"
                        className="border border-gray-200 rounded-md divide-y divide-gray-200"
                      >
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="p-2 w-full">
                            <Link href={`/updateprofile/${student.email}`}>
                              <a>
                                <button className="w-full border-2 text-white bg-indigo-500 rounded-md p-2 hover:bg-indigo-600">
                                  Update Profile
                                </button>
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const q = query(mentees, where("email", "==", `${slug}`));
  const onementee = [];
  await getDocs(q).then((data) => {
    onementee.push(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  });
  return {
    props: { onementee },
  };
}
