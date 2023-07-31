import Link from 'next/link'

const errorPage = () => {
    return (
        <div className="notfound">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/" legacyBehavior><a>Homepage</a></Link></p>
        </div>

    );
}

export default errorPage;