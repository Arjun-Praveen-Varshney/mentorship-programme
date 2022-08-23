import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
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
                lean on. Get a personalized mentoring program, including curated
                study plans, regular check-ins, and unlimited actionable
                support. Be part of an online mentor community that spans across
                the globe.
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
                          discuss professional progress and improvements in your
                          online mentoring sessions with unlimited messaging.
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
                          Through effective mentorship, eliminate the time spent
                          on figuring out your next steps. Get an action plan,
                          and gain wisdom from consistent mentoring sessions.
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
                        <span className="font-bold text-base">VIDEO CALLS</span>
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
                          back-and-forth of essays and talk it out face-to-face
                          with your mentor on video call.
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
};

export default About;
