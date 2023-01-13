import { useRouter } from "next/router";
import Logo from "../components/Logo";
import CountDown from "../components/CountDown";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 h-screen justify-center items-center bg-violet-100 text-zinc-600">
      <Logo size="lg" />
      <CountDown />
      <div>
        <Button
          label="Fortsätt"
          type="secondary"
          onClick={() => router.push("/home")}
        />
      </div>
    </div>
  );
}
