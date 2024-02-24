import Layout from "@/components/shared/Layout";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function internshipDetails() {
  const data = [
    {
      id: 1,
      img: "/images/google.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 2,
      img: "/images/jio.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 3,
      img: "/images/rio.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 4,
      img: "/images/tata.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 5,
      img: "/images/bank.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 6,
      img: "/images/reliance.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 7,
      img: "/images/indbank.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
    {
      id: 8,
      img: "/images/reliance.png",
      title: "Commercial Industrial Placement",
      locationIcon: "/images/loc.svg",
      location: "Mumbai,India",
      desc: "Acmegrade",
      buttontext: "Apply Now",
      rating: "4.9",
      reviews: "345",
      websiteLink: "",
      level: "Beginer Level Course",
      post: "Internship",
      bag: "/images/briefcase.png",
      company: "Google",
      calender: "/images/calendar.png",
      period: "Internship (10 Months +)",
    },
  ];
  const router = useRouter();
  const { id } = router.query;
  const internshipDetails = data.find((item) => item.id === parseInt(id));

  if (!internshipDetails) {
    return <p>Review not found</p>;
  }
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center pt-32 2xl:pt-48">
          <h1 className="text-[32px] md:text-[40px] font-[700] text-white">
            Internship Details
          </h1>
          <p className="text-white text-center font-[500] text-[18px]">
            Company reviews, Course review, Internship
          </p>
        </div>
      </Layout>
      <div className="bg-[#F0EBCE38] py-10">
        <Wrapper>
          <div className="w-full p-5 border border-[#d0d0d0] rounded-md bg-white">
            <div className="flex gap-3">
              <Image
                src={internshipDetails.img}
                width={500}
                height={500}
                alt=""
                className="w-[97px] h-[97px] object-cover rounded-md"
              />
              <div className="flex flex-col gap-2  md:gap-2">
                <p className="text-[24px] font-[600]">
                  {internshipDetails.title}
                </p>
                <div className="gap-1 flex ">
                  <MdOutlineBusinessCenter size={22} className="text-[#777]" />
                  <p className="text-[14px] text-[#777] font-[400]">
                    {internshipDetails.company}
                  </p>
                </div>
                <div className="gap-1 flex items-center">
                  <IoCalendarOutline size={22} className="text-[#777]" />
                  <p className="text-[12px] md:text-[14px] text-[#777] font-[400]">
                    {internshipDetails.period}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-5">
              <div className="flex flex-col  items-start gap-3">
                <div className="gap-1 flex mt-5">
                  <IoCalendarOutline size={22} className="text-[#777]" />
                  <p className="text-[14px] text-[#777] font-[400]">
                    Start Date
                  </p>
                </div>
                <p className="font-500">Immediatly</p>
              </div>
              <div className="flex flex-col  items-start gap-3">
                <div className="gap-1 flex mt-5">
                  <IoCalendarOutline size={22} className="text-[#777]" />
                  <p className="text-[14px] text-[#777] font-[400]">
                    Duration{" "}
                  </p>
                </div>
                <p className="font-500">3 Months</p>
              </div>
              <div className="flex flex-col  items-start gap-3">
                <div className="gap-1 flex mt-5">
                  <IoCalendarOutline size={22} className="text-[#777]" />
                  <p className="text-[14px] text-[#777] font-[400]">Stipend </p>
                </div>
                <p className="font-500">$1200 / month</p>
              </div>
              <div className="flex flex-col  items-start gap-3">
                <div className="gap-1 flex mt-5">
                  <IoCalendarOutline size={22} className="text-[#777]" />
                  <p className="text-[14px] text-[#777] font-[400]">
                    Application last date{" "}
                  </p>
                </div>
                <p className="font-500">09 Aug, 2023</p>
              </div>
            </div>
          </div>
          <div className="w-full px-5 md:px-10 py-5 mt-7 border border-[#d0d0d0] rounded-md bg-white">
            <p className="text-[24px] font-[600]">Job Description:</p>
            <p className="py-5 text-[#777]">
              As a Graphic Designer, you will play a pivotal role in translating
              ideas and concepts into visually engaging and compelling designs.
              Working closely with our creative team, you will be responsible
              for creating graphics, illustrations, and layouts that resonate
              with our target audience and elevate our brand presence. Your eye
              for detail, creativity, and ability to think critically will be
              essential in delivering high-quality design solutions across
              various digital and print platforms.
            </p>
            <p className="text-[24px] font-[600]">Responsibilities: </p>
            <ul className="list-disc text-[#777] p-5 flex flex-col gap-2">
              <li>
                Collaborate with the creative team to understand project
                requirements and objectives.
              </li>
              <li>
                Conceptualize and develop creative designs, illustrations, and
                layouts for marketing materials, websites, social media, and
                other promotional channels.
              </li>
              <li>
                Create visually stunning presentations, infographics, and
                multimedia content that effectively communicate complex
                information.
              </li>
              <li>
                Develop and maintain brand guidelines to ensure consistent
                representation of our brand identity.
              </li>
              <li>
                Stay updated on design trends, industry standards, and emerging
                technologies to continuously improve design quality and
                innovation.
              </li>
              <li>
                Provide design support for various departments, including
                marketing, product development, and sales.
              </li>
              <li>
                Work with external vendors and printers to ensure the quality
                and timely production of print materials.
              </li>
              <li>
                Take ownership of projects from conception to final delivery,
                meeting deadlines and project objectives.
              </li>
              <li>
                Collaborate with cross-functional teams to understand user needs
                and incorporate user-centered design principles into projects.
              </li>
              <li>
                Perform design revisions based on feedback and user testing
                results.
              </li>
            </ul>
            <p className="text-[24px] font-[600]">Requirements:</p>
            <ul className="list-disc text-[#777] p-5 flex flex-col gap-2">
              <li>
                Bachelor's degree or equivalent in Graphic Design, Visual
                Communication, or related field.
              </li>
              <li>
                Proven experience (at least 2-3 years) as a Graphic Designer or
                in a similar role.
              </li>
              <li>
                Proficient in graphic design software such as Adobe Creative
                Suite (Photoshop, Illustrator, InDesign) and other relevant
                tools.
              </li>
              <li>
                Strong understanding of design principles, typography, color
                theory, and layout techniques.
              </li>
              <li>
                Portfolio showcasing a diverse range of creative projects,
                demonstrating strong design aesthetics and problem-solving
                skills.
              </li>
              <li>
                Solid knowledge of digital design and experience creating web
                graphics, social media visuals, and other digital assets.
              </li>
              <li>
                Familiarity with print production processes and the ability to
                prepare print-ready files.
              </li>
              <li>
                Ability to work effectively both independently and in a
                collaborative team environment.
              </li>
              <li>
                Excellent communication skills and the ability to present design
                ideas clearly and persuasively.
              </li>
              <li>
                Strong attention to detail and the ability to manage multiple
                projects simultaneously.
              </li>
              <li>
                Demonstrated ability to work under tight deadlines and adapt to
                changing priorities.{" "}
              </li>
              <li>
                A proactive approach to learning and staying updated with
                industry trends and best practices{" "}
              </li>
            </ul>
            <p className="text-[24px] font-[600]">Preferred Qualifications:</p>
            <ul className="list-disc text-[#777] p-5 flex flex-col gap-2">
              <li>
                Experience in UX/UI design and prototyping tools (e.g., Sketch,
                Adobe XD, Figma).
              </li>
              <li>
                Knowledge of motion graphics and video editing tools (e.g.,
                After Effects, Premiere Pro).
              </li>
              <li>
                Familiarity with HTML, CSS, and responsive design principles.
              </li>
              <li>
                Experience in designing for mobile applications and
                understanding mobile design trends.
              </li>
              <li>
                Understanding of SEO and its implications on design choices.
              </li>
              <li>Previous experience in branding and logo design projects.</li>
              <li>
                Note: Remember to tailor the job description and requirements to
                the specific needs of your organization and the level of
                expertise you are seeking in a Graphic Designer.
              </li>
            </ul>
            <p className="text-[24px] font-[600]">Who can apply:</p>
            <ul className="list-disc text-[#777] p-5 flex flex-col gap-2">
              <li>Only those candidates can apply who: </li>
              <li>1. are available for full time (in-office) internship </li>
              <li>
                2. can start the internship between 4th Aug'23 and 8th Sep'23{" "}
              </li>
              <li>3. are available for duration of 6 months </li>
              <li>4. have relevant skills and interests </li>
              <li>
                * Women wanting to start/restart their career can also apply.{" "}
              </li>
            </ul>
            <div className="py-10">
                    <button className="bg-primary-text-color font-[500] text-black rounded-md w-[173px] h-[50px]">
                      Apply Now
                    </button>
                  </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
