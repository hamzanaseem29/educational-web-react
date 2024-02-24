import React from "react";

const Setting = () => {
    return (
        <div className="py-20 justify-center flex ">
            <div className="bg-white w-full md:w-[1028px]  rounded-[10px] border p-5 md:p-10">
                <h1 className="text-black font-[500] text-[24px] md:text-[40px]">
                    Personal Details
                </h1>
                <p className="py-5 text-[16px] font-[400]">
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
                        <div class="flex items-center justify-center w-full mt-5">
                            <label
                                style={{
                                    boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    border: "1px dashed rgba(78, 29, 154, 0.88)",
                                }}
                                for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-[187px] rounded-lg cursor-pointer bg-white "
                            >
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="47"
                                        viewBox="0 0 50 47"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M25 0C20.8758 0.0129673 16.8921 1.50442 13.7688 4.20493C11.375 6.27293 9.64062 8.9676 9.19375 11.6717C3.95625 12.831 0 17.4057 0 22.9297C0 29.3468 5.3375 34.4667 11.8156 34.4667H23.4375V17.8819L16.7313 24.6092C16.4379 24.9034 16.0399 25.0686 15.625 25.0686C15.2101 25.0686 14.8121 24.9034 14.5187 24.6092C14.2254 24.315 14.0605 23.916 14.0605 23.5C14.0605 23.084 14.2254 22.685 14.5187 22.3908L23.8937 12.9908C24.0389 12.8449 24.2113 12.7291 24.4011 12.6502C24.591 12.5712 24.7945 12.5305 25 12.5305C25.2055 12.5305 25.409 12.5712 25.5989 12.6502C25.7887 12.7291 25.9611 12.8449 26.1063 12.9908L35.4813 22.3908C35.7746 22.685 35.9395 23.084 35.9395 23.5C35.9395 23.916 35.7746 24.315 35.4813 24.6092C35.1879 24.9034 34.7899 25.0686 34.375 25.0686C33.9601 25.0686 33.5621 24.9034 33.2687 24.6092L26.5625 17.8819V34.4667H39.65C45.3187 34.4667 50 29.986 50 24.3554C50 19.2293 46.1188 15.0525 41.1438 14.3475C40.3844 6.26353 33.4062 0 25 0ZM23.4375 45.4333V34.4667H26.5625V45.4333C26.5625 45.8488 26.3979 46.2473 26.1049 46.5411C25.8118 46.8349 25.4144 47 25 47C24.5856 47 24.1882 46.8349 23.8951 46.5411C23.6021 46.2473 23.4375 45.8488 23.4375 45.4333Z"
                                            fill="#4E1D9A"
                                            fill-opacity="0.13"
                                        />
                                    </svg>
                                    <p class="mb-2 mt-4 text-[16px] md:font-[500]">
                                        Upload an Image
                                    </p>
                                    <p class="text-[16px] text-[#777777]">
                                        Drag and drop image here
                                    </p>
                                </div>
                                <input required id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                        <div className="flex w-full mt-5">

                            <label className="w-full">
                                <p className="text-[16px] font-[400] pb-2">Notification Language</p>
                                <select
                                    name="product"
                                    required
                                    className=" pl-3 border placeholder-[#777]  w-full h-[40px] md:h-[50px] focus:outline-none focus:ring-1 ring-primary-text-color rounded-md"
                                >
                                    <option value="1" >English</option>
                                    <option value="2">German</option>
                                    <option value="3">Arabic</option>
                                </select>
                            </label>


                        </div>
                        <div className="flex md:flex-row flex-col gap-3 md:gap-10 md:items-center mt-5">
                            <div>
                                <p className="font-[400px]">
                                    Reports
                                </p>
                                <div className="flex items-center gap-2 my-2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <p className="text-[#777]">Weekly Summry</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-[400px]">
                                    New Response
                                </p>
                                <div className="flex items-center gap-2 my-2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <p className="text-[#777]">New Response Summry</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-[400px]">
                                    All Notifications
                                </p>
                                <div className="flex items-center gap-2 my-2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <p className="text-[#777]">New Response Summry</p>
                                </div>
                            </div>

                        </div>
                        <button className="mt-10 bg-primary-text-color text-black rounded-md font-[500] w-[171px] h-[50px]">
                            Save
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Setting;
