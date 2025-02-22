"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" mt-48 mb-20 px-8" id="projects">
      <h1 className="heading">
        I&apos;ve been building a
        <span className="text-purple"> lot of things</span>
      </h1>
      <h2 className="text-center font-light text-lg flex items-center justify-center mx-auto max-w-4xl mt-5">
        From small experiments to full-fledged web applications. Each one
        reflects my passion for coding and design. Come explore the fruits of my
        labor and see what I&apos;ve been up to!
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <Link href={item.link} target="_blank" key={item.id}>
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.name} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" width={500} height={500} />
                  </div>
                  <Image
                    src={item.img}
                    width={500}
                    height={500}
                    alt="cover"
                    className="z-10 rotate-6 rounded-lg absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon5"
                          width={500}
                          height={500}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
