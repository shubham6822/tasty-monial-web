import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <section className="space-y-6 pb-8 pt-12 md:pb-12">
        <div className="container flex  flex-col items-center gap-4 text-center">
          <div
            className="text-white py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-full inline-flex items-center space-x-2 text-[13px] sm:text-sm md:text-base border border-gray-700 dark:bg-gradient-to-r from-blue-500/20 to-purple-500/20 "
            style={{ opacity: 1, transform: "none" }}
          >
            <span className=" text-black dark:text-white">
              Trusted by
              <span className="font-bold"> 100+ </span> happy users
            </span>
          </div>
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[70rem]">
            The Easiest Way to Collect & Showcase
            <span className="text-primary"> Testimonials</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            TastyMonial helps you gather, manage, and display testimonials from
            your clients and users effortlessly!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
            <Link href="/signup">
              <button className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 flex-1 bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:from-blue-500 hover:to-purple-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-[220px]">
                <span>Get Started for Free</span>
              </button>
            </Link>
          </div>
          <Image
            src={"/dashboard-light.png"}
            alt="dashhboar-image"
            width={140}
            height={140}
            className=" w-full h-full rounded-3xl border-2 shadow-xl "
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
