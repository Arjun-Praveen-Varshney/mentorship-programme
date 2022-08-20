import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Mentorship Program</title>
        <meta name="description" content="Created by Arjun Praveen Varshney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="content" className="relative">
        {/* <div className="hidden lg:block">
          <img
            src="https://cdn.mentorcruise.com/img/home/shapes/shape-blue.svg"
            alt="Shape Blue"
            className="absolute"
            style={{ top: "500px" }}
          />
          <img
            src="https://cdn.mentorcruise.com/img/home/shapes/shape-blue.svg"
            alt="Shape Blue"
            className="absolute"
            style={{ top: "100px", right: "0px", transform: "rotate(180deg)" }}
          />
          <img
            src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
            alt="White Triangle"
            className="absolute"
            style={{ top: "425px", left: "100px", height: "40px" }}
          />
          <img
            src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
            alt="White Triangle"
            className="absolute"
            style={{ top: "300px", right: "200px", height: "30px" }}
          />
          <img
            src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
            alt="White Triangle"
            className="absolute"
            style={{ top: "650px", right: "80px", height: "80px" }}
          />
          <img
            src="https://cdn.mentorcruise.com/img/home/shapes/curved-white-bg.svg"
            className="absolute bottom-0 w-full"
            style={{ top: "900px", height: "600px" }}
            alt="Background"
          />
        </div> */}
        <div
          style={{
            background:
              "linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)",
          }}
        >
          <div className="space-y-8">
            <div className="mt-20 mb-12 mx-auto max-w-7xl px-4 sm:mt-24">
              <h1 className="text-center tracking-tight font-normal text-blue-400 text-5xl leading-normal">
                <span>1-on-1</span>
                <span
                  className="font-bold"
                  id="typed-headline"
                  data-typeitid="wqj42blsqxd"
                >
                  <span
                    style={{
                      display: "inline",
                      position: "relative",
                      font: "inherit",
                      color: "inherit",
                      lineHeight: "inherit",
                    }}
                    className="ti-wrapper"
                  >
                    <span
                      style={{
                        display: "inline",
                        position: "relative",
                        font: "inherit",
                        color: "inherit",
                        lineHeight: "inherit",
                      }}
                      className="ti-container"
                    >
                      AWS
                    </span>
                    <span
                      style={{
                        display: "inline",
                        position: "relative",
                        font: "inherit",
                        color: "inherit",
                        lineHeight: "inherit",
                        left: "-.25ch",
                      }}
                      className="ti-cursor"
                    >
                      |
                    </span>
                  </span>
                </span>
                <span className="-ml-2">Mentorship</span>
              </h1>
              <h1 className="hidden">1-on-1 Mentorship</h1>

              <p className="lg:text-center mt-3 max-w-screen-md mx-auto text-blue-400 md:mt-6 text-2xl md:leading-normal md:max-w-3xl">
                Master your craft with leading mentors at your side. Grow with
                every online mentoring session and take the next step in your
                career. All on your terms, for a flat monthly price.
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-16 lg:mt-28 lg:mb-24">
            <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
              <source
                srcSet="https://cdn.mentorcruise.com/img/home/hero/homehero_2x.webp 2x"
                type="image/webp"
              />
              <source
                srcSet="https://cdn.mentorcruise.com/img/home/hero/homehero_2x.png 2x"
                type="image/png"
              />
              <source
                srcSet="https://cdn.mentorcruise.com/img/home/hero/homehero_1x.webp"
                className="image-enhancer"
                type="image/webp"
              />
              <img
                src="https://cdn.mentorcruise.com/img/home/hero/homehero_1x.png"
                alt="Finding a mentor on MentorCruise"
                className="image-enhancer"
              />
            </picture>
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
        <div className="relative text-blue-400 z-0">
          <div className="hidden lg:block">
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/green_triangle.svg"
              className="absolute"
              style={{ top: "125px", right: "225px", height: "100px" }}
            />
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/orange_triangle.svg"
              className="absolute"
              style={{ top: "200px", left: "225px", height: "50px" }}
            />
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/orange_triangle.svg"
              className="absolute"
              style={{ top: "1300px", right: "200px", height: "100px" }}
            />
          </div>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="mx-auto bg-white z-50 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="relative text-3xl lg:text-center mx-auto max-w-2xl font-bold tracking-tight sm:text-4xl">
                  Learn that new skill, launch that project, land your dream
                  career.
                </h2>
                <p className="relative text-xl lg:text-center mx-auto max-w-3xl">
                  Your online mentor can elevate your career or be a shoulder to
                  lean on. Get a personalized mentoring program, including
                  curated study plans, regular check-ins, and unlimited
                  actionable support. Be part of an online mentor community that
                  spans across the globe.
                </p>
              </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-2 lg:grid-cols-2 lg:gap-8">
                <li className="max-w-lg mx-auto p-6 text-left rounded-lg xl:px-10">
                  <div className="space-y-2">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="text-lg leading-6 space-y-1">
                        <div className="flex items-center space-x-4 py-4">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/chat-bubble.svg"
                            alt="Chat Bubble"
                          />
                          <span className="font-bold text-base">CHAT</span>
                        </div>
                        <div className="flex">
                          <h3 className="font-bold text-3xl">
                            Expert mentorship. One text away.
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 text-base">
                            Ask questions, kick the tires on a new idea, or
                            discuss professional progress and improvements in
                            your online mentoring sessions with unlimited
                            messaging.
                          </p>
                          <p className="my-4 text-base">
                            Have an upcoming interview at{" "}
                            <a
                              href="/company/amazon/"
                              className="text-blue-400 underline"
                            >
                              Amazon
                            </a>
                            ? Need help in{" "}
                            <a
                              href="/experts/productmanagement/"
                              className="text-blue-400 underline"
                            >
                              product management
                            </a>{" "}
                            or
                            <a
                              href="/coach/marketing/"
                              className="text-blue-400 underline"
                            >
                              marketing
                            </a>
                            ? Whatever it is, our online mentors are there for
                            you.
                          </p>
                        </div>
                        <div>
                          <p className="my-4 text-base font-bold">
                            Fewer interruptions in your day-to-day and easier
                            documentation. A text away, get expert guidance at
                            your convenience from your mentor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="hidden lg:block mx-auto">
                  <picture className="max-w-screen-lg">
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_2x.png 2x"
                      type="image/png"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_1x.webp"
                      className="image-enhancer"
                      type="image/webp"
                    />
                    <img
                      src="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_2x.png"
                      alt="Our Chat"
                      className="image-enhancer"
                    />
                  </picture>
                </li>

                <li className="hidden lg:block mx-auto max-w-lg">
                  <picture className="max-w-screen-lg">
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/conversation_2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/conversation_2x.png 2x"
                      type="image/png"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/conversation_1x.webp"
                      className="image-enhancer"
                      type="image/webp"
                    />
                    <img
                      src="https://cdn.mentorcruise.com/img/home/screenshots/conversation_1x.png"
                      alt="Coding Challenge"
                      className="image-enhancer"
                    />
                  </picture>
                </li>

                <li className="max-w-lg mx-auto p-6 text-left rounded-lg xl:px-10">
                  <div className="space-y-2">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="text-lg leading-6 space-y-1">
                        <div className="flex items-center space-x-4 py-4">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/goals-icon.svg"
                            alt="Goals"
                          />
                          <span className="font-bold text-base">
                            ESTABLISH MILESTONES
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-3xl">
                            Shortcut growth through expert guidance.
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 text-base">
                            Get invaluable knowledge from veterans and founders.
                            Through effective mentorship, eliminate the time
                            spent on figuring out your next steps. Get an action
                            plan, and gain wisdom from consistent mentoring
                            sessions.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <picture className="flex items-center max-w-screen-lg w-12 h-12">
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/tomray_2x.webp 2x"
                              type="image/webp"
                              alt="Tom Ray"
                              className="rounded-full w-12 h-12"
                            />
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/tomray_2x.png 2x"
                              type="image/png"
                              alt="Tom Ray"
                              className="rounded-full w-12 h-12"
                            />
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/tomray_1x.webp"
                              type="image/webp"
                              alt="Tom Ray"
                              className="image-enhancer rounded-full w-12 h-12"
                            />
                            <img
                              src="https://cdn.mentorcruise.com/img/faces/tomray_1x.png"
                              alt="Tom Ray"
                              className="image-enhancer rounded-full w-12 h-12"
                            />
                          </picture>
                          <div className="flex flex-col">
                            <p className="text-sm italic">
                              In just a few weeks, I feel a LOT more confident
                              navigating the React world. Chris has been an
                              excellent mentor.
                            </p>
                            <p className="text-sm italic font-bold">
                              - Tom Ray, a{" "}
                              <a
                                href="/coach/React/"
                                className="underline text-blue-400"
                              >
                                React
                              </a>{" "}
                              mentee.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="max-w-lg mx-auto p-6 text-left rounded-lg xl:px-10">
                  <div className="space-y-2">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="text-lg leading-6 space-y-1">
                        <div className="flex items-center space-x-4 py-4">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/videochat-icon.svg"
                            alt="Video-chat"
                          />
                          <span className="font-bold text-base">
                            VIDEO CALLS
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-3xl">
                            Talk it out. Face-to-face.
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 text-base">
                            Online mentorship shouldnt compromise genuine
                            interactions—enter video chat.
                          </p>
                          <p className="my-4 text-base">
                            When youre stuck in a logjam, be it a design flaw,
                            code defect, or business decision, skip the endless
                            back-and-forth of essays and talk it out
                            face-to-face with your mentor on video call.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <picture className="flex items-center max-w-screen-lg w-12 h-12">
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/bassma_2x.webp 2x"
                              type="image/webp"
                              alt="Lucas Payton"
                              className="rounded-full w-12 h-12"
                            />
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/bassma_2x.jpg 2x"
                              type="image/png"
                              alt="Lucas Payton"
                              className="rounded-full w-12 h-12"
                            />
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/lucaspayton.webp"
                              type="image/webp"
                              alt="Lucas Payton"
                              className="image-enhancer rounded-full w-12 h-12"
                            />
                            <img
                              src="https://cdn.mentorcruise.com/img/faces/bassma.jpg"
                              alt="Bassma Hefni"
                              className="image-enhancer rounded-full w-12 h-12"
                            />
                          </picture>
                          <div className="flex flex-col">
                            <p className="text-sm italic">
                              After our sessions, I cleared interviews left and
                              right and was actually offered three positions in
                              Germany.
                            </p>
                            <p className="text-sm italic font-bold">
                              - Bassma Hefni, a{" "}
                              <a
                                href="/coach/productdesign/"
                                className="underline text-blue-400"
                              >
                                Product Design
                              </a>{" "}
                              mentee.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="hidden lg:block mx-auto max-w-lg relative">
                  <picture className="max-w-screen-lg">
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_2x.png 2x"
                      type="image/png"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_1x.webp"
                      className="image-enhancer"
                      type="image/webp"
                    />
                    <img
                      src="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_1x.png"
                      alt="Coding Challenge"
                      className="image-enhancer"
                    />
                  </picture>
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
                  className="flex justify-center w-full md:w-auto text-sm underline font-semibold text-blue-400 hover:text-green"
                  href="/mentor/"
                >
                  Become a Mentor
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative text-blue-400"
          style={{ background: "linear-gradient(#ffffff 0%, #8DD2D2 40%)" }}
        >
          <div className="hidden lg:block">
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
              className="absolute"
              style={{ top: "300px", right: "150px", height: "25px" }}
            />
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
              className="absolute"
              style={{ top: "400px", left: "50px", height: "50px" }}
            />
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
              className="absolute"
              style={{ top: "600px", right: "100px", height: "95px" }}
            />
          </div>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-20">
              <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl lg:text-center mx-auto max-w-2xl font-bold tracking-tight sm:text-4xl">
                  An arsenal of industry veterans and mentoring packages at a
                  flexible price.
                </h2>
                <p className="text-xl lg:text-center mx-auto max-w-3xl">
                  Pick from a curated collection of mentors and services. Try
                  them out for 7 days with no obligation. Found your mentoring
                  sessions useful? Move to a low-cost, monthly mentoring
                  subscription. No lock-ins, no hidden fees Just accelerated
                  professional growth.
                </p>
              </div>
              <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-4 lg:space-x-8 space-y-4 md:space-y-0">
                <li>
                  <div className="w-72 py-4 px-6 space-y-4 bg-white text-left rounded-lg shadow-lg">
                    <div className="flex flex-row justify-between px-2 items-center space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="flex flex-col md:justify-between">
                        <h3 className="font-bold text-base">Ayla S.</h3>
                        <p className="text-xs lg:text-sm text-gray-400 w-36">
                          Top-rated marketing expert
                        </p>
                      </div>
                      <div>
                        <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/ayla_2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/ayla_2x.png 2x"
                            type="image/png"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/ayla.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://cdn.mentorcruise.com/img/faces/ayla.png"
                            className="rounded-full h-16 w-16"
                            alt="Ayla S."
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Mentorship
                        </p>
                        <p className="text-green-400 font-bold text-xs">
                          $150/month
                        </p>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Intro Session
                        </p>
                        <p className="text-green-400 font-bold text-xs">$39</p>
                      </div>
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          CV Review
                        </p>
                        <p className="text-green-400 font-bold text-xs">$69</p>
                      </div>
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Launch Plan
                        </p>
                        <p className="text-green-400 font-bold text-xs">$129</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="hidden md:block">
                  <div className="w-72 py-4 px-6 space-y-4 bg-white text-left rounded-lg shadow-lg">
                    <div className="flex flex-row justify-between px-2 items-center space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="flex flex-col md:justify-between">
                        <h3 className="font-bold text-base">Francois J.</h3>
                        <p className="text-xs lg:text-sm text-gray-400 w-36">
                          Full-Stack Software Developer
                        </p>
                      </div>
                      <div>
                        <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/francois_2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/francois_2x.png 2x"
                            type="image/png"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/francois.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://cdn.mentorcruise.com/img/faces/francois.png"
                            className="rounded-full h-16 w-16"
                            alt="Francois J."
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Mentorship
                        </p>
                        <p className="text-green-400 font-bold text-xs">
                          $99/month
                        </p>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Intro Session
                        </p>
                        <p className="text-green-400 font-bold text-xs">$39</p>
                      </div>
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          CV Review
                        </p>
                        <p className="text-green-400 font-bold text-xs">$69</p>
                      </div>
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Launch Plan
                        </p>
                        <p className="text-green-400 font-bold text-xs">$129</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="hidden lg:block">
                  <div className="w-72 py-4 px-6 space-y-4 bg-white text-left rounded-lg shadow-lg">
                    <div className="flex flex-row justify-between px-2 items-center space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="flex flex-col md:justify-between">
                        <h3 className="font-bold text-base">Annie L.</h3>
                        <p className="text-xs lg:text-sm text-gray-400 w-36">
                          UX Designer
                        </p>
                      </div>
                      <div>
                        <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/annie_2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/annie_2x.png 2x"
                            type="image/png"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/annie.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://cdn.mentorcruise.com/img/faces/annie.png"
                            className="rounded-full h-16 w-16"
                            alt="Annie L."
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Mentorship
                        </p>
                        <p className="text-green-400 font-bold text-xs">
                          $50/month
                        </p>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Intro Session
                        </p>
                        <p className="text-green-400 font-bold text-xs">$39</p>
                      </div>
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Portfolio Review
                        </p>
                        <p className="text-green-400 font-bold text-xs">$69</p>
                      </div>
                      <div className="flex justify-between items-center w-full rounded-md bg-gray-100 py-2 px-4">
                        <p className="text-blue-400 font-semibold text-xs lg:text-sm">
                          Expert Session
                        </p>
                        <p className="text-green-400 font-bold text-xs">$140</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="bg-white rounded-md pt-8 pb-12 opacity-90">
                <div className="px-8 sm:px-6 lg:max-w-7xl lg:px-8">
                  <ul className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    <li>
                      <div className="flex justify-center items-center space-x-6">
                        <div className="flex justify-center items-center h-12 w-12 rounded-md">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/magnifying-glass.svg"
                            alt="Free Trial"
                            className="mt-4"
                          />
                        </div>
                        <dl>
                          <dt className="mt-5 text-2xl leading-6 text-blue-400 font-bold">
                            Free Trial
                          </dt>
                          <dd className="mt-2 text-lg">
                            Get the first 7 days free, with every mentor
                          </dd>
                        </dl>
                      </div>
                    </li>

                    <li>
                      <div className="flex justify-center items-center space-x-6">
                        <div className="flex justify-center items-center h-12 w-12 rounded-md">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/pen-and-paper.svg"
                            alt="No Strings"
                            className="mt-4"
                          />
                        </div>
                        <dl>
                          <dt className="mt-5 text-2xl leading-6 text-blue-400 font-bold">
                            No Strings
                          </dt>
                          <dd className="mt-2 text-lg">
                            Cancelling is simple and can be done anytime
                          </dd>
                        </dl>
                      </div>
                    </li>

                    <li>
                      <div className="flex justify-center items-center space-x-6">
                        <div className="flex justify-center items-center h-12 w-12 rounded-md">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/chart-bars.svg"
                            alt="Money-Back"
                            className="mt-4"
                          />
                        </div>
                        <dl>
                          <dt className="mt-5 text-2xl leading-6 text-blue-400 font-bold">
                            Money-Back
                          </dt>
                          <dd className="mt-2 text-lg">
                            We offer full refunds within the first 14 days
                          </dd>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <a href="/mentor/browse/">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-400 cursor-pointer text-white px-6 py-2 uppercase tracking-wider text-sm font-medium border-0 rounded hover:bg-shade-dark transition-ease"
                    href="/mentor/browse/"
                  >
                    Find my mentor
                  </button>
                </a>
                <a
                  className="flex justify-center w-full md:w-auto text-sm text-blue-400 underline font-medium hover:text-shade-dark"
                  href="/mentor/"
                >
                  Become a Mentor
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-400 text-blue-400">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl lg:text-center mx-auto max-w-2xl text-white font-bold tracking-tight sm:text-4xl">
                  Not sure if mentorship is right for you? Give it a try with a
                  one-off session.
                </h2>
                <p className="text-xl lg:text-center mx-auto max-w-3xl text-white">
                  A quick, easy call with an expert is just one click away with
                  our attractive one-off sessions. Picking a brain, talking
                  through an issue or getting to know an industry expert has
                  never been easier.
                </p>
              </div>
              <ul className="relative z-20 space-y-8 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                <img
                  className="hidden lg:block absolute -left-20 -top-20 z-10"
                  src="https://cdn.mentorcruise.com/img/home/shapes/bg-dots.svg"
                  alt="Dots"
                />
                <img
                  className="hidden lg:block absolute -right-20 -bottom-20 z-10"
                  src="https://cdn.mentorcruise.com/img/home/shapes/bg-dots.svg"
                  alt="Dots"
                />

                <li className="z-10">
                  <div className="p-6 bg-white text-left rounded-lg xl:px-10">
                    <div className="xl:flex xl:items-center xl:justify-between">
                      <div className="font-medium text-lg leading-6 space-y-6">
                        <div className="flex">
                          <h3 className="font-extrabold text-2xl">
                            Introductory Call
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 font-normal text-base">
                            If youre looking for a mentor, and youre just not
                            sure about how this all works this should be for
                            you. In a casual, informal introductory call, a
                            mentor will introduce themselves ...
                            <a
                              className="font-bold underline text-blue-400 hover:text-green"
                              href="/sessions/introductory-call/"
                              title="Interview Preparation"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h3 className="font-extrabold text-lg">
                            Approx. 30 minutes
                          </h3>
                          <h3 className="font-extrabold text-green-400 text-lg">
                            $39
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <a
                            className="space-x-4"
                            href="/sessions/introductory-call/"
                          >
                            <button
                              type="submit"
                              className="flex items-center bg-blue-400-secondary cursor-pointer text-white px-6 py-2 uppercase tracking-wider text-sm font-semibold border-0 rounded hover:bg-shade-dark transition-ease"
                              href="/sessions/introductory-call/ %}"
                            >
                              Explore
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                ></path>
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="p-6 bg-white text-left rounded-lg xl:px-10">
                    <div className="xl:flex xl:items-center xl:justify-between">
                      <div className="font-medium text-lg leading-6 space-y-6">
                        <div className="flex">
                          <h3 className="font-extrabold text-2xl">
                            Study Plan
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 font-normal text-base">
                            Looking to learn a new skill? The vast amount of
                            resources on any topic on the internet can feel
                            overwhelming at times. A mentor can give you an
                            overview of worthwhile ...
                            <a
                              className="font-bold underline text-blue-400 hover:text-green"
                              href="/sessions/study-plan/"
                              title="Interview Preparation"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h3 className="font-extrabold text-lg">
                            Approx. 45 minutes
                          </h3>
                          <h3 className="font-extrabold text-green-400 text-lg">
                            $39
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <a className="space-x-4" href="/sessions/study-plan/">
                            <button
                              type="submit"
                              className="flex items-center bg-blue-400-secondary cursor-pointer text-white px-6 py-2 uppercase tracking-wider text-sm font-semibold border-0 rounded hover:bg-shade-dark transition-ease"
                              href="/sessions/study-plan/ %}"
                            >
                              Explore
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                ></path>
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="z-10">
                  <div className="p-6 bg-white text-left rounded-lg xl:px-10">
                    <div className="xl:flex xl:items-center xl:justify-between">
                      <div className="font-medium text-lg leading-6 space-y-6">
                        <div className="flex">
                          <h3 className="font-extrabold text-2xl">
                            Interview Preparation
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 font-normal text-base">
                            Some big interviews coming up? In this 1-hour
                            session, a mentor with hiring experience will act as
                            a technical interviewer and ask you some standard
                            hiring questions ...
                            <a
                              className="font-bold underline text-blue-400 hover:text-green"
                              href="/sessions/interview-preparation/"
                              title="Interview Preparation"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h3 className="font-extrabold text-lg">
                            Approx. 60 minutes
                          </h3>
                          <h3 className="font-extrabold text-green-400 text-lg">
                            $99
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <a
                            className="space-x-4"
                            href="/sessions/interview-preparation/"
                          >
                            <button
                              type="submit"
                              className="flex items-center bg-blue-400-secondary cursor-pointer text-white px-6 py-2 uppercase tracking-wider text-sm font-semibold border-0 rounded hover:bg-shade-dark transition-ease"
                              href="/sessions/interview-preparation/ %}"
                            >
                              Explore
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                ></path>
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="md:flex md:justify-center md:items-center">
                <a
                  className="w-full md:w-auto bg-green-300 cursor-pointer text-white px-6 py-3 uppercase tracking-wider text-sm font-medium border-0 rounded hover:bg-green-400 transition-ease"
                  href="/sessions/"
                >
                  Show Me More Sessions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-blue-400 -mt-4">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl lg:text-center mx-auto max-w-2xl font-bold tracking-tight sm:text-4xl">
                  Still not convinced?
                  <br /> Dont just take our word for it
                </h2>
                <p className="text-xl lg:text-center mx-auto max-w-3xl">
                  Weve already delivered 1-on-1 mentorship to thousands of
                  students, professionals, managers and executives. Even better,
                  theyve left an average rating of 4.9 out of 5 for our mentors.
                </p>
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

              <div className="flex flex-col md:flex-row justify-center items-center space-y-4  md:space-y-0 md:space-x-4">
                <a
                  className="w-full md:w-auto bg-green-300 cursor-pointer text-white px-6 py-3 uppercase tracking-wider text-center text-sm font-medium border-0 rounded hover:bg-green-400 hover:text-white transition-ease"
                  href="/mentor/browse/"
                >
                  Find My Mentor
                </a>
                <a
                  className="w-full md:w-auto bg-blue-400 cursor-pointer text-white px-6 py-3 uppercase tracking-wider text-center text-sm font-medium border-0 rounded hover:bg-shade-dark hover:text-white transition-ease"
                  href="/testimonials/"
                >
                  Read More Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <section className="home-banner banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h1 className="slogan">
                Talk to mentors that genuinely enjoy helping people
              </h1>{" "}
              <div className="text">
                Have 1-on-1 conversations about growth, marketing, product, and
                everything in between with startup mentors that care.
              </div>
              <div className="action">
                <a
                  href="/pricing"
                  target="_self"
                  className="btn btn-purple btn-chevron"
                >
                  I am in. Sign me up
                </a>
                <a
                  href="#"
                  target="_self"
                  className="btn btn-video"
                  data-toggle="modal"
                  data-target="#modal-consultants-video"
                >
                  32 Second Demo Video
                </a>
              </div>
              <div className="list-holder">
                <p>Dont go it alone, speak to a growth mentor when …</p>
                <ul className="icons-list">
                  <li>Your growth has stalled due to a world crisis</li>
                  <li>You have nobody to discuss your growth strategy with</li>
                  <li>Youve got ideas but want validation before executing</li>
                  <li>You are burned out and need to vent your frustrations</li>
                </ul>
              </div>{" "}
            </div>
            <div className="col-xl-6 d-none d-xl-block">
              <div className="images-block">
                <div className="images-block-slide-holder">
                  <div className="owl-carousel owl-theme images-block-slider js-images-block-slider slick-initialized slick-slider slick-vertical">
                    <div className="slick-list" style={{ height: "140px" }}>
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          height: "0px",
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "transform 5000ms linear 0s",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-3"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/rachel-jordan.jpg"
                                  alt="Rachel Jordan"
                                />
                              </div>{" "}
                              <span className="name">Rachel Jordan</span>{" "}
                              <span className="position">
                                Chief Experience Officer at Boardontrack
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-2"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Kevin-Indig-profile-pic-e1657620681188.png"
                                  alt="Kevin Indig"
                                />
                              </div>{" "}
                              <span className="name">Kevin Indig</span>{" "}
                              <span className="position">
                                Director of SEO at Shopify
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-1"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Hannah-Parvaz-profile-pic.jpg"
                                  alt="Hannah Parvaz"
                                />
                              </div>{" "}
                              <span className="name">Hannah Parvaz</span>{" "}
                              <span className="position">
                                Head of Growth at Curio
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/nurkan.png"
                                  alt="Nurkan Kirkan"
                                />
                              </div>{" "}
                              <span className="name">Nurkan Kirkan</span>{" "}
                              <span className="position">
                                Head of Growth at Ticketswap
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index="1"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/agata-krzysztofik-profile-picture-e1657619715581.jpg"
                                  alt="Agata Krzysztofik"
                                />
                              </div>{" "}
                              <span className="name">Agata Krzysztofik</span>{" "}
                              <span className="position">
                                Head of Marketing at Piktochart
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index="2"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Justyna-Ciecierska-e1657619677541.jpg"
                                  alt="Justyna Ciecierska"
                                />
                              </div>{" "}
                              <span className="name">Justyna Ciecierska</span>{" "}
                              <span className="position">
                                Head of Growth at Beducated
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index="3"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/David-Kelly-profile-pic-e1657618890525.jpg"
                                  alt="David Kelly"
                                />
                              </div>{" "}
                              <span className="name">David Kelly</span>{" "}
                              <span className="position">
                                General Manager at AppSumo
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slide-hide"
                          data-slick-index="4"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/rachel-jordan.jpg"
                                  alt="Rachel Jordan"
                                />
                              </div>{" "}
                              <span className="name">Rachel Jordan</span>{" "}
                              <span className="position">
                                Chief Experience Officer at Boardontrack
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slide-hide"
                          data-slick-index="5"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Kevin-Indig-profile-pic-e1657620681188.png"
                                  alt="Kevin Indig"
                                />
                              </div>{" "}
                              <span className="name">Kevin Indig</span>{" "}
                              <span className="position">
                                Director of SEO at Shopify
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide start-fadeOut"
                          data-slick-index="6"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Hannah-Parvaz-profile-pic.jpg"
                                  alt="Hannah Parvaz"
                                />
                              </div>{" "}
                              <span className="name">Hannah Parvaz</span>{" "}
                              <span className="position">
                                Head of Growth at Curio
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="7"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/nurkan.png"
                                  alt="Nurkan Kirkan"
                                />
                              </div>{" "}
                              <span className="name">Nurkan Kirkan</span>{" "}
                              <span className="position">
                                Head of Growth at Ticketswap
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="8"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/agata-krzysztofik-profile-picture-e1657619715581.jpg"
                                  alt="Agata Krzysztofik"
                                />
                              </div>{" "}
                              <span className="name">Agata Krzysztofik</span>{" "}
                              <span className="position">
                                Head of Marketing at Piktochart
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned start-fadeIn"
                          data-slick-index="9"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Justyna-Ciecierska-e1657619677541.jpg"
                                  alt="Justyna Ciecierska"
                                />
                              </div>{" "}
                              <span className="name">Justyna Ciecierska</span>{" "}
                              <span className="position">
                                Head of Growth at Beducated
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="10"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/David-Kelly-profile-pic-e1657618890525.jpg"
                                  alt="David Kelly"
                                />
                              </div>{" "}
                              <span className="name">David Kelly</span>{" "}
                              <span className="position">
                                General Manager at AppSumo
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="11"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/rachel-jordan.jpg"
                                  alt="Rachel Jordan"
                                />
                              </div>{" "}
                              <span className="name">Rachel Jordan</span>{" "}
                              <span className="position">
                                Chief Experience Officer at Boardontrack
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="12"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Kevin-Indig-profile-pic-e1657620681188.png"
                                  alt="Kevin Indig"
                                />
                              </div>{" "}
                              <span className="name">Kevin Indig</span>{" "}
                              <span className="position">
                                Director of SEO at Shopify
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="13"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Hannah-Parvaz-profile-pic.jpg"
                                  alt="Hannah Parvaz"
                                />
                              </div>{" "}
                              <span className="name">Hannah Parvaz</span>{" "}
                              <span className="position">
                                Head of Growth at Curio
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-carousel owl-theme images-block-slider js-images-block-slider slick-initialized slick-slider slick-vertical">
                    <div className="slick-list" style={{ height: "80px" }}>
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          height: "0px",
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "transform 5000ms linear 0s",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-3"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/pj.jpg"
                                  alt="Positive John"
                                />
                              </div>{" "}
                              <span className="name">Positive John</span>{" "}
                              <span className="position">
                                Conversion Manager at Brainly
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-2"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/itay.jpg"
                                  alt="Itay Forer"
                                />
                              </div>{" "}
                              <span className="name">Itay Forer</span>{" "}
                              <span className="position">
                                Co-founder at Cleanly (YC W15)
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-1"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/eden-1.jpg"
                                  alt="Eden Bidani"
                                />
                              </div>{" "}
                              <span className="name">Eden Bidani</span>{" "}
                              <span className="position">
                                Conversion Copywriter
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/michael-taylor.jpg"
                                  alt="Michael Taylor"
                                />
                              </div>{" "}
                              <span className="name">Michael Taylor</span>{" "}
                              <span className="position">
                                Co-Founder at Ladder.io
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index="1"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/Keiko_ProfilePic_350x350.jpg"
                                  alt="Keiko Asakura"
                                />
                              </div>{" "}
                              <span className="name">Keiko Asakura</span>{" "}
                              <span className="position">
                                Marketing Director at Elasticsearch
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index="2"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/head-bl-yellow-1.png"
                                  alt="Kuba Rdzak "
                                />
                              </div>{" "}
                              <span className="name">Kuba Rdzak </span>{" "}
                              <span className="position">
                                Head of Paid Social at Ladder.io
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index="3"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/CROPPED-_MG_6162修1-复件-1.jpg"
                                  alt="Emilia Korczynska"
                                />
                              </div>{" "}
                              <span className="name">Emilia Korczynska</span>{" "}
                              <span className="position">
                                Head of Marketing at Userpilot
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slide-hide"
                          data-slick-index="4"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/pj.jpg"
                                  alt="Positive John"
                                />
                              </div>{" "}
                              <span className="name">Positive John</span>{" "}
                              <span className="position">
                                Conversion Manager at Brainly
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slide-hide"
                          data-slick-index="5"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/itay.jpg"
                                  alt="Itay Forer"
                                />
                              </div>{" "}
                              <span className="name">Itay Forer</span>{" "}
                              <span className="position">
                                Co-founder at Cleanly (YC W15)
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide start-fadeOut"
                          data-slick-index="6"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/eden-1.jpg"
                                  alt="Eden Bidani"
                                />
                              </div>{" "}
                              <span className="name">Eden Bidani</span>{" "}
                              <span className="position">
                                Conversion Copywriter
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="7"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/michael-taylor.jpg"
                                  alt="Michael Taylor"
                                />
                              </div>{" "}
                              <span className="name">Michael Taylor</span>{" "}
                              <span className="position">
                                Co-Founder at Ladder.io
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="8"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/Keiko_ProfilePic_350x350.jpg"
                                  alt="Keiko Asakura"
                                />
                              </div>{" "}
                              <span className="name">Keiko Asakura</span>{" "}
                              <span className="position">
                                Marketing Director at Elasticsearch
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned start-fadeIn"
                          data-slick-index="9"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/head-bl-yellow-1.png"
                                  alt="Kuba Rdzak "
                                />
                              </div>{" "}
                              <span className="name">Kuba Rdzak </span>{" "}
                              <span className="position">
                                Head of Paid Social at Ladder.io
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="10"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/CROPPED-_MG_6162修1-复件-1.jpg"
                                  alt="Emilia Korczynska"
                                />
                              </div>{" "}
                              <span className="name">Emilia Korczynska</span>{" "}
                              <span className="position">
                                Head of Marketing at Userpilot
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="11"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/pj.jpg"
                                  alt="Positive John"
                                />
                              </div>{" "}
                              <span className="name">Positive John</span>{" "}
                              <span className="position">
                                Conversion Manager at Brainly
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="12"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/itay.jpg"
                                  alt="Itay Forer"
                                />
                              </div>{" "}
                              <span className="name">Itay Forer</span>{" "}
                              <span className="position">
                                Co-founder at Cleanly (YC W15)
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="13"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/eden-1.jpg"
                                  alt="Eden Bidani"
                                />
                              </div>{" "}
                              <span className="name">Eden Bidani</span>{" "}
                              <span className="position">
                                Conversion Copywriter
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-carousel owl-theme images-block-slider js-images-block-slider slick-initialized slick-slider slick-vertical">
                    <div className="slick-list" style={{ height: "0px" }}>
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          height: "0px",
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "transform 5000ms linear 0s",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-3"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Denny-Hollick-e1657619042920.png"
                                  alt="Denny Hollick"
                                />
                              </div>{" "}
                              <span className="name">Denny Hollick</span>{" "}
                              <span className="position">
                                Director of Product at Unbounce
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-2"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/Bunie.jpg"
                                  alt="Bunie Anyaegbunam"
                                />
                              </div>{" "}
                              <span className="name">Bunie Anyaegbunam</span>{" "}
                              <span className="position">
                                Chief Marketing Officer at Florence.co.uk
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-1"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/JD-Jan-21-square.jpg"
                                  alt="Joanna Delaney"
                                />
                              </div>{" "}
                              <span className="name">Joanna Delaney</span>{" "}
                              <span className="position">
                                Senior Marketing Strategist at Videoask
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/margarita-l.jpg"
                                  alt="Margarita Loktionova"
                                />
                              </div>{" "}
                              <span className="name">Margarita Loktionova</span>{" "}
                              <span className="position">
                                Content Marketing Lead at Semrush
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index="1"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Morgan-Schofield-profile-pic-e1657618958321.jpg"
                                  alt="Morgan Schofield"
                                />
                              </div>{" "}
                              <span className="name">Morgan Schofield</span>{" "}
                              <span className="position">
                                Head of Growth at IOHK
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-active"
                          data-slick-index="2"
                          aria-hidden="false"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Ronak-Ganatra.jpg"
                                  alt="Ronak Ganatra"
                                />
                              </div>{" "}
                              <span className="name">Ronak Ganatra</span>{" "}
                              <span className="position">
                                Marketing Director at Lano
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index="3"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/IMG-20190611-WA0008.jpg"
                                  alt="Elijah Toh"
                                />
                              </div>{" "}
                              <span className="name">Elijah Toh</span>{" "}
                              <span className="position">
                                Marketing Director at Wolt
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slide-hide"
                          data-slick-index="4"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Denny-Hollick-e1657619042920.png"
                                  alt="Denny Hollick"
                                />
                              </div>{" "}
                              <span className="name">Denny Hollick</span>{" "}
                              <span className="position">
                                Director of Product at Unbounce
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slide-hide"
                          data-slick-index="5"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/Bunie.jpg"
                                  alt="Bunie Anyaegbunam"
                                />
                              </div>{" "}
                              <span className="name">Bunie Anyaegbunam</span>{" "}
                              <span className="position">
                                Chief Marketing Officer at Florence.co.uk
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide start-fadeOut"
                          data-slick-index="6"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/JD-Jan-21-square.jpg"
                                  alt="Joanna Delaney"
                                />
                              </div>{" "}
                              <span className="name">Joanna Delaney</span>{" "}
                              <span className="position">
                                Senior Marketing Strategist at Videoask
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="7"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/margarita-l.jpg"
                                  alt="Margarita Loktionova"
                                />
                              </div>{" "}
                              <span className="name">Margarita Loktionova</span>{" "}
                              <span className="position">
                                Content Marketing Lead at Semrush
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="8"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2020/10/Morgan-Schofield-profile-pic-e1657618958321.jpg"
                                  alt="Morgan Schofield"
                                />
                              </div>{" "}
                              <span className="name">Morgan Schofield</span>{" "}
                              <span className="position">
                                Head of Growth at IOHK
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned start-fadeIn"
                          data-slick-index="9"
                          aria-hidden="true"
                          style={{ width: "0px" }}
                          id=""
                          tabIndex="-1"
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Ronak-Ganatra.jpg"
                                  alt="Ronak Ganatra"
                                />
                              </div>{" "}
                              <span className="name">Ronak Ganatra</span>{" "}
                              <span className="position">
                                Marketing Director at Lano
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="10"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/IMG-20190611-WA0008.jpg"
                                  alt="Elijah Toh"
                                />
                              </div>{" "}
                              <span className="name">Elijah Toh</span>{" "}
                              <span className="position">
                                Marketing Director at Wolt
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="11"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2022/04/Denny-Hollick-e1657619042920.png"
                                  alt="Denny Hollick"
                                />
                              </div>{" "}
                              <span className="name">Denny Hollick</span>{" "}
                              <span className="position">
                                Director of Product at Unbounce
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="12"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/04/Bunie.jpg"
                                  alt="Bunie Anyaegbunam"
                                />
                              </div>{" "}
                              <span className="name">Bunie Anyaegbunam</span>{" "}
                              <span className="position">
                                Chief Marketing Officer at Florence.co.uk
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="13"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: "0px" }}
                          id=""
                        >
                          <div>
                            <div
                              className="item"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="image-holder">
                                <img
                                  src="https://www.growthmentor.com/wp-content/uploads/2021/05/JD-Jan-21-square.jpg"
                                  alt="Joanna Delaney"
                                />
                              </div>{" "}
                              <span className="name">Joanna Delaney</span>{" "}
                              <span className="position">
                                Senior Marketing Strategist at Videoask
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-slider-wrap d-block d-xl-none">
            <div className="images-block">
              <div className="images-block-slide-holder">
                <div className="mobile-images-block-slider js-mobile-images-block-slider owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-3876px, 0px, 0px)",
                        transition: "all 3s linear 0s",
                        width: "9804px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/CROPPED-_MG_6162修1-复件-1.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Emilia Korczynska</span>{" "}
                          <span className="position">
                            Head of Marketing at Userpilot
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/pj.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Positive John</span>{" "}
                          <span className="position">
                            Conversion Manager at Brainly
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/itay.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Itay Forer</span>{" "}
                          <span className="position">
                            Co-founder at Cleanly (YC W15)
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/eden-1.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Eden Bidani</span>{" "}
                          <span className="position">
                            Conversion Copywriter
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/margarita-l.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Margarita Loktionova</span>{" "}
                          <span className="position">
                            Content Marketing Lead at Semrush
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/Morgan-Schofield-profile-pic-e1657618958321.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Morgan Schofield</span>{" "}
                          <span className="position">
                            Head of Growth at IOHK
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2022/04/Ronak-Ganatra.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Ronak Ganatra</span>{" "}
                          <span className="position">
                            Marketing Director at Lano
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/IMG-20190611-WA0008.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Elijah Toh</span>{" "}
                          <span className="position">
                            Marketing Director at Wolt
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2022/04/Denny-Hollick-e1657619042920.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Denny Hollick</span>{" "}
                          <span className="position">
                            Director of Product at Unbounce
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/Bunie.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Bunie Anyaegbunam</span>{" "}
                          <span className="position">
                            Chief Marketing Officer at Florence.co.uk
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/JD-Jan-21-square.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Joanna Delaney</span>{" "}
                          <span className="position">
                            Senior Marketing Strategist at Videoask
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/nurkan.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Nurkan Kirkan</span>{" "}
                          <span className="position">
                            Head of Growth at Ticketswap
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/agata-krzysztofik-profile-picture-e1657619715581.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Agata Krzysztofik</span>{" "}
                          <span className="position">
                            Head of Marketing at Piktochart
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2022/04/Justyna-Ciecierska-e1657619677541.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Justyna Ciecierska</span>{" "}
                          <span className="position">
                            Head of Growth at Beducated
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/David-Kelly-profile-pic-e1657618890525.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">David Kelly</span>{" "}
                          <span className="position">
                            General Manager at AppSumo
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/rachel-jordan.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Rachel Jordan</span>{" "}
                          <span className="position">
                            Chief Experience Officer at Boardontrack
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/Kevin-Indig-profile-pic-e1657620681188.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Kevin Indig</span>{" "}
                          <span className="position">
                            Director of SEO at Shopify
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/Hannah-Parvaz-profile-pic.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Hannah Parvaz</span>{" "}
                          <span className="position">
                            Head of Growth at Curio
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/michael-taylor.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Michael Taylor</span>{" "}
                          <span className="position">
                            Co-Founder at Ladder.io
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/Keiko_ProfilePic_350x350.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Keiko Asakura</span>{" "}
                          <span className="position">
                            Marketing Director at Elasticsearch
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/head-bl-yellow-1.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Kuba Rdzak </span>{" "}
                          <span className="position">
                            Head of Paid Social at Ladder.io
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/CROPPED-_MG_6162修1-复件-1.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Emilia Korczynska</span>{" "}
                          <span className="position">
                            Head of Marketing at Userpilot
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/pj.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Positive John</span>{" "}
                          <span className="position">
                            Conversion Manager at Brainly
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/itay.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Itay Forer</span>{" "}
                          <span className="position">
                            Co-founder at Cleanly (YC W15)
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/eden-1.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Eden Bidani</span>{" "}
                          <span className="position">
                            Conversion Copywriter
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/margarita-l.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Margarita Loktionova</span>{" "}
                          <span className="position">
                            Content Marketing Lead at Semrush
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/Morgan-Schofield-profile-pic-e1657618958321.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Morgan Schofield</span>{" "}
                          <span className="position">
                            Head of Growth at IOHK
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2022/04/Ronak-Ganatra.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Ronak Ganatra</span>{" "}
                          <span className="position">
                            Marketing Director at Lano
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/IMG-20190611-WA0008.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Elijah Toh</span>{" "}
                          <span className="position">
                            Marketing Director at Wolt
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2022/04/Denny-Hollick-e1657619042920.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Denny Hollick</span>{" "}
                          <span className="position">
                            Director of Product at Unbounce
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/Bunie.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Bunie Anyaegbunam</span>{" "}
                          <span className="position">
                            Chief Marketing Officer at Florence.co.uk
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/JD-Jan-21-square.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Joanna Delaney</span>{" "}
                          <span className="position">
                            Senior Marketing Strategist at Videoask
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/nurkan.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Nurkan Kirkan</span>{" "}
                          <span className="position">
                            Head of Growth at Ticketswap
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/agata-krzysztofik-profile-picture-e1657619715581.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Agata Krzysztofik</span>{" "}
                          <span className="position">
                            Head of Marketing at Piktochart
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2022/04/Justyna-Ciecierska-e1657619677541.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Justyna Ciecierska</span>{" "}
                          <span className="position">
                            Head of Growth at Beducated
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/David-Kelly-profile-pic-e1657618890525.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">David Kelly</span>{" "}
                          <span className="position">
                            General Manager at AppSumo
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/rachel-jordan.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Rachel Jordan</span>{" "}
                          <span className="position">
                            Chief Experience Officer at Boardontrack
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/Kevin-Indig-profile-pic-e1657620681188.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Kevin Indig</span>{" "}
                          <span className="position">
                            Director of SEO at Shopify
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2020/10/Hannah-Parvaz-profile-pic.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Hannah Parvaz</span>{" "}
                          <span className="position">
                            Head of Growth at Curio
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/04/michael-taylor.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Michael Taylor</span>{" "}
                          <span className="position">
                            Co-Founder at Ladder.io
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/Keiko_ProfilePic_350x350.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Keiko Asakura</span>{" "}
                          <span className="position">
                            Marketing Director at Elasticsearch
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/head-bl-yellow-1.png"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Kuba Rdzak </span>{" "}
                          <span className="position">
                            Head of Paid Social at Ladder.io
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned active"
                        style={{ width: "auto", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="image-holder">
                            <img
                              src="https://www.growthmentor.com/wp-content/uploads/2021/05/CROPPED-_MG_6162修1-复件-1.jpg"
                              alt=""
                            />
                          </div>{" "}
                          <span className="name">Emilia Korczynska</span>{" "}
                          <span className="position">
                            Head of Marketing at Userpilot
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <span aria-label="Next">›</span>
                    </button>
                  </div>
                  <div className="owl-dots disabled"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="top-info-section">
        <div className="review-block">
          <div className="container">
            <div className="text">
              “Growthmentor has become my go-to place to brainstorm and collect
              feedback from peers. Very high value discussions with people from
              all stages of company building and scaling.”
            </div>{" "}
            <div className="info">
              <span className="name">Jacob Elbaum</span>{" "}
              <span className="date">Aug 3, 2021</span>{" "}
              <img
                src="https://www.growthmentor.com/wp-content/uploads/2022/04/stars.svg"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
        <div className="media-block">
          <div className="container">
            <div id="animated-title" className="title">
              <p>
                Struggling with <strong style={{}}>analysis paralysis</strong> ?
                <br />A growth mentor can help with that.
              </p>
            </div>
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
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="mx-auto py-16 lg:py-20 px-4 lg:px-16">
        <div className="px-4 md:px-8 xl:px-16">
          <span className="font-inter font-bold uppercase text-sm text-pink-400 mb-2 block">
            More on mentorship
          </span>
          <h2 className="font-bold mb-8 text-xl md:text-2xl">
            Learn how to get the most from your mentorships.
          </h2>
        </div>
        <div className="grid gap-5 md:mx-auto md:grid-cols-3 md:max-w-none">
          <a
            href=""
            className="group flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
          >
            <div className="flex-shrink-0">
              <div className="hidden h-48 w-full object-cover">
                <svg
                  viewBox="0 0 24 24"
                  className="text-3xl text-gray-600 pr-1"
                >
                  <g
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  >
                    <path d="M9 15h10M9 19h10" stroke="#468cef"></path>
                    <path
                      d="M5 21V1h18v18a4 4 0 01-4 4H3"
                      stroke="#0a259c"
                    ></path>
                    <path d="M5 21a2 2 0 11-4 0V10.959" stroke="#0a259c"></path>
                    <path d="M9 5h10v6H9z" stroke="#468cef"></path>
                  </g>
                </svg>
              </div>
              <img
                src="/assets/stock/1.png"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1 pb-2">
                <h3 className="text-lg leading-7 font-semibold text-gray-900 truncate">
                  1:1 Mentoring
                </h3>
                <div className="mt-3 text-sm leading-6 text-gray-500">
                  <ul className="list-disc">
                    <li className="font-medium">
                      Students fill up an application form indicating their long
                      and short-term goals, and optionally, a preferred mentor.
                    </li>
                    <li className="font-medium">
                      Mentors are listed on Mentors Web Page, with their areas
                      of interest, a brief statement about their work and their
                      strengths.
                    </li>
                    <li className="font-medium">
                      Mentees reach out to mentors to see if they are available.
                    </li>
                    <li className="font-medium">
                      Mentors may accept or reject.
                    </li>
                    <li className="font-medium">
                      Mentoring relationship lasts about 3 months or 6 meetings.
                      This is so that multiple students can benefit from the
                      program.
                    </li>
                  </ul>
                  <br />
                  <ul className="list-disc">
                    <li className="font-medium">
                      Note: For the first batch of students, the organizers will
                      match mentees and mentors based on the applications
                      submitted by the students.
                    </li>
                    <li className="font-medium">
                      Each mentor will mentor a small number of mentees. The
                      mentee-mentor meeting is setup individually, at mutual
                      convenience of mentor and mentee.
                    </li>
                    <li className="font-medium">
                      All the mentors/mentees who participated will be requested
                      to submit feedback about their experience after the
                      mentoring phase concludes, which could last 2-6 months.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a
            href=""
            className="group flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
          >
            <div className="flex-shrink-0">
              <div className="hidden h-48 w-full object-cover">
                <svg
                  viewBox="0 0 24 24"
                  className="text-3xl text-gray-600 pr-1"
                >
                  <g
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  >
                    <path d="M9 15h10M9 19h10" stroke="#468cef"></path>
                    <path
                      d="M5 21V1h18v18a4 4 0 01-4 4H3"
                      stroke="#0a259c"
                    ></path>
                    <path d="M5 21a2 2 0 11-4 0V10.959" stroke="#0a259c"></path>
                    <path d="M9 5h10v6H9z" stroke="#468cef"></path>
                  </g>
                </svg>
              </div>
              <img
                src="/assets/stock/2.png"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1 pb-2">
                <h3 className="text-lg leading-7 font-semibold text-gray-900 truncate">
                  Mentoring Sessions
                </h3>
                <div className="mt-3 text-sm leading-6 text-gray-500">
                  <ul className="list-disc">
                    <li className="font-medium">
                      After the mentor/student match, the student and mentor set
                      up a mutually agreeable time to meet using a voice/video
                      conference.
                    </li>
                    <li className="font-medium">
                      We expect that mentoring sessions should be about 30 mins
                      - 1 hour, 2 times a month.
                    </li>
                    <li className="font-medium">
                      Total mentoring duration could last 2 months - 6 months.
                      After that they can mutually decide if they want to
                      continue to meet.
                    </li>
                  </ul>
                  <br />
                  <ul className="list-disc">
                    <li className="font-medium">
                      One-to-one career guidance from industry experts and
                      academic experts (Similar to Alumni Mentorship Program at
                      IIT Roorkee)
                    </li>
                  </ul>
                  <br />
                  <ul className="list-disc">
                    <li className="font-medium">
                      With all the resources on your fingertips, we strongly
                      believe there should be very little difference between an
                      IIT vs the other colleges
                    </li>
                    <li className="font-medium">
                      Our goal is to take every college in India to reach the
                      same level of placement success as in IITs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a
            href=""
            className="group flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
          >
            <div className="flex-shrink-0">
              <div className="hidden h-48 w-full object-cover">
                <svg
                  viewBox="0 0 24 24"
                  className="text-3xl text-gray-600 pr-1"
                >
                  <g
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  >
                    <path d="M9 15h10M9 19h10" stroke="#468cef"></path>
                    <path
                      d="M5 21V1h18v18a4 4 0 01-4 4H3"
                      stroke="#0a259c"
                    ></path>
                    <path d="M5 21a2 2 0 11-4 0V10.959" stroke="#0a259c"></path>
                    <path d="M9 5h10v6H9z" stroke="#468cef"></path>
                  </g>
                </svg>
              </div>
              <img
                src="/assets/stock/3.png"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1 pb-2">
                <h3 className="text-lg leading-7 font-semibold text-gray-900 truncate">
                  Some Topics of Discussion
                </h3>
                <div className="mt-3 text-sm leading-6 text-gray-500">
                  <ul className="list-disc">
                    <li className="font-medium">Career Guidance</li>
                    <li className="font-medium">Future Studies</li>
                    <li className="font-medium">
                      Help with entrepreneurship, technical skills, robotics,
                      etc
                    </li>
                    <li className="font-medium">
                      Any other advice that can improve a students life
                    </li>
                    <li className="font-medium">Improving soft skills</li>
                    <li className="font-medium">
                      Characteristics of success in academia / industry /
                      government and so on.
                    </li>
                    <li className="font-medium">Organizing Job Search</li>
                    <li className="font-medium">
                      What are the life experiences of mentor so far
                    </li>
                    <li className="font-medium">
                      What are the life of a software engineer/data
                      scientist/entrepreneur… about?
                    </li>
                    <li className="font-medium">Starting a company</li>
                    <li className="font-medium">
                      Is it worth going abroad for a job? Is it worth settling
                      there? And many more...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
