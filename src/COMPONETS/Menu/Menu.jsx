import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { TiGroupOutline } from "react-icons/ti";
import { TbBrandMeta } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
const Menu = () => {
    return (
      <>      
        <div className="menu flex flex-col justify-between h-full p-2 w-16  bg-[#F0F2F5] ">
            <div className="header-menu flex flex-col gap-4 text-[#54656F] text-2xl pt-4 px-2   ">
               <MdOutlineMessage className="cursor-pointer" />
                <div className="reels cursor-pointer"><MdOutlineWifiTetheringErrorRounded /></div>
                <div className="chats cursor-pointer"><PiWhatsappLogoThin /></div>
                <div className="groups cursor-pointer"><TiGroupOutline /></div>
                <div className="meta cursor-pointer"><TbBrandMeta /></div>
            </div>
            <div className="footer-menu flex flex-col gap-4 text-2xl text-[#54656F] pb-4 px-2 ">
            <div className="setting cursor-pointer"><CiSettings /></div>
            <div className="profile cursor-pointer"><FaRegCircleUser /></div>
            </div>  
        </div>     
      </>
    );
  };
  export default Menu;
  