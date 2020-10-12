import Layout from 'components/Layout/Layout';

const Post = () => {
    return (
        <Layout docTitle="Blog Post Title">
            <section className="section">
                <div className="container">
                    <h1 className="title is-4">Blog Post Title</h1>
                    <p className="content">Blog post text</p>
                </div>
            </section>
        </Layout>
    );
};

export default Post;
