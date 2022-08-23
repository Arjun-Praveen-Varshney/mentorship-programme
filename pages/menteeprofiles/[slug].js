import React from "react";
import { query, where, getDocs } from "firebase/firestore";
import Head from "next/head";
import { mentees } from "../_app";
import "react-toastify/dist/ReactToastify.css";

const Slug = ({ onementee }) => {
  return (
    <div className="flex gap-5 md:gap-10">
      <Head>
        <title>
          {onementee[0].length > 0 ? onementee[0][0].name : "No mentee found"}
        </title>
      </Head>
      {onementee[0].map((student) => {
        return (
          <section
            key={student.id}
            className="text-gray-600 body-font relative"
          >
            <div className="container px-5 py-12 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Profile details
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  This is the profile page of this particular mentee.
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
                        readOnly={true}
                        type="text"
                        id="name"
                        value={student.name}
                        //user.userName}
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
                        readOnly={true}
                        type="email"
                        id="email"
                        name="email"
                        value={student.email}
                        //user.loginemail}
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
                        value={student.college}
                        //college}
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
                        value={student.course}
                        //course}
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
                        value={student.yearofpassout}
                        //yearofpassout}

                        type="text"
                        id="yearofpassout"
                        name="yearofpassout"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="fieldofinterest"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Field of Interest
                      </label>
                      <input
                        value={student.fieldofinterest}
                        //yearofpassout}

                        type="text"
                        id="fieldofinterest"
                        name="fieldofinterest"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="discussion"
                        className="leading-7 text-sm text-gray-600"
                      >
                        What are you interested in discussing with the mentee?
                        (Long answer)
                      </label>
                      <textarea
                        //discussion}
                        value={student.talk}
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
                        value={student.linkedin}
                        //linkedin}

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
                        value={student.github}
                        //github}

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
                        value={student.portfolio}
                        //portfolio}

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
                        value={student.personalwebsite}
                        //personalwebsite}

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
                        value={student.cv}
                        type="text"
                        id="cv"
                        name="cv"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    {/* <button
                        onClick={updateDocument}
                        className="w-full border-2 text-white bg-indigo-500 rounded-md p-2 hover:bg-indigo-600"
                      >
                        Apply under this mentee
                      </button> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
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
