import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
const SidebarHeader = () => {
  return (
    <>
       <div className="sidebar">
            <div className="sidebar__header flex justify-between items-center px-4 py-2">
                <div className="logo">
                    <h1 className=" text-2xl font-bold text-[#111C22]">Chats</h1>
                </div>
                <div className="add-chat-btn flex gap-6 items-center">
                <div className="plus text-2xl font-bold text-[#919698]">
                    <h1><BiSolidMessageSquareAdd className="cursor-pointer" /></h1>
                </div>
                <div className="dot-menu text-2xl font-bold text-[#111C22] ">
                    <h1><CiMenuKebab className="cursor-pointer" /></h1>
                </div>
                </div>
            </div>     
        </div>
    </>
  )
}

export default SidebarHeader
