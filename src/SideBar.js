import { AiFillHome, AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { IoPersonSharp, IoDocumentTextOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-[100px] m-0 flex flex-col bg-darkGray text-white shadow-lg">
      <a href="#home"><SideBarIcon icon={<IoPersonSharp size="24" />} text="Home"/></a>
      <a href="htt"></a><SideBarIcon icon={<IoDocumentTextOutline size="26" />}text="CV" />
      <a href="https://github.com/Alam624" target="_blank"><SideBarIcon icon={<AiFillGithub size="24" />} text="Github"/></a>
      <a href="https://www.linkedin.com/in/andrew-lam-994902201/" target="_blank"><SideBarIcon icon={<AiFillLinkedin size="24" />}text="Linkedin" /></a>
      <a href="https://www.instagram.com/andrew_lambb/?hl=en" target="_blank"><SideBarIcon icon={<AiFillInstagram size="24" />}text="Instagram" /></a>
      <a href="https://www.facebook.com/andrew.lam.161446/" target="_blank"><SideBarIcon icon={<AiFillFacebook size="24" />} text="Facebook"/></a>

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
