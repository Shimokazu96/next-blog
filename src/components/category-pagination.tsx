import PaginationLink from "@/components/pagination-link";
import { CategoryPaginate } from "@/types/types";


export default function CategoryPagination(props: CategoryPaginate) {
    const PER_PAGE = 10;
    const totalCount = props.pages.total;
    const totalPages = props.pages.totalPages;
    const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
    type Props = {
        category_name: string;
    };
    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    {range(1, totalPages).map((number, index) => (
                        <li key={index} className="page-item cursor-pointer">
                            <PaginationLink
                                href={`/category/${props.category_id}/?page=${number}`}
                                number={number}
                                current_page={props.current_page}
                            />
                        </li>
                    ))}
                </ul>
                {/* <ul className="flex list-style-none">
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                            href="#"
                        >
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            Next
                        </a>
                    </li>
                </ul> */}
            </nav>
        </div>
    );
}
