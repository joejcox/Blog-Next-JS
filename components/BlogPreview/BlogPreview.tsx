import Link from 'next/link';
import BlogPreviewPost from 'components/BlogPreviewPost/BlogPreviewPost';
import { BlogPost } from 'components/BlogPreviewPost/BlogPreviewPost';

interface Posts {
    posts: BlogPost[];
    maxDisplay?: number;
    imageOnly?: boolean;
}

const BlogPreview = ({ posts, maxDisplay }: Posts) => {
    return (
        <>
            <section className="section section__blog_feed">
                <div className="container">
                    <h2 className="title section__title is-3 has-text-centered">Latest News</h2>
                    <div className="columns is-multiline">
                        {posts.slice(0, maxDisplay).map((post, index) => {
                            return <BlogPreviewPost key={index} {...post} />;
                        })}
                    </div>
                </div>

                <style jsx>{`
                    .section__blog_feed {
                        background: #f7f7f7;
                    }
                `}</style>

                {maxDisplay ? (
                    maxDisplay !== -1 ? (
                        <aside className="section has-text-centered">
                            <div className="container">
                                <Link href="/blog/">
                                    <a className="button blog_preview__more is-primary">View All</a>
                                </Link>
                            </div>
                        </aside>
                    ) : null
                ) : null}

                <style jsx>{`
                    .blog_preview__more {
                        padding: 1.8rem 3.6rem;
                        width: 20rem;
                        max-width: 100%;
                        font-size: 1.2rem;
                        border-radius: 0;
                    }
                `}</style>
            </section>
        </>
    );
};

export default BlogPreview;
