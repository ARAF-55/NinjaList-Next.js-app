import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/download.png' width={99} height={99} />
            </div>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/ninjas"}>Ninja Listing</Link>
        </nav>
    );
}

export default Navbar;