import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from '../../public/assets/projects/property.jpg'
import crypto from '../../public/assets/projects/crypto.jpg'
import netflix from '../../public/assets/projects/netflix.jpg'
import twitch from '../../public/assets/projects/twitch.jpg'
import ProjectItems from "./ProjectItems";
export default function Projects() {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItems
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItems
            title="Crypto App"
            backgroundImg={crypto}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Netflix App"
            backgroundImg={netflix}
            projectUrl="/netflix"
          />
          <ProjectItems
            title="Twitch UI"
            backgroundImg={twitch}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
}
