import React from "react";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  FaBagShopping,
  FaGraduationCap,
  FaCode,
  FaLocationDot,
} from "react-icons/fa6";
import "./style.css";

const Experience = ({ className = "" }) => {
  return (
    <section
      id="experience"
      className="bg-white w-full h-full py-16 lg:py-20 font-poppins"
    >
      <div className="flex items-center ju w-full h-full">
        <h1 className="text-4xl md:text-8xl pl-2 pb-8 text-gray-300">
          EXPERIENCE
        </h1>
        <div className="border-b text-gray-300" style={{ width: "30%" }}></div>
      </div>
      <div className={`experience ${className}`}></div>
      <div className="text-black items-center  flex flex-col justify-center px-2 pb-32 md:pb-80 pt-2 md:pt-10 md:h-full">
        <div className="flex flex-col justify-center">
          <div className="w-full mx-auto lg:max-w-4xl">
            <div className="relative">
              <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-purple-300 lg:block left-1/2"></div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <Link href="https://www.hannan-u.ac.jp/english/index.html">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8  dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-purple-600 shadow lg:block dark:bg-purple-500"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px] lg:top-0 lg:right-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-xs text-gray-100">
                                Apr 2013 - 2014 Apr 2011 - 2015
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                              Hannan University
                            </p>
                            <p className="text-gray-700 dark:text-gray-400">
                              International Tourism
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex tems-center md:items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <FaGraduationCap className="text-purple-600 dark:text-gray-400 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <Link href="https://www.uwinnipeg.ca/">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                            <div className="hidden h-10 origin-top-right transform -rotate-45 bg-purple-600 dark:bg-purple-500 lg:block drop-shadow-lg"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-br-md lg:rounded-tl-md">
                              <span className="text-xs text-gray-100">
                                Apr 2013 - 2014
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                              The University of Winnipeg
                            </p>
                            <p className="text-gray-700 dark:text-gray-400">
                              1+ year study abroad in Canada
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <AiOutlineGlobal className="text-purple-600 dark:text-gray-400 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <Link href="https://www.hannan-u.ac.jp/english/index.html">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-purple-600 shadow lg:block dark:bg-purple-500"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px] lg:top-0 lg:right-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-xs text-gray-100 ">
                                Apr 2015 - 2022
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                              Hannan University
                            </p>
                            <p className="text-gray-700 dark:text-gray-400">
                              7+ years University Administrative Staff
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <FaBagShopping className="text-purple-600 dark:text-gray-400 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <Link href="https://ciccc.ca/">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                            <div className="hidden h-10 origin-top-right transform -rotate-45 bg-purple-600 lg:block dark:bg-purple-500 drop-shadow-lg"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-br-md lg:rounded-tl-md">
                              <span className="text-xs text-gray-100">
                                Sep 2022 - Present
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 text-start lg:text-end dark:text-gray-300">
                              Cornerstone International Community Colledge in
                              Canada
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 text-start lg:text-end">
                              Web and Mobile Aplication Development
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <FaGraduationCap className="text-purple-600 dark:text-gray-400 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <Link href="https://www.rims.agency/">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-purple-600 shadow lg:block dark:bg-purple-500"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px] lg:top-0 lg:right-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-xs text-gray-100 ">
                                July 2023 - December
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                              Rimse Co., Ltd
                            </p>
                            <p className="text-gray-700 dark:text-gray-400">
                              Front-end developer
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <FaCode className="text-purple-600 dark:text-gray-400 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <Link href="https://linktr.ee/eepic.events">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                            <div className="hidden h-10 origin-top-right transform -rotate-45 bg-purple-600 lg:block dark:bg-purple-500 drop-shadow-lg"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -left[-30px] lg:top-0 lg:left-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-br-md lg:rounded-tl-md">
                              <span className="text-xs text-gray-100">
                                Aug 2023 - December
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 text-start lg:text-end dark:text-gray-300">
                              e-Epic Technologies
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 text-start lg:text-end">
                              Front-end developer
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex  items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <FaCode className="text-purple-600 dark:text-gray-400 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <Link href="https://www.summations.com/">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 dark:bg-gray-900 hover:bg-purple-700">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-purple-600 shadow lg:block dark:bg-purple-500"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px] lg:top-0 lg:right-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-xs text-gray-100 ">
                                Aug 2023 - Present
                              </span>
                            </div>
                            <p className="mt-4 mb-2 pt-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                              Summations
                            </p>
                            <p className="text-gray-700 dark:text-gray-400">
                              Front-end developer
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden absolute md:flex items-end justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
                    <FaLocationDot className="text-purple-400 text-xl animate-float" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
