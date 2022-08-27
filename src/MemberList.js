import MyImage from "./andrewfacecropped.png";

const MemberList = () => {
  return (
    <div className="sticky top-0 right-0 h-screen w-80 m-0 flex bg-midGray flex-col shadow-lg">
      <div className="bg-white text-black mt-8 pl-10">Online - 1</div>
      <ul className="">
        <li
          className="px-4 py-3  text-gray-300 m-3 mt-1 rounded-md
     flex-row flex mt-1 grid grid-rows-2 grid-flow-col gap-4 hover:bg-gray-600 h-[80px]"
        >
          <img src={MyImage} className="rounded-full w-14 h-14 row-span-3" />
          <p className="text-lg col-span-1 ">Andrew Lam</p>
          <p className="row-span-1 col-span-2 text-xs">Doing ???</p>
          <div class="w-4 h-4 bg-green-600 rounded-full absolute top-[115px] right-[240px] border-darkGray border-solid border-2"></div>
        </li>
      </ul>
    </div>
  );
};

export default MemberList;
