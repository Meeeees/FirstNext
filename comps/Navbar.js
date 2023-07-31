import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="logo">
            <h1 className='logo'>
                <Image src="/logo.png" width={128} height={77} />
            </h1>
            <Link legacyBehavior href={"/"}><a>Home</a></Link>
            <Link legacyBehavior href={"/about"}><a>About</a></Link>
            <Link legacyBehavior href={"/ninjas"}><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;