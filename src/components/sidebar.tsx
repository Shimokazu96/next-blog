import Link from "next/link";

const Sidebar = (props) => {
    return (
        <div className="lg:mx-auto">
            <div className="text-gray-800 font-bold tracking-widest text-xl uppercase mb-4">
                Category
            </div>
            <nav className="flex flex-col gap-4">
                {props.categories.map((category) => (
                    <Link key={category.id} href={`/category/${category.id}`}>
                        <a className="text-gray-600 hover:text-blue-500 active:text-blue-500 text-base font-semibold transition duration-100">
                            {category.name}
                        </a>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
