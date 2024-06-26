import bigLogo from "../assets/FIND FLIX-logo/vector/default-monochrome-white.svg";
import heroImage from "../assets/myke-simon.jpg";

interface headerProp {
  query: string;
  setQuery: any;
}

const Header = ({ query, setQuery }: headerProp) => {
  return (
    <div className="snap-start" id="header">
      <div
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
        className="flex flex-col justify-center bg-slate-600 bg-cover bg-center bg-no-repeat pt-20 align-middle bg-blend-multiply"
      >
        <img
          src={bigLogo}
          alt=""
          className="mx-auto size-80 w-full max-w-xl fill-til p-8"
        />
        <div className="mx-auto mb-8 w-full max-w-sm">
          <label
            htmlFor="default-email"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 rtl:inset-x-0">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
            </div>
            <input
              type="text"
              id="text"
              className="block w-full rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:border-til focus:ring-til dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-til"
              placeholder="Find your next binge..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
