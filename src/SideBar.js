import { AiFillHome, AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { IoPersonSharp, IoDocumentTextOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-[100px] m-0 flex flex-col bg-darkGray text-white shadow-lg">
      <SideBarIcon icon={<IoPersonSharp size="24" />} text="Home"/>
      <SideBarIcon icon={<IoDocumentTextOutline size="26" />}text="CV" />
      <SideBarIcon icon={<AiFillGithub size="24" />} text="Github"/>
      <SideBarIcon icon={<AiFillLinkedin size="24" />}text="Linkedin" />
      <SideBarIcon icon={<AiFillInstagram size="24" />}text="Instagram" />
      <SideBarIcon icon={<AiFillFacebook size="24" />} text="Facebook"/>

    </div>
  );
};
const SideBarIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100 z-10">{text}</span>
    </div>
  );
};

export default SideBar;
