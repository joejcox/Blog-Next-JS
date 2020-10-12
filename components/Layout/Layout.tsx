import Head from 'next/head';
import Link from 'next/link';
import styles from 'assets/styles/layout.module.scss';

interface LayoutProps {
    docTitle: string;
    children: JSX.Element;
}

const Layout = ({ docTitle, children }: LayoutProps) => {
    return (
        <div className="wrapper">
            <Head>
                <title>{docTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.css"
                />
            </Head>
            <div className="wrapper__top">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="https://bulma.io">
                                        <img
                                            src="https://bulma.io/images/bulma-logo.png"
                                            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                                            width="112"
                                            height="28"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="navbar-end">
                                <Link href="/">
                                    <a className="navbar-item">Home</a>
                                </Link>
                                <Link href="/blog/">
                                    <a className="navbar-item">Blog</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {children}
            </div>
            <div className="wrapper__bottom">
                <footer className="site_footer">
                    <div className="container">Footer Info</div>
                </footer>
            </div>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 100vh;
                }

                .wrapper__top {
                    flex: 1;
                }

                .site_footer {
                    padding: 1rem 0;
                    background: #222;
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default Layout;
