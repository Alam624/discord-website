import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillCode,
  AiFillCrown,
} from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-80 m-0 flex bg-midGray flex-col shadow-lg">
      <ul className="">
        <li
          className="px-4 py-3  text-gray-300 
     flex-row flex mt-4 border-b-2 border-black flex-grow w-full"
        >
          <AiFillCrown size="24" className="relative top-[0px] " />
          <p className="pl-[10px]">Andrew's Server</p>
        </li>
        <a href="#home">
          <li className="navlink mt-8">
            <AiFillHome size="16" className="relative top-[3px] " />
            <p className="pl-[10px]">Home</p>
          </li>
        </a>
        <a href="#about">
          <li className="navlink">
            <AiFillInfoCircle size="16" className="relative top-[4px] " />
            <p className="pl-[10px]">About me</p>
          </li>
        </a>
        <a href="#projects">
          <li className="navlink">
            <AiFillCode size="16" className="relative top-[4px] " />
            <p className="pl-[10px]">Projects</p>
          </li>
        </a>
        <a href="#contact">
          <li className="navlink">
            <RiContactsBook2Fill size="16" className="relative top-[4px] " />
            <p className="pl-[10px]">Contact</p>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
