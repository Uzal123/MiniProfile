import React, { Fragment, useState } from "react";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";
import Github from "../public/github.svg";
import Mail from "../public/mail.svg";
import Whatsapp from "../public/whatsapp.svg";
import Download from "../public/download.svg";


export default function Home() {
  const [tab, setTab] = useState(0);
  

  return (
    <div>
      <header className="p-8">
        <div className="flex justify-center">
          <img
            className="rounded-full w-28 h-28 object-cover border-2 border-black p-0.5"
            src="img.jpeg"
          ></img>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-3xl p-2">Ujjwal Paswan</h2>
          <h2 className="text-gray-500">Web Developer</h2>
        </div>
        <div className="flex justify-center gap-4 p-2">
          <a
            href="https://www.linkedin.com/in/ujjwal-paswan-a71b9a205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/uzwal_ig/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="cursor-pointer" />
          </a>
          <a
            href="https://www.github.com/Uzal123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="cursor-pointer" />
          </a>
        </div>
      </header>
      <div className="flex justify-center gap-4 p-2">
        <div className="text-center">
          <p className="font-bold">2+</p>
          <p>Years of</p>
          <p>Self Learning</p>
        </div>
        <div className="text-center">
          <p className="font-bold">25+</p>
          <p>Completed</p>
          <p>Projects</p>
        </div>
        <div className="text-center">
          <p className="font-bold">5+</p>
          <p>Internships</p>
        </div>
      </div>
      <div className="flex justify-center p-6">
        <a
          href="/Resume.pdf"
          download
          className="flex justify-center items-center bg-black text-white px-5 rounded-lg gap-2 "
        >
          <p>Download CV</p>
          <Download />
        </a>
        <div className="flex justify-center gap-1 p-2">
          <a
            href="https://wa.me/+918592031812"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 w-10 h-10 rounded-md flex items-center justify-center"
          >
            <Whatsapp />
          </a>
          <a
            href="mailto:ujwalpaswan1214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 w-10 h-10 rounded-md flex items-center justify-center"
          >
            <Mail />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex bg-gray-300 rounded-lg">
          <div className="grid grid-cols-2 gap-1 p-1">
            <TabItem
              title={"Projects"}
              tab={tab}
              id={0}
              onClick={(e) => setTab(0)}
            />

            <TabItem
              title={"Skills"}
              tab={tab}
              id={1}
              onClick={(e) => setTab(1)}
            />
          </div>
        </div>
      </div>
      {tab === 0 ? (
        <div className="flex justify-center w-full py-4 md:py-8">
          <div className="md:w-3/4 px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectItems
                title="Command Program"
                url="#"
                imglink={
                  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
                }
              />
              <ProjectItems
                title="Project Mecha"
                url="#"
                imglink={
                  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
              />
              <ProjectItems
                title="Dynamic Program"
                url="#"
                imglink={
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
              />
              <ProjectItems
                title="Tech Web"
                url="#"
                imglink={
                  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
              />
              <ProjectItems
                title="Westerners"
                url="#"
                imglink={
                  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:px-8">
              <h2 className="text-2xl font-bold text-center py-2 ">
                Front-End Skills
              </h2>
              <div className="grid grid-cols-2  gap-4">
                <List title="Html 5" level="Basic" />
                <List title="React" level="Intermediate" />
                <List title="Next.js" level="basic" />
                <List title="CSS/SCSS" level="basic" />
                <List title="HTML 5" level="basic" />
              </div>
            </div>
            <div className="md:px-8">
              <h2 className="text-2xl font-bold text-center py-2 ">
                Back-End Skills
              </h2>
              <div className="grid grid-cols-2  gap-4">
                <List title="Node" level="Basic" />
                <List title="Express" level="Intermediate" />
                <List title="MongoDB" level="basic" />
                <List title="Swagger" level="basic" />
                <List title="HTML 5" level="basic" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const TabItem = ({ title, tab, id, onClick, ...props }) => {
  return (
    <div
      className={
        "w-32 text-center p-2 cursor-pointer hover:bg-white hover:rounded-lg " + (tab === id && " bg-white rounded-lg  ")
      }
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const List = ({ title , level , ...props})=> {
    return (
      <div className="flex px-3">
        <i className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </i>
        <div className="px-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <h2>{level}</h2>
        </div>
      </div>
    );
};

const ProjectItems = ({title , imglink , url , ...props}) => {
    return (
      <div className="relative cursor-pointer card " >
        <img
          src={imglink}
          className="rounded-xl object-cover h-full w-full"
        />
        <div className="absolute bottom-0 h-full w-full overlay rounded-xl"></div>
        <div className="absolute bottom-0 p-4">
          <div className="text-2xl font-bold text-transparent title">
            {title}
          </div>
          <div className="bar h-1 rounded-full"></div>
          <i className="hidden icon" href={url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </i>
        </div>
      </div>
    );
}
