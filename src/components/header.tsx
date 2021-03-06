import Link from "next/link";
import { Categories } from "@/types/types";

const Header = (props:Categories) => {
    return (
        <div className="bg-white lg:pb-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <Link href="/">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 hover:text-blue-500 active:text-blue-500 py-4 cursor-pointer">
                        Sauna Bouya
                    </h1>
                </Link>

                <header className="flex justify-center items-center py-4 md:py-8">
                    <nav className="hidden lg:flex gap-12">
                        {props.categories.map((category) => (
                            <Link key={category.id} href={`/category/${category.id}`}>
                                <a className="text-gray-600 hover:text-blue-500 active:text-blue-500 text-lg font-semibold transition duration-100">
                                    {category.name}
                                </a>
                            </Link>
                        ))}
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;
