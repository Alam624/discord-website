import MyImage from "./andrewfacecropped.png";
import { Avatar} from "flowbite-react";

const MemberList = () => {


  return (
    <div className="sticky top-0 right-0 h-screen w-80 m-0 flex bg-midGray flex-col shadow-lg">
      <div className="text-gray-400 mt-8 pl-3">Online - 1</div>
      <div className="hover:bg-lightGray px-3 py-3">
        <Avatar
          img={MyImage}
          rounded={true}
          status="online"
          statusPosition="bottom-right"
        >
          <div className="space-y-1 font-medium dark:text-white">
            <div>Andrew Lam</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              The guy who made the site
            </div>
          </div>
        </Avatar>
      </div>
    </div>
  );
};

export default MemberList;
