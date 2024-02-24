import { Poppins } from "next/font/google";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Internship from "@/components/home/internship/Internship";
import Courses from "@/components/home/Courses";
import Reviews from "@/components/home/Reviews";

const font = Poppins({
  weight: ["400", "500", "700", "900"],
  preload: false,
});

export default function Home() {
  return (
  <div className={`${font.className}`}>
    <Hero/>
    <Categories/>
    <Internship/>
    <Courses/>
    <Reviews/>
  </div>
  );
}
