
async function getBlog(id) {
    return (await fetch(`http://localhost:4000/posts/${id}`, { next: { revalidate: 0 } })).json()
}

export async function generateMetadata({ params }){
    const blog = await getBlog(params.id);
    return { title: blog.title }
  }


export default async function Blogpage({ params }) {
    const blog = await getBlog(params.id)


    console.log(blog)
    return(
        <section>
            <div className="bg-hero w-full h-[250px]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-7xl">Blog Detail</h1>
                    <p>Home Blog Blog detail</p>
                </div>
            </div>
            <div className="flex flex-col mx-60 mt-16">
                <h1 className="text-3xl">{blog.title}</h1>
                {/* Man kan også bruge Image som man kan import fra Next */}
                <img src="https://placehold.co/1200x600" alt="placeholder image" className="mt-6"/>
                <p className="mt-10">{blog.text}</p>
            </div>
        </section>
    )
}
