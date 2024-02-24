import React from "react";

const Book = () => {
    return (
        <div className="py-20 justify-center flex ">
            <div className="bg-white w-full md:w-[1028px]  rounded-[10px] border p-5 md:p-10">
                <h1 className="text-black font-[700] text-center text-[24px] md:text-[40px]">
                    Book a Demo
                </h1>
                <p className="pt-3 pb-10 text-[16px] font-[500] text-center">
                    Please provide the following information to place a demo.
                </p>
                <div>
                    <form action="save">
                        <div className="flex md:flex-row flex-col gap-5 md:gap-10 md:items-center">
                            <label htmlFor="firstName">
                                <p className="text-[16px] font-[400] py-2">First Name</p>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="pl-3 border focus:outline-none focus:ring-1 ring-primary-text-color rounded-md h-[40px] w-full md:h-[50px] md:w-[450px]"
                                />
                            </label>
                            <label htmlFor="lastName">
                                <p className="text-[16px] font-[400] pb-2">Last Name</p>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="pl-3 border focus:outline-none focus:ring-1 ring-primary-text-color rounded-md h-[40px] w-full md:h-[50px] md:w-[450px]"
                                />
                            </label>
                        </div>
                        <div className="flex md:flex-row flex-col mt-3 md:mt-4 gap-5 md:gap-10 md:items-center">
                            <label htmlFor="email">
                                <p className="text-[16px] font-[400] py-2">Email Address</p>
                                <input
                                    required
                                    type="email"
                                    placeholder="EJohndoe@gmail.com"
                                    className="pl-3 border focus:outline-none focus:ring-1 ring-primary-text-color rounded-md h-[40px] w-full md:h-[50px] md:w-[450px]"
                                />
                            </label>
                            <label htmlFor="lastName">
                                <p className="text-[16px] font-[400] pb-2">Phone Number</p>
                                <input
                                    required
                                    type="number"
                                    placeholder="+91 3455666 7"
                                    className="pl-3 border focus:outline-none focus:ring-1 ring-primary-text-color rounded-md h-[40px] w-full md:h-[50px] md:w-[450px]"
                                />
                            </label>
                        </div>

                        <div className="flex gap-3 md:gap-10 w-full mt-7">

                            <label className="w-full">
                                <p className="text-[16px] font-[400] pb-2">Company</p>
                                <select
                                    name="product"
                                    required
                                    className=" pl-3 border placeholder-[#777]  w-full h-[40px] md:h-[50px] focus:outline-none focus:ring-1 ring-primary-text-color rounded-md"
                                >
                                    <option value="1" >Company Name</option>
                                    <option value="2">Google</option>
                                    <option value="3">Tata</option>
                                </select>
                            </label>
                            <label className="w-full">
                                <p className="text-[16px] font-[400] pb-2">Course</p>
                                <select
                                    name="product"
                                    required
                                    className=" pl-3 border placeholder-[#777]  w-full h-[40px] md:h-[50px] focus:outline-none focus:ring-1 ring-primary-text-color rounded-md"
                                >
                                    <option value="1" >Marketing</option>
                                    <option value="2">Web Design</option>
                                    <option value="3">App Development</option>
                                </select>
                            </label>


                        </div>
                        <div className="flex w-full mt-7">
                            <label htmlFor="comment" className="w-full">
                                <p className="text-[16px] font-[400] pb-2">Comment</p>
                                <input
                                    required
                                    type="text"
                                    placeholder="Write comment.."
                                    className="pl-3 border md:pb-10 focus:outline-none focus:ring-1  ring-primary-text-color rounded-md h-[40px] w-full md:h-[100px]"
                                />
                            </label>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="mt-10 bg-primary-text-color text-[16px] md:text-[18px] text-black rounded-md font-[500] w-[150px] md:w-[171px] h-[50px]">
                                Submit
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;
