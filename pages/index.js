import React from "react";
import Head from "next/head";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="overflow-hidden min-w-screen">
      <Head>
        <title>Mentorship Program</title>
        <meta name="description" content="Created by Arjun Praveen Varshney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="content" className="relative -my-24">
        <div
          className="py-12 mb-12"
          style={{
            background:
              "linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)",
          }}
        >
          <div className="space-y-8">
            <div className="mt-20 mb-12 mx-auto max-w-7xl px-4 sm:mt-24">
              <h1 className="text-center tracking-tight font-normal text-blue-400 text-5xl leading-normal">
                Mentorship on{" "}
                <Typewriter
                  options={{
                    strings: [
                      "AI/ML",
                      "VR/AR",
                      "Brain Computer Interface",
                      "Entrepreneurship",
                      "Mobile App Development",
                      "Web Development",
                      "UI/UX Design",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p className="lg:text-center mt-3 max-w-screen-md mx-auto text-blue-400 md:mt-6 text-2xl md:leading-normal md:max-w-3xl">
                Master your craft with leading mentors at your side. Grow with
                every online mentoring session and take the next step in your
                career. All on your terms, for a flat monthly price.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="mx-auto w-3/4">
              <video
                className="rounded-xl border-8 border-black"
                src="https://www.growthmentor.com/wp-content/uploads/2022/06/video-call-draft-6.mp4"
                playsInline={true}
                autoPlay={true}
                muted={true}
                controls={false}
                loop={true}
              ></video>
            </div>
          </div>
        </div>
        <div className="my-12 md:mt-0 space-y-8 mx-auto max-w-screen-2xl">
          <span className="flex justify-center text-center mt-16 lg:mt-0 text-blue-400 text-base uppercase font-bold">
            Get mentored by industry veterans
          </span>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-0 lg:grid-cols-5 md:w-3/4 mx-auto">
            <div className="col-span-1 flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/google.svg"
                alt="Google"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/microsoft.svg"
                alt="Microsoft"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/facebook-l.svg"
                alt="Facebook"
              />
            </div>
            <div className="col-span-1 hidden sm:flex justify-center pt-8 md:pt-10 pb-6 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/amazon.svg"
                alt="Amazon"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/github.svg"
                alt="Github"
              />
            </div>
            <div className="col-span-1 hidden sm:flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/airbnb.svg"
                alt="Airbnb"
              />
            </div>
            <div className="col-span-1 hidden sm:flex justify-center py-8 lg:pt-10 lg:pb-6 px-8 md:px-4 lg:px-8">
              <img
                className="h-8 md:w-auto md:max-h-8"
                src="https://cdn.mentorcruise.com/img/logocloud/uber.svg"
                alt="Uber"
              />
            </div>
            <div className="col-span-1 hidden sm:flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-14 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/stripe.svg"
                alt="Stripe"
              />
            </div>
            <div className="col-span-1 hidden sm:flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/netflix.svg"
                alt="Netflix"
              />
            </div>
            <div className="col-span-1 hidden sm:flex justify-center py-8 px-6 md:px-4 lg:px-8">
              <img
                className="h-auto w-auto md:h-12 md:w-auto"
                src="https://cdn.mentorcruise.com/img/logocloud/andela.svg"
                alt="Andela"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-400 text-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl lg:text-center mx-auto max-w-2xl text-white font-bold tracking-tight sm:text-4xl">
                  At your fingertips: a dedicated career coach.
                </h2>
                <p className="text-xl lg:text-center mx-auto max-w-3xl">
                  Want to ace your next job interview? Successfully build your
                  startup? Itching to learn high-demand skills? Work smart with
                  an online mentor or{" "}
                  <a href="/coach/" className="text-white underline">
                    coach
                  </a>{" "}
                  by your side to offer expert advice and guidance to match your
                  zeal. Become unstoppable using MentorCruise.
                </p>
              </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                <li className="text-white bg-blue-400">
                  <div className="p-6 text-left rounded-lg xl:px-10">
                    <div className="space-y-2">
                      <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <div className="flex justify-center">
                            <h3 className="font-bold text-2xl w-auto h-auto">
                              Find Your Mentor
                            </h3>
                          </div>
                          <div className="flex justify-center px-10 py-4">
                            <img
                              src="https://cdn.mentorcruise.com/img/home/icons/mc-logo.svg"
                              alt="MentorCruise"
                            />
                          </div>
                          <div>
                            <p className="my-4 text-base text-center">
                              Explore our growing catalogue of experienced
                              mentors until you find the perfect fit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="text-white bg-blue-400">
                  <div className="p-6 text-left rounded-lg xl:px-10">
                    <div className="space-y-2">
                      <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <div className="flex justify-center">
                            <h3 className="font-bold text-2xl w-auto h-auto">
                              Apply for Mentorship
                            </h3>
                          </div>
                          <div className="flex justify-center px-10 py-4">
                            <img
                              src="https://cdn.mentorcruise.com/img/home/icons/mc-edit.svg"
                              alt="MentorCruise"
                            />
                          </div>
                          <div>
                            <p className="my-4 text-base text-center">
                              Fill in an application, and if youre a match with
                              your chosen mentor you can start your free 7-day
                              trial.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="text-white bg-blue-400">
                  <div className="p-6 text-left rounded-lg xl:px-10">
                    <div className="space-y-2">
                      <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <div className="flex justify-center">
                            <h3 className="font-bold text-2xl w-auto h-auto">
                              Level up your skills
                            </h3>
                          </div>
                          <div className="flex justify-center px-10 py-4">
                            <img
                              src="https://cdn.mentorcruise.com/img/home/icons/mc-rocket.svg"
                              alt="MentorCruise"
                            />
                          </div>
                          <div>
                            <p className="my-4 text-base text-center">
                              From personal chats to hands-on support, each
                              mentor offers different services to help you
                              skyrocket your career.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <a href="/mentor/browse/">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-green-300 cursor-pointer text-white px-6 py-2 uppercase text-sm font-medium tracking-wider border-0 rounded hover:bg-green-400 transition-ease"
                    href="/mentor/browse/"
                  >
                    Find my mentor
                  </button>
                </a>
                <a
                  className="flex justify-center w-full md:w-auto text-sm text-white underline font-semibold hover:text-green"
                  href="/mentor/"
                >
                  Become a Mentor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-blue-400 -mt-4 mb-12">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl lg:text-center mx-auto max-w-2xl font-bold tracking-tight sm:text-4xl">
                  Testimonials
                </h2>
              </div>
              <ul className="relative z-20 space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <li>
                  <div className="flex flex-col justify-between p-6 h-full z-40 bg-white rounded-lg shadow-lg font-medium text-left text-lg leading-6 xl:px-10 ">
                    <div>
                      <img
                        src="https://cdn.mentorcruise.com/cache/3ac8e06947305fa86ea9e77f20d0a1ff/d8fd0b5e23375605/02ddf4f39e65bc6dbb281cc4e2dc7e25.jpg"
                        className="h-10 w-10 rounded-full"
                        alt="Naz"
                        loading="lazy"
                      />
                      <p className="my-4 font-normal italic text-base">
                        <a
                          className="text-blue-400 font-bold"
                          href="https://mentorcruise.com/mentor/NazDelam/"
                        >
                          Naz{" "}
                        </a>
                        is an amazing person and a wonderful mentor. She is
                        supportive and knowledgeable with extensive practical
                        experience. Having been a manager at Netflix, she also{" "}
                        <i className="bg-indigo-100">
                          knows a ton about working with teams at scale
                        </i>
                        . Highly recommended.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold italic text-base">
                        -{" "}
                        <a href="/coach/leadership/" className="text-blue-400">
                          Farzad, a management mentee.
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col justify-between p-6 h-full z-40 bg-white rounded-lg shadow-lg font-medium text-left text-lg leading-6 xl:px-10 ">
                    <div>
                      <img
                        src="https://cdn.mentorcruise.com/cache/1156024f635d257a065d658d7103b8ad/ef912ca66b558b5b/e24e630ed5c0aa6c0899bae784cbe87a.jpg"
                        className="h-10 w-10 rounded-full"
                        alt="Brandon"
                        loading="lazy"
                      />
                      <p className="my-4 font-normal italic text-base">
                        <a
                          className="text-blue-400 font-bold"
                          href="https://mentorcruise.com/mentor/brandonfujii/"
                        >
                          Brandon{" "}
                        </a>
                        has been supporting me with a software engineering job
                        hunt and has provided{" "}
                        <i className="bg-indigo-100">
                          amazing value with his industry knowledge, tips unique
                          to my situation and support
                        </i>{" "}
                        as I prepared for my interviews and applications.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold italic text-base">
                        -{" "}
                        <a href="/filter/algorithms/" className="text-blue-400">
                          Rao, an engineering mentee.
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>

                <li className="hidden md:block">
                  <div className="flex flex-col justify-between p-6 h-full z-40 bg-white rounded-lg shadow-lg font-medium text-left text-lg leading-6 xl:px-10 ">
                    <div>
                      <img
                        src="https://cdn.mentorcruise.com/cache/6c76a0dcbfc70df7919651fdb312b54c/4e446ed58fe6fd8c/f1f420f496d64148192a20dbb6bb48b8.jpg"
                        className="h-10 w-10 rounded-full"
                        alt="Morgan"
                        loading="lazy"
                      />
                      <p className="my-4 font-normal italic text-base">
                        <a
                          className="text-blue-400 font-bold"
                          href="https://mentorcruise.com/mentor/MorganYoung/"
                        >
                          Morgan{" "}
                        </a>
                        gave me great tips, insights and brought up very
                        important questions that{" "}
                        <i className="bg-indigo-100">
                          led me in the right direction in my job search
                        </i>{" "}
                        and in preparation for interviews.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold italic text-base">
                        -{" "}
                        <a
                          href="/experts/productmanagement/"
                          className="text-blue-400"
                        >
                          Julia, a product management mentee.
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>

                <li className="hidden md:block">
                  <div className="flex flex-col justify-between p-6 h-full z-40 bg-white rounded-lg shadow-lg font-medium text-left text-lg leading-6 xl:px-10 ">
                    <div>
                      <img
                        src="https://cdn.mentorcruise.com/cache/a92a674a7cbd453611c32876a9fbccc6/f5d3e57037470ff3/b94b78e2113429521e8b70d0c69d39fb.jpg"
                        className="h-10 w-10 rounded-full"
                        alt="Andrii"
                        loading="lazy"
                      />
                      <p className="my-4 font-normal italic text-base">
                        <a
                          className="text-blue-400 font-bold"
                          href="https://mentorcruise.com/mentor/AndriiLatyshev/"
                        >
                          Andrii{" "}
                        </a>
                        is the best mentor I have ever met. He explains things
                        clearly and helps to solve almost any problem. He{" "}
                        <i className="bg-indigo-100">
                          taught me so many things about the world of Java
                        </i>{" "}
                        in so a short period of time!
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold italic text-base">
                        -{" "}
                        <a href="/filter/java/" className="text-blue-400">
                          Volha, a Java mentee.
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>

                <li className="hidden lg:block">
                  <div className="flex flex-col justify-between p-6 h-full z-40 bg-white rounded-lg shadow-lg font-medium text-left text-lg leading-6 xl:px-10 ">
                    <div>
                      <img
                        src="https://cdn.mentorcruise.com/cache/0726d560569e11bed607a432970f5071/2c8d49b9c5c8bdc7/683569d19d7f7787ed188c60c86c57e7.jpg"
                        className="h-10 w-10 rounded-full"
                        alt="Greg"
                        loading="lazy"
                      />
                      <p className="my-4 font-normal italic text-base">
                        <a
                          className="text-blue-400 font-bold"
                          href="https://mentorcruise.com/mentor/GregZen/"
                        >
                          Greg{" "}
                        </a>
                        is literally helping me achieve my dreams. I had very
                        little idea of what I was doing Greg was the missing
                        piece that offered me{" "}
                        <i className="bg-indigo-100">
                          down to earth guidance in business
                        </i>
                        .
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold italic text-base">
                        -{" "}
                        <a href="/coach/business/" className="text-blue-400">
                          Amber, a business mentee.
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>

                <li className="hidden lg:block">
                  <div className="flex flex-col justify-between p-6 h-full z-40 bg-white rounded-lg shadow-lg font-medium text-left text-lg leading-6 xl:px-10 ">
                    <div>
                      <img
                        src="https://cdn.mentorcruise.com/cache/375cfeb9fc092b84ad444fa16b5d0fcf/86cca01ce6899153/90144a312d72e8301ab46ea5d8051238.jpg"
                        className="h-10 w-10 rounded-full"
                        alt="Anna"
                        loading="lazy"
                      />
                      <p className="my-4 font-normal italic text-base">
                        <a
                          className="text-blue-400 font-bold"
                          href="https://mentorcruise.com/mentor/AnnaHerasymenko/"
                        >
                          Anna{" "}
                        </a>
                        really helped me a lot. Her mentoring was very
                        structured, she could answer all my questions and
                        inspired me a lot. I can already see that{" "}
                        <i className="bg-indigo-100">
                          this has made me even more successful
                        </i>{" "}
                        with my agency.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold italic text-base">
                        -{" "}
                        <a href="/experts/design/" className="text-blue-400">
                          Pierre, a design mentee.
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
