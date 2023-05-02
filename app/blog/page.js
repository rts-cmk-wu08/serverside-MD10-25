import Link from "next/link"
import { use } from "react"

export const metadata = {
  title: 'SWANKY blogs',
};

async function getBlogs(){
  return (await fetch(`http://localhost:4000/posts`, { next: { revalidate: 0 } })).json()
}

export default function StaticPropsPage() {
  const allBlogs = use(getBlogs())
  
    return (
    <section>
            <div className="bg-hero w-full h-[370px]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-7xl">Blog</h1>
                    <p>Home Blog</p>
                </div>
            </div>

            <div>
                <div className="flex flex-wrap mx-72">
			            {allBlogs?.map(blog =>
			            		<div key={blog.id} className="flex flex-col flex-[33.333333333333333333333333333333%] gap-2">

                        <Link href={`/blog/${blog.id}`}>
                          <img src="https://placehold.co/200x200" alt="placeholder image" className="mt-6 w-[300px] h-[300px]"/>
                        </Link>

			            			<Link href={`/blog/${blog.id}`} className="text-center">{blog.title}</Link>

			            			<Link href={`/blog/${blog.id}`} className="text-center">Et eller andet text </Link>
			            		</div>
			            )}
                </div>
            </div>
		</section>
    )
  }