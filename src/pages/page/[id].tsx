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
    category_id: number;
};

export const getStaticPaths = async () => {
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });
    const totalCount = pages.total;
    const totalPages = pages.totalPages;
    const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, totalPages).map((number) => String(`/page/${number}`));
    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id:number = context.params.id;
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
            current_page: id ? id : 1,
            pages: pages,
        },
    };
};

const Category = (props: Props) => {
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

export default Category;
