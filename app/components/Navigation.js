import Link from "next/link";


export default function Navigation(){

    return(
        <nav className="w-2/6">
            <ul className="flex gap-6">
                <li><Link href="/" className="uppercase">Home</Link></li>
                <li><Link href="#" className="uppercase">About</Link></li>
                <li><Link href="#" className="uppercase">Shop</Link></li>
                <li><Link href="/blog" className="uppercase">Blogs</Link></li>
                <li><Link href="/contact" className="uppercase">Contact</Link></li>
            </ul>
        </nav>
    )
}