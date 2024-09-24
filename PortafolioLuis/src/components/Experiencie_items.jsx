import React from "react";

export class Experiencie_items extends React.Component {
  render() {
    const { title, description, link, date, empresa } = this.props;

    return (
      <>
        <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-0">
              <span className="text-red-500 -left-[42px] absolute rounded-full text-5xl">
                •
              </span>
              <h3 className="text-xl font-bold text-red-500">{title}</h3>
              <h5 className="text-xl text-gray-800 dark:text-white">
                {empresa}
              </h5>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-red-500/50">
                {date}
              </time>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
            <p className="mb-4 text-base font-normal  text-pretty">
              {description}
            </p>
          </div>
        </div>
        {link && (
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Conocer mas{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
      </>
    );
  }
}

export default Experiencie_items;
