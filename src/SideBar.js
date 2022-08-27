import { AiFillHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoPersonSharp, IoDocumentTextOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<AiFillHome size="24" />} />
      <SideBarIcon icon={<IoPersonSharp size="24" />} />
      <SideBarIcon icon={<IoDocumentTextOutline size="26" />} />
      <SideBarIcon icon={<AiFillGithub size="24" />} />
      <SideBarIcon icon={<AiFillLinkedin size="24" />} />
    </div>
  );
};
const SideBarIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;
