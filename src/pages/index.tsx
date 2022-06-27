import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import type { NextPage } from "next";
import Link from "next/link";
import WP from "wpapi";
import { Layout } from "@/components/layout";

// type Props = {
//     posts: Array<string>;
//     categories:  Array<string>;
// };
const wpClient = new WP({
    endpoint: `${process.env.API_URL}/wp-json`,
});

export const getStaticProps = async () => {
    const data = await wpClient.posts().perPage(10); // perPage()で表示ページ数指定

    return {
        props: {
            posts: data,
        },
    };
};

const Home: NextPage = (props) => {
    return (
        <Layout>
            <div className="lg:col-span-2">
                <div className="border-b pb-4 md:pb-6">
                    <h2 className="text-gray-800 text-lg lg:text-xl font-bold">ブログ記事一覧</h2>
                </div>

                <div className="divide-y">
                    {props.posts.map((post) => (
                        <div key={post.id} className="flex flex-col gap-3 py-4 md:py-8">
                            <div>
                                <Link href={`${process.env.API_URL}/posts/${post.slug}`}>
                                    <a className="block text-sm font-bold">{post.title.rendered}</a>
                                </Link>
                                <span className="block font-semibold text-gray-500 text-sm ">
                                    {format(new Date(post.date), "yyyy-MM-dd")}
                                </span>
                            </div>

                            <div className="flex gap-0.5 -ml-1"></div>

                            <p className="text-gray-600 font-semibold">
                                This is a section of some simple filler text, also known as
                                placeholder text. It shares some characteristics of a real written
                                text but is random or otherwise generated. It may be used to display
                                a sample of fonts or generate text for testing.
                            </p>
                        </div>
                    ))}

                </div>

                <div className="border-t pt-6">
                    <a
                        href="#"
                        className="flex items-center text-blue-700 text-lg font-semibold transition duration-100 gap-0.5"
                    >
                        Read all reviews
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
