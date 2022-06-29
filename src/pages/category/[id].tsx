import { wpClient } from "@/lib/wpapi";
import { Layout } from "@/components/layout";
import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import CategoryPagination from "@/components/category-pagination";
import Props from "@/types/posts";

type Query = {
    id: string;
    page: number;
};

// export const getStaticPaths = async () => {
//     const categories = await wpClient.categories();
//     return {
//         paths: categories.map((category) => ({
//             query: {
//                 id: String(category.id),
//             },
//         })),
//         fallback: false,
//     };
// };

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
            category_id: query.id,
            current_page: query.page ? query.page : 1,
            category_name: category_name.name,
            pages: pages,
        },
    };
};

const Category = (props: Props) => {
    console.log(props);
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
