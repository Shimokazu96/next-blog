import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import CategoryPagination from "@/components/category-pagination";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { wpClient } from "@/lib/wpapi";

type Props = {
    category_name: string;
    posts: any;
    pages: any;
    current_page: number;
    category_id: number;
    categories: any;
};


export const getServerSideProps = async ({ query }: any) => {
    const posts = await wpClient.posts().param("categories", query.id).param("page", query.page);
    const category_name = await wpClient.categories().id(query.id);
    const categories = await wpClient.categories();
    const pages = await wpClient
        .posts()
        .param("categories", query.id)
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });
    return {
        props: {
            posts: posts,
            categories: categories,
            category_id: Number(query.id),
            current_page: query.page ? Number(query.page) : 1,
            category_name: category_name.name,
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
                            <CategoryPagination
                                pages={props.pages}
                                category_id={props.category_id}
                                current_page={props.current_page}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Category;
