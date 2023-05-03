
async function getStarted() {
    return (await fetch(`http://localhost:4000/started`, { next: { revalidate: 30 } })).json()
}

export default async function SwankyStarted() {

  const allStarted = await getStarted()
  
    console.log(allStarted)
  return (
    <div className="flex">
        <img src="https://placehold.co/500x500" alt="placeholder image"/>
        <div>
            <div>
                <p>{allStarted.text}</p>
                <p>{allStarted.headline}</p>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}
