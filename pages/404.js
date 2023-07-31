import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const errorPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])

    return (
        <div className="notfound">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/" legacyBehavior><a>Homepage</a></Link></p>
        </div>

    );
}

export default errorPage;