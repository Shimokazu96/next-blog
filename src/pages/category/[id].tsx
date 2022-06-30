import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import CategoryPagination from "@/components/category-pagination";
import { Layout } from "@/components/layout";
import { wpClient } from "@/lib/wpapi";

type Props = {
    category_name: string;
    posts: any;
    pages: any;
    current_page: number;
    category_id: number;
};


export const getServerSideProps = async ({ query }: any) => {
    const posts = await wpClient.posts().param("categories", query.id).param("page", query.page);
    const category_name = await wpClient.categories().id(query.id);
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
            category_id: Number(query.id),
            current_page: query.page ? Number(query.page) : 1,
            category_name: category_name.name,
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
                <CategoryPagination
                    pages={props.pages}
                    category_id={props.category_id}
                    current_page={props.current_page}
                />
            </div>
        </Layout>
    );
};

export default Category;
