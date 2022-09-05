import "./App.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import MemberList from "./MemberList";
import MyImage from "./andrewfacecropped.png";
import { Avatar, Badge } from "flowbite-react";
import {useEffect} from 'react'
import React from "react";

function App() {
  useEffect(() => {
    document.title = "Andrew Lam Portfolio"
 }, []);

  return (
    <div className="flex relative">
      <SideBar />

      <NavBar />

      {/* <Page/>  */}
      <div className="flex flex-col w-screen bg-lightGray text-gray-400">
        <section className="flex flex-col" id="Home">
          <h1
            className="bg-lightGray flex items-center h-[200px] text-5xl font-sans text-white my-0.5  px-8"
            id="home"
          >
            Hey, I'm Andrew{" "}
            <span role="img" aria-label="sheep">
              👋
            </span>
          </h1>
          <h2 className="text-gray-300 text-3xl px-8 py-10">
            Aspiring Software Engineering Student
          </h2>
          <div className="my-9 py-1 hover:bg-midGray mx-0  px-8">
            <Avatar
              img={MyImage}
              rounded={true}
              status="online"
              statusPosition="bottom-right"
              className="hover:bg-darkGray"
            >
              <div className="space-y-1 font-medium text-blue-300 ">
                <div>Andrew Lam</div>
                <div className="text-sm text-white dark:text-gray-400">
                  Welcome to my site!
                </div>
              </div>
            </Avatar>
            <div className="space-y-1 font-medium text-sm text-white dark:text-gray-400 pl-14">
              This was made in React with Tailwind CSS
            </div>
          </div>
          <div className="my-9 py-1 hover:bg-midGray mx-0  px-8">
            <Avatar
              img={MyImage}
              rounded={true}
              status="online"
              statusPosition="bottom-right"
              className="hover:bg-darkGray"
            >
              <div className="space-y-1 font-medium text-blue-300 ">
                <div>Andrew Lam</div>
                <div className="text-sm text-white dark:text-gray-400">
                  If you couldn't already tell, this was heavily inspired by
                  Discord
                </div>
              </div>
            </Avatar>
            <div className="space-y-1 font-medium text-sm text-white dark:text-gray-400 pl-14">
              If you would like to contact me you will be able to reach me
              through the icons of the left
            </div>
          </div>
        </section>
        <section className="flex flex-col px-12 pt-0 mt-0">
          <h1
            className="bg-lightGray flex items-center h-32 text-5xl font-sans mt-20 text-white my-0.5"
            id="about"
          >
            About me
            <span role="img" aria-label="smiley face">
              😀
            </span>
          </h1>
          <h3 className="text-2xl font-medium">
            Get to know me a little bit better
          </h3>
          <p className="py-10 text-xl font-normal">
            I'm a second year Software Engineering student studying at UOA. I'm
            looking for an internship to learn and experience the real tech
            industry first hand.
            <br />
            Currently I'm learning React, as well as Express, MongoDB and Node.
            <br />
            When I'm not working, I like to play/watch basketball, game, and
            work out
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="info" size="lg">
              React
            </Badge>
            <Badge color="gray" size="lg">
              Express
            </Badge>
            <Badge color="success" size="lg">
              MongoDB
            </Badge>
            <Badge color="warning" size="lg">
              Node
            </Badge>
            <Badge color="pink" size="lg">
              Basketball
            </Badge>
            <Badge color="purple" size="lg">
              Games
            </Badge>
            <Badge color="indigo" size="lg">
              Gym
            </Badge>
          </div>
        </section>

        <section className="flex flex-col px-12">
          <h1
            className="bg-lightGray flex items-center h-32 text-5xl font-sans mt-20 text-white my-0.5"
            id="projects"
          >
            Projects
            <span role="img" aria-label="laptop">
              💻
            </span>
          </h1>
          <p className="py-10 text-xl font-normal">
            Here's what I've worked on
            <div className="flex flex-wrap justify-center pt-10 mx-3 text-white font-medium">
              <div className="project-cards bg-blue-800">
                <div className="text-xl pb-4">Discord Portfolio Website</div>
                <p className="text-base">
                  {" "}
                  It's the website that you're on right now! Made using React
                  and Tailwind CSS
                </p>
              </div>
              <a href="https://job-listing-viewer.netlify.app/"> 
              <div className="project-cards bg-green-500">
                <div className="text-xl pb-4">Job Listing Viewer</div>
                <p className="text-base">
                  {" "}
                  A fullstack webapp I developed using React, Express, Node and
                  MongoDB. It allows you to view a list of jobs in a database,
                  and add, delete and edit notes for each job.
                </p>
              </div>
              </a>
              <div className="project-cards bg-red-500">
                <div className="text-xl pb-4">Quick, Draw!</div>
                <p className="text-base">
                  {" "}
                  Currently developing a clone of the Google Quick, Draw! game,
                  using JavaFX. Uses machine learning to determine if the play
                  has won or lost.
                </p>
              </div>
              <a href="https://github.com/Alam624">
              <div className="project-cards bg-yellow-500">
                <div className="text-xl pb-4">Other projects</div>
                <p className="text-base">
                  {" "}
                  Check out my GitHub to see what else I'm working on right now!
                </p>
              </div>
              </a>
            </div>
          </p>
        </section>
        <section className="flex flex-col px-12 pb-40" id="contact">
          <h1 className="bg-lightGray flex items-center h-[200px] text-5xl text-white">
            Contact me
            <span role="img" aria-label="laptop">
            📧
            </span>
          </h1>
          <h3 className="text-2xl font-medium">
            Contact me at the following email <br/>
            andrewlam17501@gmail.com
          </h3>
        </section>
      </div>

      <div className=" sticky top-0 right-0 h-screen w-80 m-0 flex flex-col bg-darkGray text-white shadow-lg">
        <MemberList />
      </div>
    </div>
  );
}

export default App;
