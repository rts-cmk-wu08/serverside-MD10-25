import Link from "next/link";


const NotFound = () => {
    return ( 
        <section className="flex flex-col items-center justify-center w-full h-full gap-4">
            <h1 className="text-7xl">Sorry! Page Not Found</h1>
            <p className="opacity-60">Sorry, page that you're searching for dosen't exist</p>
            <Link href="/" className="uppercase bg-black w-40 h-8 text-white flex items-center justify-center">go to home</Link>
        </section>
     );
}
 
export default NotFound;