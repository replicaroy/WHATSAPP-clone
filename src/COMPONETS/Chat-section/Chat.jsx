import { MdMic } from "react-icons/md"
import { CiMenuKebab } from "react-icons/ci";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";import { LuPlus } from "react-icons/lu";
import { GrEmoji } from "react-icons/gr";

const Chat = () => {
  return (
    <>
          <div className="chat-container flex flex-col justify-between w-full " >    
        <div className="chat-section flex justify-between items-center bg-[#F0F2F5] w-100 py-1 px-4" >
             <div className="chat-bar-header flex">              
              <div className="profile-info flex gap-4 items-center">
              <div className="profile-pic cursor-pointer">
              <img src="https://www.shutterstock.com/shutterstock/photos/2346359905/display_1500/stock-photo-smile-selfie-and-face-of-a-young-black-woman-for-social-media-happiness-or-positive-attitude-2346359905.jpg" alt="" className="w-12  rounded-full" />
              </div>
              <div className="profile-other-info flex flex-col">
              <div className="profile-name font-extralight text-lg ">Name</div>
              <div className="profile-last seen-time">
                <p className=" text-gray-500 text-sm">Last seen today 1 am</p>
              </div>
              </div>
              </div>
          </div>
   
          <div className="chat-header-options flex gap-6  group-[x]:pointer">
            <div className="video-call-option">
            <BsFillCameraVideoFill className="text-gray-500 text-xl cursor-pointer" />
            </div>
            <div className="search-option text-xl rounded-full cursor-pointer ">
            <CiSearch  />
            </div>
            <div> <h1 className="text-xl cursor-pointer "><CiMenuKebab /></h1></div>         
          </div>
        </div>

        <div className="chat-footer w-full h-10 flex justify-between  gap-4 items-center bg-[#F0F2F5] px-4 py-8">
            <div className="emoji flex gap-4 text-2xl text-gray-600 ">
            <GrEmoji />
            <LuPlus className="cursor-pointer" />
            </div>
            <div className="attach ">
            </div>
            <div className="message w-full ">
            <input type="text" className="w-full h-8 outline-none py-4 px-3 border rounded-md text-sm text-gray-800" placeholder="Type a message..." />
            </div>
            <div className="record  text-2xl text-gray-600 cursor-pointer">
            <MdMic />
            </div>
        </div>
        </div>
    </>
  )
}

export default Chat
