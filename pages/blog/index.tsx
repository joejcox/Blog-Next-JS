import Layout from 'components/Layout/Layout';
import BlogPreview from 'components/BlogPreview/BlogPreview';

const Blog = ({ posts }) => {
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
                <BlogPreview posts={posts} maxDisplay={-1} />
            </main>
        </Layout>
    );
};

export default Blog;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
    const posts = result.articles;

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    };
}
