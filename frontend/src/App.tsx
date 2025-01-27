import Sidebar from "./components/layout/Sidebar";
import MainHomePage from "./Pages";
import Rightbar from "./components/layout/Rightbar";


export default function page() {
  return (
    <>
      <div className="flex flex-row h-[100vh]">
        <Sidebar />
        <div className="w-[1px] border-1 border-slate-800"></div>
        <MainHomePage />
        <Rightbar />
      </div>
    </>
  );
}
