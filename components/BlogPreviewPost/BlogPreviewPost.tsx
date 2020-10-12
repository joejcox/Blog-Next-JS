export interface BlogPost {
    url: string;
    urlToImage: string;
    description: string;
    title: string;
}

const BlogPreviewPost = ({ url, urlToImage, description, title }: BlogPost) => {
    return (
        <article className="column blog_preview is-half-tablet is-one-third-widescreen">
            <div className="blog_preview__container">
                <header className="blog_preview__header">
                    <div className="image is-3by2">
                        <a
                            className="blog_preview__image--link"
                            href={url}
                            target="_blank"
                            rel="noopener noreferer nofollow"
                        >
                            <img
                                className="blog_preview__image"
                                src={urlToImage}
                                alt={description}
                            />
                        </a>
                    </div>
                    <div className="blog_preview__content">
                        <h3 className="blog_preview__title title is-5">
                            <a href={url} target="_blank" rel="noopener noreferer nofollow">
                                {title}
                            </a>
                        </h3>
                        <p className="blog_preview__description">{description}</p>
                    </div>
                </header>
                <footer className="blog_preview__footer">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferer nofollow"
                        className="blog_preview__button button is-link is-fullwidth"
                    >
                        Read More
                    </a>
                </footer>
            </div>
            <style jsx>{`
                .blog_preview__container {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background-color: white;
                    box-shadow: 0 0 8px 2px rgba(200, 200, 200, 0.2);
                }

                .blog_preview__header {
                    flex: 1;
                }

                .blog_preview__image--link {
                    width: 100%;
                    height: 100%;
                }

                .blog_preview__image {
                    object-fit: cover;
                }

                .blog_preview__content {
                    padding: 2rem;
                }

                .blog_preview__button {
                    border-radius: 0;
                }

                .blog_preview__footer {
                    margin-top: 1rem;
                }
            `}</style>
        </article>
    );
};

export default BlogPreviewPost;
