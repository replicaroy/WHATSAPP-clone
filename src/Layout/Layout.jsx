import Mainpage from "../COMPONETS/Main/Mainpage"

const Layout = () => {
  return (
    <div>
        <div className="containers w-full h-screen bg-[#E0E0DD]">
            <div className="header w-full h-40 bg-[#3EA884]"></div>
            <Mainpage />
            <div className="header w-full h-auto  " ></div>
        </div>
    </div>
  )
}

export default Layout
