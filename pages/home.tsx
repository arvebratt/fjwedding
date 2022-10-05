import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import Navigation from "../components/Navigation";
import { Routes } from "../util/types";

const Home = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return (
    <Navigation active={Routes.home}>
      <div>
        <h1>Logged in</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    </Navigation>
  );
};

export default Home;
