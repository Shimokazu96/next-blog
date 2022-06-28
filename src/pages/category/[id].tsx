import { wpClient } from "@/lib/wpapi";
import { Layout } from "@/components/layout";
import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import Pagination from "@/components/pagination";

export const getStaticPaths = async () => {
    const categories = await wpClient.categories();
    return {
        paths: categories.map((category) => ({
            params: {
                id: String(category.id),
            },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const posts = await wpClient.posts().param("categories", params.id);
    const category_name = await wpClient.categories().id(params.id);
    const pages = await wpClient
        .posts()
        .param("categories", params.id)
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });
    return {
        props: {
            posts: posts,
            category_name: category_name.name,
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
