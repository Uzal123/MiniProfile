import React, { Fragment, useState } from "react";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";
import Github from "../public/github.svg";
import Mail from "../public/mail.svg";
import Whatsapp from "../public/whatsapp.svg";
import Download from "../public/download.svg";
import Head from "next/head";
import {AiFillHtml5} from "react-icons/ai";
import {FaCss3Alt} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {SiTypescript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {FaBootstrap} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {BiLogoBootstrap} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import {IoLogoNodejs} from "react-icons/io";
import {SiSwagger} from "react-icons/si";
import {SiNestjs} from "react-icons/si";
import {GrGraphQl} from "react-icons/gr";
import {SiMongodb} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
import {SiNginx} from "react-icons/si";
import {SiPm2} from "react-icons/si";
import {BsGit} from "react-icons/bs";
import {FaAws} from "react-icons/fa";
import {SiCplusplus} from "react-icons/si";
import {SiOracle} from "react-icons/si";
import {FaSass} from "react-icons/fa";



export default function Home() {
  const [tab, setTab] = useState(0);
  

  return (
    <div>
      <Head>
        <title>Ujjwal Paswan - Profile</title>
      </Head>
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
          <p className="font-bold">1+</p>
          <p>Years of</p>
          <p>Corporate Experience</p>
        </div>
        <div className="text-center">
          <p className="font-bold">2+</p>
          <p>Years of</p>
          <p>Self Learning</p>
        </div>
        <div className="text-center">
          <p className="font-bold">10+</p>
          <p>Completed</p>
          <p>Projects</p>
        </div>
        <div className="text-center">
          <p className="font-bold">3</p>
          <p>Internships</p>
        </div>
      </div>
      <div className="flex justify-center p-6">
        <a
          href="/ujjwal-resume.pdf"
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

            <h1 className="md:col-span-2 text-center text-2xl font-semibold">Full Stack Projects</h1>

            <ProjectItems
                title="MotoGhar - sell and rental Marketplace"
                url="https://github.com/Uzal123/bikeapp"
                imglink={"./Home.png"}
              />
              <ProjectItems
                title="Namma SKIT - College Website"
                url="https://github.com/Uzal123/nammaSkit"
                imglink={"./Capture.PNG"}
              />

              <h1 className="md:col-span-2 text-center text-2xl font-semibold">Frontend Projects</h1>

              <ProjectItems
                title="KNLOS NETWORKS - landing page"
                url="https://clouddot.vercel.app/"
                imglink={"./knlosnetworks.PNG"}
              />
              <ProjectItems
                title="Feather Shoe"
                url="https://feathershoes.vercel.app/"
                imglink={"./feathershoe.PNG"}
              />
              <ProjectItems
                title="Aaru Travels"
                url="https://aaru-tours.vercel.app"
                imglink={"./aarutours.PNG"}
              />

              <ProjectItems
                title="Weather App"
                url="https://weatherappujjwal.netlify.app"
                imglink={"./weatherapp.PNG"}
              />
              <ProjectItems
                title="Hotel App"
                url="https://dazziieltd.netlify.app/"
                imglink={"./dashboard.png"}
              />
              <ProjectItems
                title="Travel Company"
                url="https://travel-company-kohl.vercel.app"
                imglink={"./travelcompany.PNG"}
              />
              <ProjectItems
                title="Portfolio Project"
                url="https://portfolio-ujjwal.herokuapp.com"
                imglink={"./portfolioproject.PNG"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:px-8 px-4">
              <h2 className="text-2xl font-bold md:text-center py-2 ">
                Front-End Skills
              </h2>
              <div className="grid grid-cols-2  gap-4">
                <List title="Html" icon={<AiFillHtml5 className="h-6 w-6"/>}/>
                <List title="CSS"  icon={<FaCss3Alt className="h-6 w-6"/>}/>
                <List title="Sass" icon={<FaSass className="h-6 w-6"/>}/>
                <List title="Tailwind" icon={<SiTailwindcss className="h-6 w-6"/>} />
                <List title="Javascript" icon={<IoLogoJavascript className="h-6 w-6"/>} />
                <List title="Typescript" icon={<SiTypescript className="h-6 w-6" />} />
                <List title="Reactjs" icon={<FaReact className="h-6 w-6"/>} />
                <List title="Nextjs" icon={<TbBrandNextjs className="h-6 w-6"/>} />
                <List title="Bootstrap" icon={<FaBootstrap className="h-6 w-6"/>} />
              </div>
            </div>
            <div className="md:px-8 px-4">
              <h2 className="text-2xl font-bold md:text-center py-2 ">
                Back-End Skills
              </h2>
              <div className="grid grid-cols-2  gap-4">
                <List title="Nodejs" icon={<IoLogoNodejs className="h-6 w-6"/>} />
                <List title="Nestjs" icon={<SiNestjs className="h-6 w-6"/>} />
                <List title="MongoDB" icon={<SiMongodb className="h-6 w-6"/>} />
                <List title="GraphQL" icon={<GrGraphQl className="h-6 w-6"/>} />
                <List title="Swagger" icon={<SiSwagger className="h-6 w-6"/>} />
                <List title="Mongoose" icon={<DiMongodb className="h-6 w-6"/>} />
              </div>
            </div>
            <div className="md:px-8 px-4 md:col-span-2">
              <h2 className="text-2xl font-bold md:text-center py-2 ">
                Other Skills and Tools
              </h2>
              <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-4">
                <List title="Nginx" icon={<SiNginx className="h-6 w-6"/>}/>
                <List title="PM2" icon={<SiPm2 className="h-6 w-6"/>} />
                <List title="Git/Github" icon={<BsGit className="h-6 w-6"/>} />
                <List title="AWS - S3" icon={<FaAws className="h-6 w-6"/>} />
                <List title="AWS - EC2" icon={<FaAws className="h-6 w-6"/>} />
                <List title="Github Actions" icon={<BsGit className="h-6 w-6"/>} />
                <List title="Oracle SQL" icon={<SiOracle className="h-6 w-6"/>} />
                <List title="C/C++" icon={<SiCplusplus className="h-6 w-6"/>} />
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

const List = ({ title ,icon, ...props})=> {
    return (
      <div className="flex px-3">
        <i className="flex justify-center items-center">
          {icon}
        </i>
        <div className="px-2">
          <h2 className="md:text-lg text-md font-light">{title}</h2>
          {/* <h2>{level}</h2> */}
        </div>
      </div>
    );
};

const ProjectItems = ({title , imglink , url , ...props}) => {
    return (
      <a
        className="relative cursor-pointer card shadow-xl rounded-xl"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imglink} className="rounded-xl object-cover h-full w-full" />
        <div className="absolute bottom-0 h-full w-full overlay rounded-xl"></div>
        <div className="absolute bottom-0 p-4">
          <div className="text-2xl font-bold text-transparent title">
            {title}
          </div>
          <div className="bar h-1 rounded-full"></div>
          <i className="hidden icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </i>
        </div>
      </a>
    );
}
