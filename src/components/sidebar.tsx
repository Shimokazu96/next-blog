import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="lg:mx-auto">
            <div className="text-gray-800 font-bold tracking-widest text-xl uppercase mb-4">
                Category
            </div>
            <nav className="flex flex-col gap-4">
                <div>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-blue-800 active:text-blue-700 text-base font-semibold transition duration-100"
                    >
                        About
                    </a>
                </div>

                <div>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-blue-800 active:text-blue-700 text-base font-semibold transition duration-100"
                    >
                        Investor Relations
                    </a>
                </div>

                <div>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-blue-800 active:text-blue-700 text-base font-semibold transition duration-100"
                    >
                        Jobs
                    </a>
                </div>

                <div>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-blue-800 active:text-blue-700 text-base font-semibold transition duration-100"
                    >
                        Press
                    </a>
                </div>

                <div>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-blue-800 active:text-blue-700 text-base font-semibold transition duration-100"
                    >
                        Blog
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
