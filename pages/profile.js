import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import useAuthStore from "../allexports";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ getDocs, mentors, addDoc, mentees }) {
  const [user, setUser] = useState(null);
  const [mentorsarray, setMentorsarray] = useState([]);
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [college, setcollege] = useState("");
  const [course, setcourse] = useState("");
  const [yearofpassout, setyearofpassout] = useState("");
  const [fieldofinterest, setfieldofinterest] = useState("");
  const [discussion, setdiscussion] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  const [portfolio, setportfolio] = useState("");
  const [personalwebsite, setpersonalwebsite] = useState("");
  const [cv, setcv] = useState("");

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

  const handleChange = (e) => {
    if (e.target.name == "college") {
      setcollege(e.target.value);
    } else if (e.target.name == "course") {
      setcourse(e.target.value);
    } else if (e.target.name == "yearofpassout") {
      setyearofpassout(e.target.value);
    } else if (e.target.name == "fieldofinterest") {
      setfieldofinterest(e.target.value);
    } else if (e.target.name == "discussion") {
      setdiscussion(e.target.value);
    } else if (e.target.name == "linkedin") {
      setlinkedin(e.target.value);
    } else if (e.target.name == "github") {
      setgithub(e.target.value);
    } else if (e.target.name == "portfolio") {
      setportfolio(e.target.value);
    } else if (e.target.name == "personalwebsite") {
      setpersonalwebsite(e.target.value);
    } else if (e.target.name == "cv") {
      setcv(e.target.files[0]);
    }
  };

  const addDocument = async () => {
    const docRef = await addDoc(mentees, {
      name: user.userName,
      email: user.loginemail,
      college: college,
      course: course,
      yearofpassout: yearofpassout,
      fieldofinterest: fieldofinterest,
      mentor: "",
      talk: discussion,
      linkedin: linkedin,
      github: github,
      portfolio: portfolio,
      personalwebsite: personalwebsite,
      // cv: cv,
    });
    toast.success("Form submitted successfully!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      router.push("/allmentors");
    }, 1000);
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                            readOnly={true}
                            type="text"
                            id="name"
                            value={user.userName}
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
                            onChange={handleChange}
                            value={college}
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
                            onChange={handleChange}
                            value={course}
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
                            value={yearofpassout}
                            onChange={handleChange}
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
                          <select
                            value={fieldofinterest}
                            onChange={handleChange}
                            id="fieldofinterest"
                            name="fieldofinterest"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          >
                            <option value="">None</option>
                            <option value="AI/ML">AI/ML</option>
                            <option value="VR/AR">VR/AR</option>
                            <option value="Brain Computer Interface">
                              Brain Computer Interface
                            </option>
                            <option value="Mobile App Development">
                              Mobile App Development
                            </option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Others">Others</option>
                          </select>
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
                            value={discussion}
                            onChange={handleChange}
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
                            value={linkedin}
                            onChange={handleChange}
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
                            value={github}
                            onChange={handleChange}
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
                            value={portfolio}
                            onChange={handleChange}
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
                            value={personalwebsite}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            type="file"
                            id="cv"
                            name="cv"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button
                          onClick={addDocument}
                          className="w-full border-2 text-white bg-indigo-500 rounded-md p-2 hover:bg-indigo-600"
                        >
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
