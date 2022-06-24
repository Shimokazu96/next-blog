import type { NextPage } from "next";
import { Layout } from "@/components/layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="lg:col-span-2">
                <div className="border-b pb-4 md:pb-6">
                    <h2 className="text-gray-800 text-lg lg:text-xl font-bold">Top Reviews</h2>
                </div>

                <div className="divide-y">
                    <div className="flex flex-col gap-3 py-4 md:py-8">
                        <div>
                            <span className="block text-sm font-bold">John McCulling</span>
                            <span className="block font-semibold text-gray-500 text-sm ">
                                August 28, 2021
                            </span>
                        </div>

                        <div className="flex gap-0.5 -ml-1"></div>

                        <p className="text-gray-600 font-semibold">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated. It may be used to display a sample of
                            fonts or generate text for testing.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 py-4 md:py-8">
                        <div>
                            <span className="block text-sm font-bold">Kate Berg</span>
                            <span className="block font-semibold text-gray-500 text-sm ">
                                July 21, 2021
                            </span>
                        </div>

                        <div className="flex gap-0.5 -ml-1"></div>

                        <p className="text-gray-600 font-semibold">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated. It may be used to display a sample of
                            fonts or generate text for testing.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 py-4 md:py-8">
                        <div>
                            <span className="block text-sm font-bold">Greg Jackson</span>
                            <span className="block font-semibold text-gray-500 text-sm ">
                                March 16, 2021
                            </span>
                        </div>

                        <div className="flex gap-0.5 -ml-1"></div>

                        <p className="text-gray-600 font-semibold">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated. It may be used to display a sample of
                            fonts or generate text for testing.
                        </p>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <a
                        href="#"
                        className="flex items-center text-blue-700 text-lg font-semibold transition duration-100 gap-0.5"
                    >
                        Read all reviews
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
