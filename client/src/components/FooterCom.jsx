import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
function FooterCom() {
  return (
    <Footer className="border border-t-8 border-teal-500 p-4">
      <div>
        <div>
          <div>
            {" "}
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold "
            >
              <span className="px-2 py-1 bg-gradient-to-b from-indigo-600 via-purple-400 to-blue-500 rounded-xl dark:text-white text-white">
                Azaan&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3">
            <Footer.Title title="About" />
            <Footer.LinkGroup>
              <Footer.Link>
                100 JS Project
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
