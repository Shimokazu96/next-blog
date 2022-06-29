const PaginationLink = (props) => {
    return (
        <a
            className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:bg-gray-200 focus:shadow-none ${
                props.number == props.current_page ? "bg-gray-200" : ""
            }`}
        >
            {props.number}
        </a>
    );
};

export default PaginationLink;
