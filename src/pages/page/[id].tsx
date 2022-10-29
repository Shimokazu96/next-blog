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
    pages: {
        total: number;
        totalPages: number;
    };
    current_page: number;
    category_id: number;
    categories: any;
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
    const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, totalPages).map((number) => String(`/page/${number}`));
    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id: number = context.params.id;
    const posts = await wpClient.posts().param("page", id);
    const categories = await wpClient.categories();
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });
    return {
        props: {
            posts: posts,
            categories: categories,
            category_name: "",
            current_page: id ? id : 1,
            pages: pages,
        },
    };
};

const Category = (props: Props) => {
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

export default Category;
