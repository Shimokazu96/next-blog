import type { NextPage } from "next";
import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import { Layout } from "@/components/layout";
import Pagination from "@/components/pagination";
import { wpClient } from "@/lib/wpapi";

type Props = {
    category_name: string;
    posts: any;
    pages: any;
    current_page: number;
};

export const getStaticProps = async () => {
    const data = await wpClient.posts().perPage(10); // perPage()で表示ページ数指定
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });

    return {
        props: {
            posts: data,
            category_name: "",
            current_page: 1,
            pages: pages,
        },
    };
};

const Home: NextPage<Props> = (props) => {
    return (
        <Layout>
            <div className="lg:col-span-2">
                <ArticleTitle category_name={props.category_name} />
                <ArticleList posts={props.posts} />
                <Pagination pages={props.pages} current_page={props.current_page} />
            </div>
        </Layout>
    );
};

export default Home;
