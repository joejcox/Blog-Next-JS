import Layout from 'components/Layout/Layout';
import { BlogPost } from 'components/BlogPreviewPost/BlogPreviewPost';

// interface Article {
//     post: BlogPost[];
// }

const Post = () => {
    // const pathname = document.location.pathname.replace(/\-/g, ' ');
    // const article = paths.map((post) => {
    //     post.title === `/blog/${pathname}` ? post : null;
    // });
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
