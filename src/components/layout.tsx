import { ReactElement } from "react";
import WP from "wpapi";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const wpClient = new WP({
    endpoint: `${process.env.API_URL}/wp-json`,
});
type LayoutProps = Required<{
    readonly children: ReactElement;
}>;
const getCategories = async () => {
    const data = await wpClient.categories(); // perPage()で表示ページ数指定

    return {
        props: data,
    };
};
const categories = getCategories()
export const Layout = ({ children }: LayoutProps) => (
    (
        <>
            <Header props={categories} />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <Sidebar />
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
);
