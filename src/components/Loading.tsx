import { useEffect, useState } from "react";

const Loading = () => {
  const [searchTimeout, setSearchTimeout] = useState(false);

  let loadingScreen = (
    <div className="flex h-96 items-center justify-center space-x-2 bg-gray-100 py-8 dark:bg-gray-800">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black"></div>
    </div>
  );

  let errorScreen = (
    <div className="flex h-96 items-center justify-center space-x-2 bg-gray-100 py-8 dark:bg-gray-800">
          <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">Sorry, we couldn't find this page.</p>
        </div>
    </div>
    </div>
  )

  useEffect(() => {
    let timerOut = setTimeout(() => {
      setSearchTimeout(true)
    }, 5000);
    return () => clearTimeout(timerOut);
  }, [searchTimeout]);

  return <>{searchTimeout ? errorScreen:loadingScreen}</>;
};

export default Loading;
