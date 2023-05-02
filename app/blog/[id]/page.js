
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
            <h1>{blog.title}</h1>
            <img src="https://placehold.co/1200x600" alt="placeholder image"/>
            <p>{blog.text}</p>
        </>
    )
}
