import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import Link from "next/link";
import Props from "@/types/posts";

const ArticleList = (props: Props) => {
    return (
        <div className="divide-y">
            {props.posts.map((post) => (
                <div
                    key={post.id}
                    className="flex flex-col gap-3 py-4 md:py-8 hover:bg-gray-100 active:bg-gray-100"
                >
                    <Link href={`${process.env.API_URL}/posts/${post.slug}`}>
                        <a>
                            <div>
                                <div className="block text-sm font-bold">{post.title.rendered}</div>
                                <span className="block font-semibold text-gray-500 text-sm ">
                                    {format(new Date(post.date), "yyyy-MM-dd")}
                                </span>
                            </div>

                            <div className="flex gap-0.5 -ml-1"></div>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt.rendered,
                                }}
                                className="text-gray-600 font-semibold"
                            />
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
