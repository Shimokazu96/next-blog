import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white lg:pb-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 hover:text-blue-800 active:text-blue-700 py-4 cursor-pointer">
                    Sauna Bouya
                </h1>
                <header className="flex justify-center items-center py-4 md:py-8">
                    <nav className="hidden lg:flex gap-12">
                        <a
                            href="#"
                            className="text-gray-800 hover:text-blue-800 active:text-blue-700 text-lg font-semibold transition duration-100"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-700 text-lg font-semibold gap-1"
                        >
                            Features
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-800"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            ></svg>
                        </a>
                        <Link href="/post">
                            <a
                                className="text-gray-800 hover:text-blue-800 active:text-blue-700 text-lg font-semibold transition duration-100"
                            >
                                blog
                            </a>
                        </Link>
                        <a
                            href="#"
                            className="text-gray-800 hover:text-blue-800 active:text-blue-700 text-lg font-semibold transition duration-100"
                        >
                            About
                        </a>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;
