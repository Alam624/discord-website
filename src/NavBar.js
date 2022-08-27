const NavBar = () => {
    return (<div className="sticky top-0 left-0 h-screen w-80 m-0 flex bg-darkGray flex-col shadow-lg">
    <ul className="">
      <a href="#home"><li className="navlink mt-8">Home</li></a>
      <a href="#about"><li className="navlink">About me</li></a>
      <a href="#projects"><li className="navlink">Projects</li></a>
      <a href="#contact"><li className="navlink">Contact</li></a>
    </ul>
  </div>);
}




export default NavBar;