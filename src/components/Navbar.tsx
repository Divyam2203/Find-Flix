import ScrollIntoView from "react-scroll-into-view";
import logo from "../assets/FIND FLIX-logo/vector/default-monochrome.svg";

const Navbar = ({ onDarkMode }: any) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full border-b dark:border-slate-700 bg-white dark:bg-slate-600 bg-opacity-80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <ScrollIntoView selector="#header">
              <div className="flex flex-1 items-stretch justify-start p-2">
                <button className="flex flex-shrink-0 items-center">
                  <img className="block h-12 w-auto" src={logo} />
                </button>
              </div>
            </ScrollIntoView>
            <div className="flex flex-shrink-0 items-center space-x-8 px-2 py-3">
              <button
                onClick={() => onDarkMode()}
                className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="block fill-violet-700 dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  className="hidden fill-yellow-500 dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
