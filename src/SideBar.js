import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { IoPersonSharp, IoDocumentTextOutline } from "react-icons/io5";
import { Tooltip } from "@mui/material";

const SideBar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-[100px] m-0 flex flex-col bg-darkGray text-white shadow-lg">
      <Tooltip title="Home" placement="right" arrow>
        <a href="#home">
          <SideBarIcon icon={<IoPersonSharp size="24" />} text="Home" />
        </a>
      </Tooltip>

      <Tooltip title="CV" placement="right" arrow>
        <a
          href="https://drive.google.com/file/d/1u-iscJ81uIrYYHbeK4rrCmugkxbS3U9E/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <SideBarIcon icon={<IoDocumentTextOutline size="26" />} text="CV" />
        </a>
      </Tooltip>

      <Tooltip title="GitHub" placement="right" arrow>
        <a href="https://github.com/Alam624" target="_blank" rel="noreferrer">
          <SideBarIcon icon={<AiFillGithub size="24" />} text="Github" />
        </a>
      </Tooltip>

      <Tooltip title="Linkedin" placement="right" arrow>
        <a
          href="https://www.linkedin.com/in/andrew-lam-994902201/"
          target="_blank"
          rel="noreferrer"
        >
          <SideBarIcon icon={<AiFillLinkedin size="24" />} text="Linkedin" />
        </a>
      </Tooltip>

      <Tooltip title="Instagram" placement="right" arrow>
        <a
          href="https://www.instagram.com/andrew_lambb/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <SideBarIcon icon={<AiFillInstagram size="24" />} text="Instagram" />
        </a>
      </Tooltip>

      <Tooltip title="Facebook" placement="right" arrow>
        <a
          href="https://www.facebook.com/andrew.lam.161446/"
          target="_blank"
          rel="noreferrer"
        >
          <SideBarIcon icon={<AiFillFacebook size="24" />} text="Facebook" />
        </a>
      </Tooltip>
    </div>
  );
};
const SideBarIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}

      {/* <span class="sidebar-tooltip group-hover:scale-100">{text}</span> */}
    </div>
  );
};

export default SideBar;
