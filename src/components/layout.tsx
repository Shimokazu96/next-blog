import { ReactElement } from 'react'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

type LayoutProps = Required<{
    readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <Sidebar />
                    {children}
                </div>
            </div>
        </div>
        <Footer />
        {/* <Header />
        {children}
        <Footer /> */}
    </>
);
