import React from "react";
import { BsFillBarChartFill, BsListTask } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { GrAnalytics } from "react-icons/gr";
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";
import { MdSchedule } from "react-icons/md";
import { RiGalleryView2 } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="max-w-[20rem] w-[80%] h-[100vh] bg-white shadow-lg">
      <div className="flex flex-col justify-evenly h-full">
        <div className="flex items-center justify-center gap-2">
          <BsFillBarChartFill size={30} className="text-[#52A1AC]" />
          <span>Table Time</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-500 overflow-hidden rounded-full">
            <FcBusinessman size={100} className="" />
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <h1 className="text-2xl font-semibold">Digpal Singh</h1>
            <p className="text-gray-500">digpalsingh18901@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto gap-1">
          <div className="group flex flex-row items-center p-4 gap-2 hover:rounded-3xl hover:font-bold">
            <RiGalleryView2
              size={25}
              className="text-slate-400 group-hover:text-gray-900"
            />
            <span className="font-semibold text-slate-400 group-hover:text-gray-900">
              Dashboard
            </span>
          </div>
          <div className="group flex flex-row items-center p-4 gap-2 hover:rounded-3xl hover:font-bold">
            <GrAnalytics
              size={25}
              className="text-slate-400 group-hover:text-gray-900"
            />
            <span className="font-semibold text-slate-400 group-hover:text-gray-900">
              Analytics
            </span>
          </div>
          <div className="group flex flex-row items-center p-4 gap-2 hover:rounded-3xl hover:font-bold">
            <BsListTask
              size={25}
              className="text-slate-400 group-hover:text-gray-900"
            />
            <span className="font-semibold text-slate-400 group-hover:text-gray-900">
              Task List
            </span>
          </div>
          <div className="group flex flex-row items-center p-4 gap-2 hover:rounded-3xl hover:font-bold">
            <MdSchedule
              size={25}
              className="text-slate-400 group-hover:text-gray-900"
            />
            <span className="font-semibold text-slate-400 group-hover:text-gray-900">
              Meetings
            </span>
          </div>
          <div className="group flex flex-row items-center p-4 gap-2 hover:rounded-3xl hover:font-bold">
            <IoSettingsOutline
              size={25}
              className="text-slate-400 group-hover:text-gray-900"
            />
            <span className="font-semibold text-slate-400 group-hover:text-gray-900">
              Settings
            </span>
          </div>
        </div>
        <div className="flex flex-col mx-auto gap-1 group">
          <button className="flex flex-row items-center p-4 gap-2 hover:text-red-500 rounded-3xl">
            <span className="font-semibold text-slate-400 group-hover:text-red-500">
              Logout
            </span>
            <IoExitOutline
              size={25}
              className="text-slate-400 group-hover:text-red-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
