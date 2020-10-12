import Layout from 'components/Layout/Layout';
import BlogPreview from 'components/BlogPreview/BlogPreview';

import { BlogPost } from 'components/BlogPreviewPost/BlogPreviewPost';

interface Posts {
    posts: BlogPost[];
}

const Blog = ({ posts }: Posts) => {
    return (
        <Layout docTitle="Blog">
            <main className="main" role="main">
                <section className="hero is-small is-primary">
                    <div className="hero-body has-text-centered">
                        <div className="container">
                            <h1 className="title">All News Posts</h1>
                        </div>
                    </div>
                </section>
                <BlogPreview posts={posts} />
            </main>
        </Layout>
    );
};

export async function getStaticProps() {
    const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
    const posts = result.articles;

    return {
        props: {
            posts,
        },
    };
}

export default Blog;
