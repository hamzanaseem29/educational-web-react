import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Card from "./CompaniesCard";
import CompaniesCard from "./CompaniesCard";

const Companies = () => {
    const [selected, setSelected] = useState(0);
    const [selectedTag, setSelectedTag] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const [showDropdown, setShowDropdown] = useState(true);

    const [suggestedCities, setSuggestedCities] = useState([
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Kolkata",
        "Chennai",
    ]);
    const handleButtonClick = (index) => {
        setSelected(index);
    };
    const initialTags = [
        "Computer Classes",
        "Classes",
        "Cooking Class",
        "English Language",
        "Web Designing Course",
        "UI/UX",
    ];
    const [tags, setTags] = useState(initialTags);
    const removeTag = (tagToRemove) => {
        const newTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(newTags);
    };
    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setSearchCity(inputText);
        setShowDropdown(inputText.length > 0); // Show dropdown only if there is input
    };

    const handleCityClick = (city) => {
        setSearchCity(city);
        setShowDropdown(false); // Close the dropdown when a city is selected
    };
    const filteredCities = suggestedCities.filter((city) =>
        city.toLowerCase().includes(searchCity.toLowerCase())
    );
    return (
        <div>
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-[24px] md:text-[40px] font-[700] mt-20 mb-10">
                    Top Edutech Companies In India
                </h1>
            </div>
            {/* parent  */}
            <div className="flex md:flex-row flex-col justify-start items-start gap-10">
                {/* sidebar */}
                <div className="flex flex-col  basis-[100%] md:basis-[40%]  md:mb-10 ">
                    <div className="p-5 bg-white rounded-md border border-[#D0D0D0]  w-full">
                        <p className="text-[18px] font-[500]">Rating</p>
                        <div className="mt-5 grid  grid-cols-4 h-[56px] items-center justify-center border border-[#868088] rounded-md">
                            <button
                                className={`flex items-center justify-center gap-2 font-[500] border-r border-black h-full ${selected === 0 ? "bg-light-green rounded-l-md" : ""
                                    }`}
                                onClick={() => handleButtonClick(0)}
                            >
                                Any
                            </button>
                            <button
                                className={`flex items-center justify-center gap-2 font-[500] border-r border-black h-full ${selected === 1 ? "bg-light-green " : ""
                                    }`}
                                onClick={() => handleButtonClick(1)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M9.23915 1.34164C9.47864 0.604593 10.5214 0.604592 10.7608 1.34164L12.5146 6.73901C12.6217 7.06863 12.9288 7.2918 13.2754 7.2918H18.9505C19.7255 7.2918 20.0477 8.28349 19.4208 8.73901L14.8295 12.0748C14.5491 12.2785 14.4318 12.6396 14.5389 12.9692L16.2926 18.3666C16.5321 19.1036 15.6885 19.7165 15.0615 19.261L10.4702 15.9252C10.1898 15.7215 9.81016 15.7215 9.52977 15.9252L4.9385 19.261C4.31153 19.7165 3.46794 19.1036 3.70742 18.3666L5.46113 12.9692C5.56823 12.6396 5.45091 12.2785 5.17052 12.0748L0.579241 8.73901C-0.0477297 8.28349 0.27449 7.2918 1.04947 7.2918H6.7246C7.07118 7.2918 7.37834 7.06863 7.48544 6.73901L9.23915 1.34164Z"
                                        fill="#67E776"
                                    />
                                </svg>
                                4.5
                            </button>
                            <button
                                className={`flex items-center justify-center gap-2 font-[500] border-r border-black h-full ${selected === 2 ? "bg-light-green" : ""
                                    }`}
                                onClick={() => handleButtonClick(2)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M9.23915 1.34164C9.47864 0.604593 10.5214 0.604592 10.7608 1.34164L12.5146 6.73901C12.6217 7.06863 12.9288 7.2918 13.2754 7.2918H18.9505C19.7255 7.2918 20.0477 8.28349 19.4208 8.73901L14.8295 12.0748C14.5491 12.2785 14.4318 12.6396 14.5389 12.9692L16.2926 18.3666C16.5321 19.1036 15.6885 19.7165 15.0615 19.261L10.4702 15.9252C10.1898 15.7215 9.81016 15.7215 9.52977 15.9252L4.9385 19.261C4.31153 19.7165 3.46794 19.1036 3.70742 18.3666L5.46113 12.9692C5.56823 12.6396 5.45091 12.2785 5.17052 12.0748L0.579241 8.73901C-0.0477297 8.28349 0.27449 7.2918 1.04947 7.2918H6.7246C7.07118 7.2918 7.37834 7.06863 7.48544 6.73901L9.23915 1.34164Z"
                                        fill="#67E776"
                                    />
                                </svg>
                                4.0+
                            </button>
                            <button
                                className={`flex items-center justify-center gap-2 font-[500] h-full ${selected === 3 ? "bg-light-green" : "rounded-r-md"
                                    }`}
                                onClick={() => handleButtonClick(3)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M9.23915 1.34164C9.47864 0.604593 10.5214 0.604592 10.7608 1.34164L12.5146 6.73901C12.6217 7.06863 12.9288 7.2918 13.2754 7.2918H18.9505C19.7255 7.2918 20.0477 8.28349 19.4208 8.73901L14.8295 12.0748C14.5491 12.2785 14.4318 12.6396 14.5389 12.9692L16.2926 18.3666C16.5321 19.1036 15.6885 19.7165 15.0615 19.261L10.4702 15.9252C10.1898 15.7215 9.81016 15.7215 9.52977 15.9252L4.9385 19.261C4.31153 19.7165 3.46794 19.1036 3.70742 18.3666L5.46113 12.9692C5.56823 12.6396 5.45091 12.2785 5.17052 12.0748L0.579241 8.73901C-0.0477297 8.28349 0.27449 7.2918 1.04947 7.2918H6.7246C7.07118 7.2918 7.37834 7.06863 7.48544 6.73901L9.23915 1.34164Z"
                                        fill="#67E776"
                                    />
                                </svg>
                                3.0+
                            </button>
                        </div>
                        <p className="mt-7 mb-2 text-[18px] font-[500]">Location</p>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                                        fill="#777777"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="block w-full h-[56px] pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-black focus:outline-none focus:ring-primary-text-color focus:border-primary-text-color sm:text-sm"
                                placeholder="City or Zip Code"
                                value={searchCity}
                                onChange={handleInputChange}
                            />
                            {showDropdown &&
                                suggestedCities.length > 0 &&
                                searchCity.length > 0 && (
                                    <ul className="absolute z-10 mt-1 py-1 w-full bg-white  rounded-md shadow-lg">
                                        {suggestedCities
                                            .filter((city) =>
                                                city.toLowerCase().includes(searchCity.toLowerCase())
                                            )
                                            .map((city, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 cursor-pointer hover:bg-light-green"
                                                    onClick={() => handleCityClick(city)}
                                                >
                                                    {city}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            {showDropdown &&
                                filteredCities.length === 0 &&
                                searchCity.length > 0 && (
                                    <p className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg px-4 py-4">
                                        {searchCity} is not available
                                    </p>
                                )}
                        </div>
                        <p className="border-b pb-3 mt-7 mb-2 text-[18px] font-[500]">
                            Company Status
                        </p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#777] ">Startup</p>
                            <input
                                type="checkbox"
                                className="w-6 h-6 border-gray-300 focus:outline-none  rounded-md"
                            />
                        </div>
                        <p className="border-b py-3"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#777] ">
                                Private Sector
                            </p>
                            <input
                                type="checkbox"
                                className="w-6 h-6 border-gray-300 focus:outline-none  rounded-md"
                            />
                        </div>
                        <p className="border-b py-3"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#777] ">Government</p>
                            <input
                                type="checkbox"
                                className="w-6 h-6 border-gray-300 focus:outline-none  rounded-md"
                            />
                        </div>
                        <p className="border-b py-3"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#777] ">
                                Indian Unicorn
                            </p>
                            <input
                                type="checkbox"
                                className="w-6 h-6 border-gray-300 focus:outline-none  rounded-md"
                            />
                        </div>
                        <p className="border-b py-3"></p>
                        <p className="pb-3 mt-7 mb-2 text-[18px] font-[500]">Courses</p>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-7 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                                        fill="#777777"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="block w-full h-[56px] pl-14 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-black focus:outline-none focus:ring-primary-text-color focus:border-primary-text-color sm:text-sm"
                                placeholder="Search Courses"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap gap-4 my-5">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedTag(tag) || setSearchText(tag)}
                                    className={`cursor-pointer flex items-center py-[6px] border-[#868088] md:py-3 px-[6px] md:px-3 gap-2 md:gap-3 border rounded-md ${selectedTag === tag ? "bg-light-green" : ""
                                        }`}
                                >
                                    {tag}
                                    <span className="cross-icon" onClick={() => removeTag(tag)}>
                                        <RxCross2 size={20} />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-5 bg-white rounded-md border mt-10 w-full">
                        <p className="pb-3 pt-3 mb-2 text-[18px] font-[500]">
                            Company Status
                        </p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Colleges & Universties
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Education Services
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Language Learning
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">Music</p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                School & High School
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Specials School
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Colleges & Universties
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Colleges & Universties
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-[16px] font-[400] text-[#2C272E] ">
                                Colleges & Universties
                            </p>
                            <p>566</p>
                        </div>
                        <p className="border-b py-[6px]"></p>
                    </div>
                </div>
                {/* cards */}
                <div className="flex  basis-[100%] md:basis-[70%]">
                    <CompaniesCard/>
                </div>
            </div>
        </div>
    );
};

export default Companies;
