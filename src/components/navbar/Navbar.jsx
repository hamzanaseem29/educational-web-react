"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import logo from "../../../public/images/edlogo.svg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { useAuth } from "../../../context/AuthProvider";

const Navbar = () => {
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [nav, setNav] = useState(false);
  const { isLoggedIn, login, logout } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  //   const dropdownRef = useRef(null);

  //   useEffect(() => {
  //     const handleOutsideClick = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setDropdownOpen(false);
  //       }
  //     };
  //     window.addEventListener("click", handleOutsideClick);

  //     return () => {
  //       window.removeEventListener("click", handleOutsideClick);
  //     };
  //   }, []);

  const redirectIfNotLoggedIn = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  };
  const handlePostReviewClick = () => {
    if (!isLoggedIn) {
      console.log("User not logged in");
      redirectIfNotLoggedIn();
    } else {
      console.log("User logged in");
      router.push("/post-review");
    }
  };
  const handlePostReviewClick2 = () => {
    if (!isLoggedIn) {
      console.log("User not logged in");
      redirectIfNotLoggedIn();
    } else {
      console.log("User logged in");
      router.push("/book-demo");
    }
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    logout();
  };
  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };


  return (
    <div className="my-6">
      <Wrapper>
        {/* parent  */}
        <div className="flex justify-between items-center">
          {/* left  */}
          <div className="flex">
            {/* logo  */}
            <Image
              className="cursor-pointer"
              onClick={() => router.push("/")}
              src={logo}
              alt="logo"
              width={150}
              height={150}
            ></Image>
          </div>
          {/* right */}
          <div className="hidden md:hidden xl:flex 2xl:flex items-center gap-10">
            {/* nav lis */}
            <div>
              <ul className="flex space-x-12 text-base font-[500]">
                <li
                  onClick={() => router.push("/companies")}
                  className=" cursor-pointer"
                >
                  Companies
                </li>
                <li
                  onClick={() => router.push("/best-courses")}
                  className=" cursor-pointer"
                >
                  Course
                </li>
                <li
                  onClick={handlePostReviewClick2}
                  className=" cursor-pointer"
                >
                  Book a demo
                </li>
                <li
                  onClick={() => router.push("/internships")}
                  className=" cursor-pointer"
                >
                  Internships
                </li>
              </ul>
            </div>
            {/* notfication */}
            <div  className="flex justify-center items-center relative">
              <button onClick={toggleDropdown2}>
                <Image
                  src={"/images/bell.svg"}
                  alt=""
                  width={300}
                  height={300}
                  className="w-[23px]"
                />
                <p className="w-[15px] border border-white  -top-[6px] left-[6px] h-[15px] rounded-full bg-primary-text-color absolute"></p>
              </button>
              <div >
                {isDropdownOpen2 && (
                  <div className="absolute bg-white top-[100%] overflow-hidden w-[243px] ml-[-13rem] py-3 z-10  mt-7  rounded-[10px] shadow-xl">
                    <div className="flex flex-col justify-start items-start  gap-x-3">
                      <div
                        className="flex justify-between mt-[-9px] w-full py-5 px-3 rounded-t-md items-center"
                        style={{ background: "rgba(250, 240, 215, 0.39)" }}
                      >
                        Notifications
                        <button onClick={toggleDropdown2}>
                          <RxCross1 size={20} />
                        </button>
                      </div>
                      <div className="text-black flex items-start gap-3 mx-3 mt-5 text-[14px] font-[500]  transition-all duration-200 ease-in">
                        <Image
                          src={"/images/noti.jpeg"}
                          width={200}
                          height={300}
                          className="w-[50px] h-[32px] rounded-full object-cover"
                        />
                        <div className="flex flex-col text-left">
                          <p className="text-black text-[14px] font-[500px]">
                            Chriss Sacca
                          </p>
                          <p className="text-[#777] font-[400] text-[13px]">
                            Review on Course
                          </p>
                          <p className="text-[#3C5ED7] font-[400] text-[12px]">
                            “Really nice course,love the way they explain.”
                          </p>
                        </div>
                      </div>
                      <div className="text-black flex items-start gap-3 mx-3 my-5 text-[14px] font-[500]  transition-all duration-200 ease-in">
                        <Image
                          src={"/images/noti1.jpeg"}
                          width={200}
                          height={300}
                          className="w-[32px] h-[32px] rounded-full object-cover"
                        />
                        <div className="flex flex-col text-left">
                          <p className="text-black text-[14px] font-[500px]">
                            Chriss Sacca
                          </p>
                          <p className="text-[#777] font-[400] text-[13px]">
                            Review on Course
                          </p>
                          <p className="text-[#3C5ED7] font-[400] text-[12px]">
                            “Really nice course,love the way they explain.”
                          </p>
                        </div>
                      </div>
                      <button
                        className="flex  gap-4 mb-[-1rem] w-full py-4 px-3 rounded-t-md items-center"
                        style={{ background: "rgba(250, 240, 215, 0.39)" }}
                      >
                        <IoArrowForwardCircleOutline
                          size={20}
                          className="text-[#3C5ED7]"
                        />

                        <p className="font-[500]">View More</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* user  */}
            <div className="relative" >
              <button onClick={toggleDropdown}>
                <Image
                  src={isLoggedIn ? "/images/men.jpeg" : "/images/user.png"}
                  alt=""
                  width={200}
                  height={200}
                  className={`w-[43px] h-[43px] rounded-full ${isLoggedIn
                    ? "border-primary-text-color"
                    : "border-transparent"
                    }  border-2`}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    objectFit: "contain", // You can use other values like 'cover', 'contain', etc.
                  }}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white w-[160px] ml-[-7rem] mt-4 py-3 z-10 rounded-[6px] shadow-xl">
                  <div className="flex flex-col justify-start border-t border-primary-text-color items-start ">
                    {isLoggedIn ? (
                      <>
                        <div className="transition-all w-full duration-200  mt-3 ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                          <Link href={"/review"}>
                            <button
                              onClick={toggleDropdown}
                              className="text-black text-[14px] font-[500] py-2  transition-all duration-200 ease-in px-3"
                            >
                              My Review
                            </button>
                          </Link>
                        </div>
                        <div className="transition-all w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                          <Link href={"/applied-internship"}>
                            <button
                              onClick={toggleDropdown}
                              className="text-black text-[14px] py-2 font-[500]  transition-all duration-200 ease-in px-3"
                            >
                              Internship Applied
                            </button>
                          </Link>
                        </div>
                        <div className="transition-all w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                          <Link href={"/setting"}>
                            <button
                              onClick={toggleDropdown}
                              className="text-black text-[14px] py-2 font-[500]  transition-all duration-200 ease-in px-3"
                            >
                              Setting
                            </button>
                          </Link>
                        </div>
                        <div onClick={toggleDropdown} className="transition-all w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                          <button
                            onClick={ handleLogout}
                            className="text-black text-[14px] py-2 font-[500]  transition-all duration-200 ease-in px-3"
                          >
                            My Logout
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          onClick={toggleDropdown}
                          className="transition-all  mt-3 w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple"
                        >
                          <button
                            onClick={() => router.push("/login")}
                            className="text-black text-[14px]  py-2 font-[500]  transition-all duration-200 ease-in px-3"
                          >
                            Login
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <button
                onClick={handlePostReviewClick}
                className="bg-primary-text-color hover:bg-transparent border border-transparent hover:border-primary-text-color hover:text-primary-text-color transition-all ease-linear duration-300  text-black rounded-md w-[173px] h-[50px]"
              >
                Post a Review
              </button>
            </div>
          </div>
          {/* mobile menu  */}
          <div className="flex justify-center items-center relative  md:hidden xl:hidden">
            <button onClick={toggleDropdown2}>
              <Image
                src={"/images/bell.svg"}
                alt=""
                width={300}
                height={300}
                className="w-[23px]"
              />
              <p className="w-[15px] border border-white  mt-[-30px] left-[6px] h-[15px] rounded-full bg-primary-text-color absolute"></p>
            </button>
            {isDropdownOpen2 && (
              <div className=" absolute bg-white  top-[100%] overflow-hidden w-[243px] ml-[-10.5rem] py-3 z-10  mt-5  rounded-[6px] shadow-xl ">
                <div className="flex flex-col  justify-start items-start  gap-x-3">
                  <div
                    className="flex justify-between mt-[-9px] w-full py-5 px-3 rounded-t-md items-center"
                    style={{ background: "rgba(250, 240, 215, 0.39)" }}
                  >
                    Notifications
                    <button onClick={toggleDropdown2}>
                      <RxCross1 size={20} />
                    </button>
                  </div>
                  <div className="text-black flex items-start gap-3 mx-3 mt-5 text-[14px] font-[500]  transition-all duration-200 ease-in">
                    <Image
                      src={"/images/noti.jpeg"}
                      width={200}
                      height={300}
                      className="w-[50px] h-[32px] rounded-full object-cover"
                    />
                    <div className="flex flex-col text-left">
                      <p className="text-black text-[14px] font-[500px]">
                        Chriss Sacca
                      </p>
                      <p className="text-[#777] font-[400] text-[13px]">
                        Review on Course
                      </p>
                      <p className="text-[#3C5ED7] font-[400] text-[12px]">
                        “Really nice course,love the way they explain.”
                      </p>
                    </div>
                  </div>
                  <div className="text-black flex items-start gap-3 mx-3 my-5 text-[14px] font-[500]  transition-all duration-200 ease-in">
                    <Image
                      src={"/images/noti1.jpeg"}
                      width={200}
                      height={300}
                      className="w-[32px] h-[32px] rounded-full object-cover"
                    />
                    <div className="flex flex-col text-left">
                      <p className="text-black text-[14px] font-[500px]">
                        Chriss Sacca
                      </p>
                      <p className="text-[#777] font-[400] text-[13px]">
                        Review on Course
                      </p>
                      <p className="text-[#3C5ED7] font-[400] text-[12px]">
                        “Really nice course,love the way they explain.”
                      </p>
                    </div>
                  </div>
                  <button
                    className="flex  gap-4 mb-[-1rem] w-full py-4 px-3 rounded-t-md items-center"
                    style={{ background: "rgba(250, 240, 215, 0.39)" }}
                  >
                    <IoArrowForwardCircleOutline
                      size={20}
                      className="text-[#3C5ED7]"
                    />
                    <p className="font-[500]">View More</p>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={handleNavbar}
            className=" sm:block md:block xl:hidden 2xl:hidden flex items-center   cursor-pointer z-50"
          >
            {nav ? (
              <RxCross1 size={35} className="text-primary-purple-text " />
            ) : (
              <CgMenuRightAlt size={35} className="text-primary-purple-text " />
            )}
          </div>
          <div
            className={
              nav
                ? "sm:block md:block xl:hidden 2xl:hidden fixed top-0 right-0 shadow-md  bottom-0 flex justify-start items-start py-20 px-5 w-72 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-0"
                : "sm:block md:block xl:hidden 2xl:hidden fixed top-0 right-0 shadow-md  bottom-0 flex justify-start items-start py-20 px-5 w-72 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-full"
            }
          >
            <div className="flex flex-row-reverse  absolute mt-[-3.5rem]">
              {/* user  */}
              <div className="relative" >
                <button onClick={toggleDropdown}>
                  <Image
                    src={isLoggedIn ? "/images/men.jpeg" : "/images/user.png"}
                    alt=""
                    width={200}
                    height={200}
                    className={`w-[43px] h-[43px] rounded-full ${isLoggedIn
                      ? "border-primary-text-color"
                      : "border-transparent"
                      }  border-2`}
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      objectFit: "contain", // You can use other values like 'cover', 'contain', etc.
                    }}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-white w-[160px]  mt-4 py-3 z-10 rounded-[6px] shadow-xl">
                    <div className="text-left flex flex-col justify-start border-t border-primary-text-color items-start ">
                      {isLoggedIn ? (
                        <>
                          <div className="transition-all w-full duration-200  mt-3 ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                            <Link href={"/review"}>
                              <div onClick={toggleDropdown}>
                                <button
                                  onClick={closeMenu}
                                  className="text-black text-[14px] font-[500] py-2  transition-all duration-200 ease-in px-3"
                                >
                                  My Review
                                </button>

                              </div>
                            </Link>
                          </div>
                          <div className="transition-all w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                            <Link href={"/applied-internship"}>
                              <div onClick={toggleDropdown}>
                                <button
                                  onClick={closeMenu}
                                  className="text-black text-[14px] font-[500] py-2  transition-all duration-200 ease-in px-3"
                                >
                                  Internship Applied
                                </button>

                              </div>
                            </Link>
                          </div>
                          <div className="transition-all w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                            <Link href={"/setting"}>
                              <div onClick={toggleDropdown}>
                                <button
                                  onClick={closeMenu}
                                  className="text-black text-[14px] font-[500] py-2  transition-all duration-200 ease-in px-3"
                                >
                                  Setting                              </button>

                              </div>
                            </Link>
                          </div>
                          <div className="transition-all w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple">
                            <div onClick={closeMenu}>
                              <div onClick={toggleDropdown}>
                                <button
                                  onClick={handleLogout}
                                  className="text-black text-[14px] font-[500] py-2  transition-all duration-200 ease-in px-3"
                                >
                                  My Logout                             </button>

                              </div>

                            </div>

                          </div>
                        </>
                      ) : (
                        <>
                          <div onClick={closeMenu}>
                            <div
                              onClick={toggleDropdown}
                              className="transition-all  mt-3 w-full duration-200  ease-in hover:bg-[#4E1D9A1A] hover:text-white active:bg-darkpurple"
                            >
                              <button
                                onClick={() => router.push("/login")}
                                className="text-black text-[14px]  py-2 font-[500]  transition-all duration-200 ease-in px-3"
                              >
                                Login
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col basis-[50%]">
                <ul className="flex flex-col justify-start items-start gap-5 text-xl font-[700]">
                  <Link href={"/companies"}>
                    <li onClick={closeMenu} className=" ">
                      Companies
                    </li>
                  </Link>
                  <Link href={"/best-courses"}>
                    <li onClick={closeMenu} className=" ">
                      Course
                    </li>
                  </Link>
                  <Link href={"/book-demo"}>
                    <li onClick={closeMenu} className=" ">
                      Book a demo
                    </li>
                  </Link>
                  <Link href={"/internships"}>
                    <li onClick={closeMenu} className=" ">
                      Internships
                    </li>
                  </Link>
                </ul>
                <div className="flex gap-6 mt-5">
                  <div>
                    <Link href={"/post-review"}>
                      <button onClick={closeMenu} className="bg-primary-text-color text-black rounded-md w-[173px] h-[50px]">
                        Post a Review
                      </button>

                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
