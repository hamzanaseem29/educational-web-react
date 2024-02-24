import React, { useState } from 'react';
import Wrapper from '../../shared/Wrapper';
import { FaUserAlt } from 'react-icons/fa';
import { PiTranslateFill } from 'react-icons/pi';
import { MdBusinessCenter, MdDesignServices, MdOutlineEngineering } from 'react-icons/md';
import Accounting from './Accounting';
import Marketing from './Marketing';
import Engineering from './Engineering';
import Translation from './Translation';
import Graphic from './Graphic';

const Internship = () => {
    const [activeTab, setActiveTab] = useState('Accounting');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
  

    const tabsData = [
        { icon: <FaUserAlt size={20} />, text: 'Accounting', component: <Accounting/> },
        { icon: <MdBusinessCenter size={22} />, text: 'Marketing', component: <Marketing /> },
        { icon: <MdOutlineEngineering size={22} />, text: 'Engineer', component: <Engineering/> },
        { icon: <PiTranslateFill size={22} />, text: 'Translation', component: <Translation /> },
        { icon: <MdDesignServices size={22} />, text: 'Graphic Design', component: <Graphic /> },
    ];

    return (
        <div className='py-20'>
            <Wrapper>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-[32px] md:text-[40px] font-[700]'>Latest internships</h1>
                    <div className='flex items-center justify-center gap-5 flex-wrap my-10'>
                        {tabsData.map((tab, index) => (
                            <button
                                key={index}
                                className={`border h-[50px] min-w-[120px] md:min-w-[165px] rounded-md px-3 text-black flex gap-3 justify-center items-center ${activeTab === tab.text ? 'active-tab text-white' : ''
                                    }`}
                                onClick={() => handleTabClick(tab.text)}
                            >
                                {React.cloneElement(tab.icon, {
                                    className: activeTab === tab.text ? 'text-white' : 'text-primary-purple',
                                })}
                                <p>{tab.text}</p>
                            </button>
                        ))}
                    </div>
                    {/* Render the active component based on the active tab */}
                    
                    {tabsData.find((tab) => tab.text === activeTab)?.component}
                </div>
            </Wrapper>
            <style jsx>{`
        .active-tab {
          background-color: #4E1D9A;
        }
        .text-primary-purple {
          color: #4E1D9A;
        }
        .text-white {
          color: white;
        }
      `}</style>
        </div>
    );
};

export default Internship;
