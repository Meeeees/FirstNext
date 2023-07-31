import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className="logo">
            <h1 className='logo'>Ninjas</h1>
            <Link legacyBehavior href={"/"}><a>Home</a></Link>
            <Link legacyBehavior href={"/about"}><a>About</a></Link>
            <Link legacyBehavior href={"/ninjas"}><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;