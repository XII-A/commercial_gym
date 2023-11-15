import Image from "next/image";
import SectionOne from "@/components/Program/SectionOne";
import SectionTwo from "@/components/Transform/SectionTwo";
import SectionThree from "@/components/Enhance/SectionThree";
import SectionFour from "@/components/Reviews/SectionFour";

export default function Home() {
  return (
    <div className=" min-h-screen py-2 ">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
