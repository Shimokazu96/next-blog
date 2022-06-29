import { useState, useEffect } from "react";
import { wpClient } from "@/lib/wpapi";
import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import ArticleList from "@/components/article-list";
import ArticleTitle from "@/components/article-title";
import Pagination from "@/components/pagination";

export const getStaticProps = async () => {
    const data = await wpClient.posts().perPage(10); // perPage()で表示ページ数指定
    const pages = await wpClient
        .posts()
        .get()
        .then((response) => {
            return JSON.parse(JSON.stringify(response["_paging"]));
        });

    return {
        props: {
            posts: data,
            category_name: "",
            pages: pages,
        },
    };
};

const Home: NextPage = (props) => {
    return (
        (
            <Layout>
                <div className="lg:col-span-2">
                    <ArticleTitle posts={props.category_name} />
                    <ArticleList posts={props.posts} />
                    <Pagination pages={props.pages} />
                </div>
            </Layout>
        )
    );
};

export default Home;
