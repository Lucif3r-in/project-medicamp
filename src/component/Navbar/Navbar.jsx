import React from "react";
/* eslint-disable */
function Navbar() {
  return (
    <nav class="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5  h-28">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src={"https://res.cloudinary.com/dkqxnquga/image/upload/v1671957971/Logo_of_HealthifyMe_jhdr8v.png"}
            class="h-6 mr-3 sm:h-12"
            alt={" Logo"}
          />
        </a>

        <div class="flex items-center md:order-2">
          {/* {<!-- notification -->} */}
          <div class=" container flex flex-wrap items-center justify-between mx-auto notification ">
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
              type="button"
            >
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <div class="flex relative">
                <div class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
            </button>
            <div class="login">
              {/* {<!-- Modal toggle -->} */}
              <button
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                data-modal-toggle="authentication-modal"
              >
                login
              </button>

              {/* {<!-- Main modal -->} */}
              <div
                id="authentication-modal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full "
              >
                <div class="relative w-full h-full max-w-md md:h-auto ">
                  {/* {<!-- Modal content -->} */}
                  <div class="relative  rounded-lg shadow bg-gray-700 ">
                    <button
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="authentication-modal"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Sign in to HealthifyMe
                      </h3>
                      <form class="space-y-6" action="/">
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Enter your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div class="flex justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required
                              />
                            </div>
                            <label
                              for="remember"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Remember me
                            </label>
                          </div>
                          <a
                            href="/"
                            class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Login to your account
                        </button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered?{" "}
                          <a
                            href="/"
                            class="text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Create account
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {<!-- Dropdown menu -->} */}
            <div
              id="dropdownNotification"
              class="hidden z-20 w-full max-w-sm  rounded divide-y  shadow dark:bg-gray-800 dark:divide-gray-700"
              aria-labelledby="dropdownNotificationButton"
            >
              <div class="block py-2 px-4 font-medium text-center  bg-gray-800 text-white">
                Notifications
              </div>
              <div class="divide-y divide-gray-100 dark:divide-gray-700">
                <a
                  href="/"
                  class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-11 rounded-full"
                      src={"https://res.cloudinary.com/dkqxnquga/image/upload/v1671958702/images_n49uxa.jpg"}
                      alt={"Jese image"}
                    />
                    <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      New message from{" "}
                      <span class="font-semibold text-gray-900 dark:text-white">
                        Jese Leos
                      </span>
                      : "Hey, what's up? All set for the presentation?"
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-11 rounded-full"
                      src={"https://res.cloudinary.com/dkqxnquga/image/upload/v1671958702/images_n49uxa.jpg"}
                      alt={"Joseph image"}
                    />
                    <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">
                        Joseph Mcfall
                      </span>{" "}
                      and
                      <span class="font-medium text-gray-900 dark:text-white">
                        5 others
                      </span>{" "}
                      started following you.
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-11 rounded-full"
                      src={"https://res.cloudinary.com/dkqxnquga/image/upload/v1671958702/images_n49uxa.jpg"}
                      alt={"Bonnie image"}
                    />
                    <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-800">
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>{" "}
                      and
                      <span class="font-medium text-gray-900 dark:text-white">
                        141 others
                      </span>{" "}
                      love your story. See it and view more stories.
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-11 rounded-full"
                      src={"https://res.cloudinary.com/dkqxnquga/image/upload/v1671958702/images_n49uxa.jpg"}
                      alt={"Leslie image"}
                    />
                    <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-800">
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">
                        Leslie Livingston
                      </span>
                      mentioned you in a comment:{" "}
                      <span class="font-medium text-blue-500" href="/">
                        @bonnie.green
                      </span>
                      what do you say?
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      1 hour ago
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="w-11 h-11 rounded-full"
                      src="https://res.cloudinary.com/dkqxnquga/image/upload/v1671958702/images_n49uxa.jpg"
                      alt={"Robert image"}
                    />
                    <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-800">
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">
                        Robert Brown
                      </span>
                      posted a new video: Glassmorphism - learn how to implement
                      the new design trend.
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      3 hours ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="/"
                class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
              >
                <div class="inline-flex items-center ">
                  <svg
                    class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  View all
                </div>
              </a>
            </div>
          </div>
          {/* {<!-- noti -->} */}
          <button
            type="button"
            class="flex mr-1 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-18 h-14 rounded-full"
              src="https://res.cloudinary.com/dkqxnquga/image/upload/v1671958702/images_n49uxa.jpg"
              alt={"user photo"}
            />
          </button>
          {/* {<!-- Dropdown menu -->} */}
          <div
            class="z-50 hidden my-4 text-base list-none  divide-y rounded shadow bg-gray-700 divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-white">
                Bonnie Green
              </span>
              <span class="block text-sm font-medium  truncate text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul class="py-1" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* {<!-- notification -->} */}

        <div
          class="items-center justify-between hidden w-full h-24  md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col p-4 mt-4   bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-semibold md:border-0  ">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white   hover:scale-110 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white   hover:scale-110 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white   hover:scale-110 md:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white   hover:scale-110 md:p-0 "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white   hover:scale-110 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
