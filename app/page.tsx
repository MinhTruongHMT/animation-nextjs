import { FormLogin } from "@/components/Login/FormLogin";
import Login from "@/components/Login/Login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-1/2 h-full -m-2" >
      <div >
        <Login></Login>
      </div>
      <div
        style={{ position: "absolute", top: "0px", right: "20%" }}
        className="mt-20"
      >
        <FormLogin />
      </div>
    </div>
  );
}
