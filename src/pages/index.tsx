import type { NextPage } from "next";
import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Pagination from "@/components/pagination";
import Sidebar from "@/components/sidebar";
import { wpClient } from "@/lib/wpapi";

type Props = {
    category_name: string;
    posts: any;
    categories: any;
    pages: any;
    current_page: number;
};

export const getStaticProps = async () => {
    const data = await wpClient.posts().perPage(10); // perPage()で表示ページ数指定
    const categories = await wpClient.categories(); 
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });

    return {
        props: {
            posts: data,
            categories: categories,
            category_name: "",
            current_page: 1,
            pages: pages,
        },
    };
};

const Home: NextPage<Props> = (props) => {
    return (
        <>
            <Header categories={props.categories} />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <Sidebar categories={props.categories} />
                        <div className="lg:col-span-2">
                            <ArticleTitle category_name={props.category_name} />
                            <ArticleList posts={props.posts} />
                            <Pagination pages={props.pages} current_page={props.current_page} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
