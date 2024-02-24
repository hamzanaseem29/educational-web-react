import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthProvider";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import Layout from "@/components/shared/Layout";

const index = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        login();
        router.push("/");
    };

    return (
        <div>
            <Layout>
                <div className="flex flex-col  justify-center text-center items-center pt-40 md:pt-48">
                    <h1 className="text-[32px] md:text-[40px]  font-[700] text-white">
                        Login
                    </h1>
                </div>
            </Layout>
            <div className="pt-5 pb-20 bg-[#F0EBCE38]">
                <Wrapper>
                    <div>
                        <div className="mt-20">
                            <div className="flex flex-col justify-center items-center ">
                                <div className="bg-white w-full md:w-[480px] flex flex-col shadow-md text-center py-5 md:px-10 px-5 rounded-[10px]">
                                    <p className="text-[24px] font-[700] py-5 text-primary-text-color">
                                        Welcome Back!
                                    </p>
                                    <p className="text-[16px] md:text-[20px] font-[500] pb-7">
                                        Hey! Enter your details to get sign into your account
                                    </p>

                                    <label
                                        htmlFor="email"
                                        className="text-left mb-3 text-[16px] font-[500] text-[#000000]"
                                    >
                                        {" "}
                                        Email Address*
                                    </label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="JohnDoe78@gmail.com"
                                        className="md:w-[400px] h-[50px] border-gray-300 px-5 mb-5 border focus:outline-primary-text-color rounded-md"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="text-left mb-3 text-[16px] font-[500] text-[#000000] "
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                        {" "}
                                        Password*
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="md:w-[400px] h-[50px] px-5 border-gray-300 border focus:outline-primary-text-color rounded-md"
                                    />
                                    <div className="flex items-center justify-between my-4">
                                        <label htmlFor="remember" className="flex items-center md:text-[16px] text-[14px]">
                                            <input
                                                type="checkbox"
                                                id="remember"
                                                className="mr-2 border border-gray-300 rounded-md  focus:outline-none w-3 h-3 md:h-4 md:w-4"
                                            />
                                            Remember me
                                        </label>
                                        <a
                                            href="#"
                                            className="text-primary-text-color hover:underline text-[14px] md:text-[16px]"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <button
                                        className="w-full bg-primary-text-color text-black py-2 rounded-md "
                                        onClick={handleLogin}
                                    >
                                        Log In
                                    </button>
                                    <p className="text-center mt-16 mb-5">
                                        Don't have an account?{" "}
                                        <Link
                                            href="#"
                                            className="text-primary-text-color hover:underline"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

export default index;
