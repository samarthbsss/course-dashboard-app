import React from 'react';
import { MdQueueMusic } from "react-icons/md";
import music from '../assests/ic_outline-queue-music.svg'
import img from '../assests/mdi_view-dashboard-outline.svg'
import logout from '../assests/mdi_logout.svg'
import logo from '../assests/Logo.png'

const Sidebar = () => {
  return (
    // <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white text-grey shadow-lg">
    //     <MdQueueMusic/>

    //   </div>
    <div className="top-0 left-0 w-[90px] h-screen px-3 py-2.5 bg-white border-r border-gray-300 flex-col justify-start items-center gap-10 ">

      <div className="self-stretch flex-col justify-start items-center flex m-b-2">
        <img className="w-12 h-12 relative" src={logo} />
      </div>
      <div className="self-stretch h-[116px] flex-col justify-start items-center gap-4 flex m">
        <div className="self-stretch h-[50px] py-[5px] bg-red-100 rounded-md flex-col justify-start items-center flex">
          <img className="w-6 h-6 relative" src={img} alt='home' />
          <div className="text-fuchsia-800 text-xs font-normal font-['Nunito Sans']">Home</div>
        </div>
        <div className="self-stretch h-[50px] px-1 py-[5px] bg-gray-200 rounded-md flex-col justify-start items-center flex">
          <img className="w-6 h-6 relative" src={music} />
          <div className="text-zinc-500 text-xs font-normal font-['Nunito Sans']">Courses</div>
        </div>
      </div>

      <div className="w-[72px] h-[744px] flex-col justify-end items-center gap-4 inline-flex">
        <div className="self-stretch h-[50px] py-[5px] rounded-md flex-col justify-start items-center flex">
          <img className="w-6 h-6 relative" src={logout}/>
          <div className="text-zinc-500 text-xs font-normal font-['Nunito Sans']">Logout</div>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
