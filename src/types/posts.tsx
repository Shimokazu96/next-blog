type Props = {
    category_name: string;
    category_id: string;
    current_page: number;
    posts: {
        id: string;
        date: string;
        title: {
            rendered: string;
        };
        excerpt: {
            rendered: string;
        };
        slug: number;
    }[];
    pages: {
        total: number;
        totalPages: number;
    }[];
};

export default Props;
