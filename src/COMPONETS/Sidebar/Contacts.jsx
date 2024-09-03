import { contacts } from "./ContactData";

const Contacts = () => {
  return (
    <div className=" overflow-y-scroll h-[736px] ">
      {contacts.map((user, index) => (
        <div className="contacts flex items-center justify-between pl-6 pr-4 text-sm py-2  hover:bg-gray-100 border-b"  key={index}>
          <div className="profile flex gap-4 font-extralight text-lg items-center ">
            <div className="profile-pic  ">
                <img src={user.profilePicture} className="w-12 rounded-full " alt="" />
            </div>
            <div className="name ">{user.name}</div>
          </div>
          <div className="time text-sm text-gray-600">
            <p>{user.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
