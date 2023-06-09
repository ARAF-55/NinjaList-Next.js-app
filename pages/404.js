import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <h1>Opsss....</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href={"/"} className='not-found-a'>Homepage</Link></p>
        </div>
    );
}

export default Notfound;