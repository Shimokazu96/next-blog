import { ReactElement } from "react";
import { useState, useEffect } from "react";
import { wpClient } from "@/lib/wpapi";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

type LayoutProps = Required<{
    readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        wpClient.categories().orderby('count').order('desc').then((response) => {
            setCategories(response);
        });
    }, []);
    return (
        <>
            <Header categories={categories} />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <Sidebar categories={categories} />
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
