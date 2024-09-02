import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat-section/Chat";
const Mainpage = () => {
    return (
      <>
        <div className="main-bar  w-[80%] flex  h-[93%] bg-[#EFEAE2] m-auto  mt-[-130px]  overflow-hidden" >
        <Menu/>
        <Sidebar/>
        <Chat/>
      </div>
       
      </>
    );
  };
  export default Mainpage;
  