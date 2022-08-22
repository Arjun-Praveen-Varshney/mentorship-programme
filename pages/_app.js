import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { app, database } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
export const mentors = collection(database, "mentors");
export const mentees = collection(database, "mentees");

function MyApp({ Component, pageProps }) {
  const [progress, setprogress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setprogress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setprogress(100);
    });
  }, [router.query]);
  return (
    <>
      <LoadingBar
        color="#4B0082"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
      >
        <Navbar />
        <Component
          app={app}
          mentors={mentors}
          mentees={mentees}
          getDocs={getDocs}
          {...pageProps}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default MyApp;
