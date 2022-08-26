import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useAuthStore from "../../allexports";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Slug = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userProfile } = useAuthStore();
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [currentrole, setcurrentrole] = useState("");
  let [skill, setskill] = useState("");
  const [other, setother] = useState("");
  const [profile, setprofile] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  const [portfolio, setportfolio] = useState("");
  const [personalwebsite, setpersonalwebsite] = useState("");
  const [cv, setcv] = useState("");
  const [image, setimage] = useState("");
  const storage = getStorage();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "company") {
      setcompany(e.target.value);
    } else if (e.target.name == "currentrole") {
      setcurrentrole(e.target.value);
    } else if (e.target.name == "skill") {
      setskill(e.target.value);
    } else if (e.target.name == "other") {
      setother(e.target.value);
    } else if (e.target.name == "profile") {
      setprofile(e.target.value);
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
    } else if (e.target.name == "image") {
      setimage(e.target.files[0]);
    }
  };

  const addDocument = async () => {
    if (other) {
      skill = other;
    }
    if (name === "" || company === "" || currentrole === "" || skill == "") {
      alert("Please fill out the required fields!");
    } else {
      const storageRef = ref(storage, `mentors/${user.loginemail}/cv`);
      const imageRef = ref(storage, `mentors/${user.loginemail}/image`);
      await setDoc(
        doc(database, "mentors", user.loginemail),
        {
          name: name,
          email: user.loginemail,
          image: "",
          company: company,
          currentrole: currentrole,
          skill: skill,
          profile: profile,
          linkedin: linkedin,
          github: github,
          portfolio: portfolio,
          personalwebsite: personalwebsite,
          cv: "",
        },
        { merge: true }
      );
      if (user.image && image == "") {
        await setDoc(
          doc(database, "mentors", user.loginemail),
          { image: user.image },
          { merge: true }
        );
      }
      if (image != "") {
        await uploadBytes(imageRef, image);
        const downloadedimageurl = await getDownloadURL(imageRef);
        await setDoc(
          doc(database, "mentors", user.loginemail),
          { image: downloadedimageurl },
          { merge: true }
        );
      }
      if (cv != "") {
        await uploadBytes(storageRef, cv);
        const downloadedurl = await getDownloadURL(storageRef);
        await setDoc(
          doc(database, "mentors", user.loginemail),
          { cv: downloadedurl },
          { merge: true }
        );
      }
      toast.success("Profile updated successfully!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`/mentorprofiles/${user.loginemail}`);
      }, 1000);
    }
  };
  return (
    <div>
      <Head>
        <title>Update Mentor Profile</title>
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
      <div className="mt-10 sm:mt-0">
        {user && (
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Profile Details
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Please fill all your details carefully.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        value={user.loginemail}
                        readOnly={true}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company currently working in
                      </label>
                      <input
                        value={company}
                        onChange={handleChange}
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="company"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="currentrole"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Current Role in company
                      </label>
                      <input
                        value={currentrole}
                        onChange={handleChange}
                        type="text"
                        name="currentrole"
                        id="currentrole"
                        autoComplete="currentrole"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="skill"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Field of Interest for giving Mentorship
                      </label>
                      <select
                        value={skill}
                        onChange={handleChange}
                        id="skill"
                        name="skill"
                        autoComplete="skill"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">None</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="VR/AR">VR/AR</option>
                        <option value="Brain Computer Interface">
                          Brain Computer Interface
                        </option>
                        <option value="Entrepreneurship">
                          Entrepreneurship
                        </option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    <div
                      className={`${
                        skill != "Others" && "hidden"
                      } col-span-6 sm:col-span-5`}
                    >
                      <label
                        htmlFor="other"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Other Skill
                      </label>
                      <input
                        value={other}
                        onChange={handleChange}
                        type="text"
                        name="other"
                        id="other"
                        autoComplete="other"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700"
                      >
                        LinkedIn Profile
                      </label>
                      <input
                        value={linkedin}
                        onChange={handleChange}
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        autoComplete="linkedin"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="github"
                        className="block text-sm font-medium text-gray-700"
                      >
                        GitHub Profile
                      </label>
                      <input
                        value={github}
                        onChange={handleChange}
                        type="text"
                        name="github"
                        id="github"
                        autoComplete="github"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="portfolio"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Portfolio Link
                      </label>
                      <input
                        value={portfolio}
                        onChange={handleChange}
                        type="text"
                        name="portfolio"
                        id="portfolio"
                        autoComplete="portfolio"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="personalwebsite"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Personal Website
                      </label>
                      <input
                        value={personalwebsite}
                        onChange={handleChange}
                        type="text"
                        name="personalwebsite"
                        id="personalwebsite"
                        autoComplete="personalwebsite"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="my-5">
                    <label
                      htmlFor="profile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Profile
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={profile}
                        onChange={handleChange}
                        id="profile"
                        name="profile"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Something more about you"
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your request.
                    </p>
                  </div>

                  <div className="my-6">
                    <label className="block text-sm font-medium text-gray-700">
                      {" "}
                      Photo{" "}
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt="user-image"
                            className="h-full w-full"
                          />
                        ) : (
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </span>
                      <span className="ml-5">Or</span>
                      <input
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="my-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {" "}
                      Updated CV{" "}
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="cv"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              onChange={handleChange}
                              id="cv"
                              name="cv"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, PDF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={addDocument}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slug;
