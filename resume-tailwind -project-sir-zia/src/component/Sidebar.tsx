import Image from "next/image";
import React from "react";
import habibpic from "../../public/habib.jpg";
import { Facebook, Envelope, Discord } from "./icons";
export default function Sidebar({ data }: any) {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="flex bg-black h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          className="rounded-full mb-6"
          src={habibpic}
          priority
          alt="Habib ur Rehman"
          width={300}
          height={300}
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        
        {education.map((ele: string, i: number) => (
            <>
          <p key={i} className="mb-2">{ele}</p>
          </>
        ))}
            
        <div className="text-white text-center mb-4 mt-4 sm-mt-8">
          <h3 className="mb-2">CONTACT ME</h3>
          <div className="flex felx-row justify-center gap-2 ">
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              target="_blank"
              rel='noreferrer'
              arial-label={"facebook Link"}
            >
              <Facebook />{" "}
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              target="_blank"
              rel='noreferrer'
              arial-label={"Gmail Link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              target="_blank"
              rel='noreferrer'
              arial-label={"Discord Link"}
            >
              <Discord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
