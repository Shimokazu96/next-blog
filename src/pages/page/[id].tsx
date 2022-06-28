import { wpClient } from "@/lib/wpapi";
import { Layout } from "@/components/layout";
import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import Pagination from "@/components/pagination";

export const getStaticPaths = async () => {
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });
    const totalCount = pages.total;
    const totalPages = pages.totalPages;
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, totalPages).map((number) => String(`/page/${number}`));
    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const posts = await wpClient.posts().param("page", id);
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });
    return {
        props: {
            posts: posts,
            category_name: "",
            pages: pages,
        },
    };
};

const Category = (props) => {
    return (
        <Layout>
            <div className="lg:col-span-2">
                <ArticleTitle category_name={props.category_name} />
                <ArticleList posts={props.posts} />
                <Pagination pages={props.pages} />
            </div>
        </Layout>
    );
};

export default Category;
