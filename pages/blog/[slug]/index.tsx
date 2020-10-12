import Layout from 'components/Layout/Layout';

const Post = () => {
    return (
        <Layout docTitle="Blog Post Title">
            <section className="section">
                <div className="container">
                    <h1 className="title is-4"></h1>
                    <p className="content"></p>
                </div>
            </section>
        </Layout>
    );
};

export default Post;
