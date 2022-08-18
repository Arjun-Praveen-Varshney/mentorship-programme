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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
            <h1 className="sm:text-3xl md:text-7xl font-medium title-font mb-2 text-gray-900">
              1:1 Mentoring
            </h1>
          </div>
          <div className="m-8">
            <div>
              <h2 className="text-2xl font-thin">1:1 Mentoring</h2>
            </div>
            <div>
              <ul className="list-disc">
                <li className="font-medium">
                  Students fill up an application form indicating their long and
                  short-term goals, and optionally, a preferred mentor.
                </li>
                <li className="font-medium">
                  Mentors are listed on Mentors Web Page, with their areas of
                  interest, a brief statement about their work and their
                  strengths.
                </li>
                <li className="font-medium">
                  Mentees reach out to mentors to see if they are available.
                </li>
                <li className="font-medium">Mentors may accept or reject.</li>
                <li className="font-medium">
                  Mentoring relationship lasts about 3 months or 6 meetings.
                  This is so that multiple students can benefit from the
                  program.
                </li>
              </ul>
            </div>
            <br />
            <br />
            <div>
              <ul className="list-disc">
                <li className="font-medium">
                  Note: For the first batch of students, the organizers will
                  match mentees and mentors based on the applications submitted
                  by the students.
                </li>
                <li className="font-medium">
                  Each mentor will mentor a small number of mentees. The
                  mentee-mentor meeting is setup individually, at mutual
                  convenience of mentor and mentee.
                </li>
                <li className="font-medium">
                  All the mentors/mentees who participated will be requested to
                  submit feedback about their experience after the mentoring
                  phase concludes, which could last 2-6 months.
                </li>
              </ul>
            </div>
            <br />
            <br />
            <div>
              <h2 className="text-2xl font-thin">Mentoring Sessions</h2>
            </div>
            <div>
              <ul className="list-disc">
                <li className="font-medium">
                  After the mentor/student match, the student and mentor set up
                  a mutually agreeable time to meet using a voice/video
                  conference.
                </li>
                <li className="font-medium">
                  We expect that mentoring sessions should be about 30 mins - 1
                  hour, 2 times a month.
                </li>
                <li className="font-medium">
                  Total mentoring duration could last 2 months - 6 months. After
                  that they can mutually decide if they want to continue to
                  meet.
                </li>
              </ul>
            </div>
            <br />
            <br />
            <div>
              <h2 className="text-2xl font-thin">Some Topics of Discussion</h2>
            </div>
            <div>
              <h2 className="font-medium">
                The most common questions from students revolve around career
                and next steps:
              </h2>
            </div>
            <div>
              <ul className="list-disc">
                <li className="font-medium">Career Guidance</li>
                <li className="font-medium">Future Studies</li>
                <li className="font-medium">
                  Help with entrepreneurship, technical skills, robotics, etc
                </li>
                <li className="font-medium">
                  Any other advice that can improve a students life
                </li>
                <li className="font-medium">Improving soft skills</li>
                <li className="font-medium">
                  Characteristics of success in academia / industry / government
                  and so on.
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
            <br />
            <br />
            <div>
              <h2 className="text-2xl font-thin">Purpose:</h2>
            </div>
            <div>
              <ul className="list-disc">
                <li className="font-medium">
                  One-to-one career guidance from industry experts and academic
                  experts (Similar to Alumni Mentorship Program at IIT Roorkee)
                </li>
              </ul>
            </div>
            <br />
            <br />
            <div>
              <h2 className="text-2xl font-thin">Goals:</h2>
            </div>
            <div>
              <ul className="list-disc">
                <li className="font-medium">
                  With all the resources on your fingertips, we strongly believe
                  there should be very little difference between an IIT vs the
                  other colleges
                </li>
                <li className="font-medium">
                  Our goal is to take every college in India to reach the same
                  level of placement success as in IITs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
