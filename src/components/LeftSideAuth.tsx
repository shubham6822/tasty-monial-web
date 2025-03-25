import { Star, Users } from "lucide-react";
import React from "react";

export default function LeftSideAuth() {
  return (
    <div className="flex flex-col h-full p-10 bg-[#3c37ff] text-white rounded-xl ">
      <div className="flex flex-col justify-between h-full">
        {/* top*/}
        <div>
          <h1 className="text-xl font-semibold"> TASTYMONIAL</h1>
        </div>
        {/* middle */}
        <div className="text-6xl font-bold mt-36">
          <h2 className="pb-2">Start your </h2>
          <h2>journey with us</h2>
          <div className="text-base pt-5 font-light max-w-md">
            <p>
              Discover the world&apos;s best app which helps you gather, manage,
              and display testimonials from your clients and users effortlessly!
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="    w-full mt-10 justify-center flex flex-col gap-4">
          <div className="p-4 bg-[#2520E3] rounded-2xl ">
            <div className="flex flex-col rounded-lg">
              <p className="mb-4  font-light">
                As a freelance developer, I needed a simple way to collect
                testimonials from clients. TastyMonial is exactly what I was
                looking for - it took less than 5 minutes to set up!
              </p>
              <div className="mt-auto flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Alex Chen</p>
                  <p className="text-sm    ">Freelance Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full justify-center">
            <div className="size-2 bg-gray-400 rounded-full"></div>
            <div className="size-2 bg-white rounded-full"></div>
            <div className="size-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
