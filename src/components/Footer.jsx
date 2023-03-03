import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-orange-50 sm:p-6 dark:bg-orange-50">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-orange-400 text-xl font-bold"> Proverbs Market</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-400 uppercase dark:text-orange-400">
                Website
              </h2>
              <ul className="text-orange-400 dark:text-orange-400">
                <li className="mb-4">
                  <div className="text-orange-400">
                    Chiko Movie Streaming Web
                  </div>
                </li>
                <li>
                  <div className="text-orange-400">
                    Rainbow Food Journal
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-400 uppercase dark:text-orange-400">
                Follow us
              </h2>
              <ul className="text-orange-400 dark:text-orange-400">
                <li className="mb-4">
                  <div
                    className="text-orange-400"
                  >
                    Github
                  </div>
                </li>
                <li>
                  <div
                    className="text-orange-400"
                  >
                    Linkeidn
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-400 uppercase dark:text-orange-400">
                Legal
              </h2>
              <ul className="text-orange-400 dark:text-orange-400">
                <li className="mb-4">
                  <div className="text-orange-400">
                    Privacy Policy
                  </div>
                </li>
                <li>
                  <div  className="text-orange-400">
                    Terms &amp; Conditions
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 lg:my-8 border-none" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-orange-400 sm:text-center dark:text-orange-400">
            © 2023
            <span className="text-orange-400">
              Psalm™
            </span>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <div
              className="text-orange-400 hover:text-orange-400 dark:text-orange-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </div>
            <div
              className="text-orange-400 hover:text-orange-400 dark:hover:text-orange-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.41,0H0.59C0.26,0,0,0.26,0,0.59v22.82c0,0.33,0.26,0.59,0.59,0.59h22.82c0.33,0,0.59-0.26,0.59-0.59V0.59C24,0.26,23.74,0,23.41,0z M7.68,20.34H4.49V9.57h3.19V20.34zM5.08,8.03H5.06c-1.06,0-1.8-0.75-1.8-1.69c0-0.97,0.74-1.69,1.89-1.69c1.15,0,1.81,0.72,1.82,1.69C6.97,7.28,6.23,8.03,5.08,8.03zM20.34,20.34h-3.18v-5.64c0-1.34-0.48-2.25-1.69-2.25c-0.92,0-1.47,0.62-1.72,1.22c-0.09,0.22-0.11,0.53-0.11,0.84v5.82h-3.18c0,0,0.04-9.3,0-10.27h3.18v1.45c0.42-0.65,1.16-1.57,2.82-1.57c2.06,0,3.61,1.35,3.61,4.27V20.34z"/>
              </svg>
              <span class="sr-only">Linkeidn page</span>
            </div>
            <div 
              className="text-orange-400 hover:text-orange-400 dark:hover:text-orange-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
