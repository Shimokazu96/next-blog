export type Posts = {
    posts: {
        id: number;
        date: string;
        title: {
            rendered: string;
        };
        excerpt: {
            rendered: string;
        };
        slug: number;
    }[];
};

export type Pages = {
    pages: {
        total: number;
        totalPages: number;
    };
};

export type Paginate = {
    current_page: number;
    pages: {
        total: number;
        totalPages: number;
    };
};
export type CategoryPaginate = {
    category_id: number;
    current_page: number;
    pages: {
        total: number;
        totalPages: number;
    };
};

export type Categories = {
    categories: {
        id: number;
        name: string;
    }[];
};
