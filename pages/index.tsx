import Layout from 'components/Layout/Layout';
import BlogPreview from 'components/BlogPreview/BlogPreview';

const Home = ({ posts }) => {
    console.log(posts);
    return (
        <Layout docTitle="Home">
            <>
                <section className="hero is-medium is-primary has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Blog about something</h1>
                            <h2 className="subtitle">
                                If you want articles about something, look no further
                            </h2>
                        </div>
                    </div>
                </section>
                <main className="main" role="main">
                    <section className="section section__website_intro has-text-centered">
                        <div className="container">
                            <h3 className="title is-4">Here's a section heading</h3>
                            <p className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                vitae risus nec libero tincidunt cursus molestie sit amet lorem.
                            </p>
                        </div>
                    </section>
                    <BlogPreview posts={posts} maxDisplay={6} />
                </main>
            </>
        </Layout>
    );
};

export default Home;

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
