import Link from "next/link"
import { use } from "react"



async function getBlogs(){
  return (await fetch(`http://localhost:4000/posts`)).json()
}

export default function StaticPropsPage() {
  const allBlogs = use(getBlogs())
    return (
    <section>
			  <h2 className="text-2xl">BLOG PAGE</h2>
        <div className="flex flex-col">
			    {allBlogs?.map(blog =>
			    		<Link href={`/blog/${blog.id}`} key={blog.id}>
			    			{blog.title}
			    		</Link>
			    )}
        </div>
		</section>
    )
  }