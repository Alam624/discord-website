import "./App.css";
import SideBar from "./SideBar";
import Page from "./Page";
import NavBar from "./NavBar";

function App() {

  // const NavLink = ({ icon, text = "tooltip" }) => {
  //   return (
  //     <div className="sidebar-icon group">
  //       {icon}
  
  //       <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  //     </div>
  //   );
  // };

  return (
    <div className="flex">
      <SideBar />

      <NavBar/>

      {/* <Page/> */}
      <div className="flex flex-col w-screen bg-red-500">
        <section className="flex flex-col" id="Home">
          <h1 className="bg-blue-500 flex items-center h-[200px] text-5xl" id="home">
            Home
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet quam tortor. Nulla quis augue eget nisl blandit dignissim.
            Suspendisse placerat felis quis congue ultrices. Etiam euismod sem
            sed eros pharetra, vitae eleifend purus mollis. Aliquam consequat
            erat id augue commodo, ac lobortis diam fermentum. Donec consequat
            massa eget ligula scelerisque, eu euismod sapien sodales. Nam
            fringilla pharetra felis, nec lobortis lorem viverra vel. Maecenas
            convallis vulputate tortor, a blandit est facilisis sit amet.
            Curabitur facilisis, risus eu ultrices consequat, erat mi tempor
            erat, ac maximus dui felis et arcu. Pellentesque nulla ligula,
            scelerisque egestas magna in, fermentum laoreet neque. Mauris magna
            augue, venenatis sit amet pharetra eget, blandit sed nunc. Sed
            elementum turpis at risus congue, sit amet laoreet libero suscipit.
            Vivamus finibus felis vel sem volutpat malesuada ut et dui. Sed
            vehicula, lectus vitae vulputate ultricies, ante augue cursus magna,
            vel pretium lorem nibh vitae nulla.
          </p>
        </section>
        <section className="flex flex-col" id="about">
          <h1 className="bg-blue-500 flex items-center h-[200px] text-5xl">
            About me
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet quam tortor. Nulla quis augue eget nisl blandit dignissim.
            Suspendisse placerat felis quis congue ultrices. Etiam euismod sem
            sed eros pharetra, vitae eleifend purus mollis. Aliquam consequat
            erat id augue commodo, ac lobortis diam fermentum. Donec consequat
            massa eget ligula scelerisque, eu euismod sapien sodales. Nam
            fringilla pharetra felis, nec lobortis lorem viverra vel. Maecenas
            convallis vulputate tortor, a blandit est facilisis sit amet.
            Curabitur facilisis, risus eu ultrices consequat, erat mi tempor
            erat, ac maximus dui felis et arcu. Pellentesque nulla ligula,
            scelerisque egestas magna in, fermentum laoreet neque. Mauris magna
            augue, venenatis sit amet pharetra eget, blandit sed nunc. Sed
            elementum turpis at risus congue, sit amet laoreet libero suscipit.
            Vivamus finibus felis vel sem volutpat malesuada ut et dui. Sed
            vehicula, lectus vitae vulputate ultricies, ante augue cursus magna,
            vel pretium lorem nibh vitae nulla.
          </p>
        </section>

        <section className="flex flex-col" id="projects">
          <h1 className="bg-blue-500 flex items-center h-[200px] text-5xl">
           Projects
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet quam tortor. Nulla quis augue eget nisl blandit dignissim.
            Suspendisse placerat felis quis congue ultrices. Etiam euismod sem
            sed eros pharetra, vitae eleifend purus mollis. Aliquam consequat
            erat id augue commodo, ac lobortis diam fermentum. Donec consequat
            massa eget ligula scelerisque, eu euismod sapien sodales. Nam
            fringilla pharetra felis, nec lobortis lorem viverra vel. Maecenas
            convallis vulputate tortor, a blandit est facilisis sit amet.
            Curabitur facilisis, risus eu ultrices consequat, erat mi tempor
            erat, ac maximus dui felis et arcu. Pellentesque nulla ligula,
            scelerisque egestas magna in, fermentum laoreet neque. Mauris magna
            augue, venenatis sit amet pharetra eget, blandit sed nunc. Sed
            elementum turpis at risus congue, sit amet laoreet libero suscipit.
            Vivamus finibus felis vel sem volutpat malesuada ut et dui. Sed
            vehicula, lectus vitae vulputate ultricies, ante augue cursus magna,
            vel pretium lorem nibh vitae nulla.
          </p>
        </section>
        <section className="flex flex-col" id="contact">
          <h1 className="bg-blue-500 flex items-center h-[200px] text-5xl">
           Contact
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet quam tortor. Nulla quis augue eget nisl blandit dignissim.
            Suspendisse placerat felis quis congue ultrices. Etiam euismod sem
            sed eros pharetra, vitae eleifend purus mollis. Aliquam consequat
            erat id augue commodo, ac lobortis diam fermentum. Donec consequat
            massa eget ligula scelerisque, eu euismod sapien sodales. Nam
            fringilla pharetra felis, nec lobortis lorem viverra vel. Maecenas
            convallis vulputate tortor, a blandit est facilisis sit amet.
            Curabitur facilisis, risus eu ultrices consequat, erat mi tempor
            erat, ac maximus dui felis et arcu. Pellentesque nulla ligula,
            scelerisque egestas magna in, fermentum laoreet neque. Mauris magna
            augue, venenatis sit amet pharetra eget, blandit sed nunc. Sed
            elementum turpis at risus congue, sit amet laoreet libero suscipit.
            Vivamus finibus felis vel sem volutpat malesuada ut et dui. Sed
            vehicula, lectus vitae vulputate ultricies, ante augue cursus magna,
            vel pretium lorem nibh vitae nulla.
          </p>
        </section>
      </div>
      <div className=" sticky top-0 right-0 h-screen w-80 m-0 flex flex-col bg-darkGray text-white shadow-lg">
        MemberList
      </div>
    </div>
  );
}

export default App;
