
async function getBlog(id) {
    return (await fetch(`http://localhost:4000/posts/${id}`)).json()
}

export async function generateMetadata({ params }){
    const blog = await getBlog(params.id);
    return { title: blog.title }
  }


export default async function StaticPage({ params }) {
    const blog = await getBlog(params.id)


    console.log(blog)
    return(
        <>
            <h1>The id is: {blog.title}</h1>
            <img src="https://placehold.co/500x500" alt="placeholder img"/>
            <p>{blog.text}</p>
        </>
    )
}
