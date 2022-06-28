import Link from "next/link";

const ArticleTitle = (props) => {
    return (
        <div className="border-b pb-4 md:pb-6">
            <h2 className="text-gray-800 text-lg lg:text-xl font-bold">
                {props.category_name}記事一覧
            </h2>
        </div>
    );
};

export default ArticleTitle;
