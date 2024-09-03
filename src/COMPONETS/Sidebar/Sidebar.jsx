import SidebarHeader from "./SidebarHeader";
import { CiSearch } from "react-icons/ci";
import Contacts from "./Contacts";
const Sidebar = () => {
    return (
        <>  
        <div className="sidebar-container  w-[600px] bg-white">     
        <SidebarHeader/>
        <div className="input-search m-4 relative">
            <input type="search " placeholder="Search" className="w-full pl-16 px-4 py-1 rounded-md bg-[#F0F2F5] text-gray-900 outline-none "/>
            <span className=" absolute left-4 top-[6px] text-xl"> <CiSearch /></span>            
        </div>
        <div className="chat-section flex gap-4 px-6 group-[abc]: text-sm group-[abc]: text-gray-600 ">
            <div className="all abc border px-3 py-1 rounded-3xl bg-green-200 cursor-pointer ">All</div>
            <div className="unread abc border px-3 py-1 rounded-3xl bg-gray-200 cursor-pointer">Unread</div>
            <div className="info abc border px-3 py-1 rounded-3xl bg-gray-200 cursor-pointer">Info</div>
        </div>
        <div className="contacts ">  
        <Contacts/>
        </div>   cursor-pointer
          </div>
        </>
    )
}

export default Sidebar;