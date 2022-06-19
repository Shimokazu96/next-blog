import { ReactElement } from 'react'
import Footer from "@/components/footer";
import Header from "@/components/header";

type LayoutProps = Required<{
    readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);
