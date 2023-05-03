import { BsTruck } from 'react-icons/bs'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { FaGift } from 'react-icons/fa'



async function getStarted() {
    return (await fetch(`http://localhost:4000/started`, { next: { revalidate: 30 } })).json()
}

export default async function SwankyStarted() {

  const allStarted = await getStarted()
  const allIcons = allStarted.bullets
  return (
    <div className="flex justify-between px-28">
        <img src="https://placehold.co/600x600" alt="placeholder image"/>
        <div className='mt-16'>
            <div>
                <p className='text-5xl w-[32rem]'>{allStarted.headline}</p>
                <p className='w-[40rem] mt-6'>{allStarted.text}</p>
            </div>
            <div>
            {allIcons?.map(icon =>
                            <div key={icon.id} className='flex gap-6 mt-6'>
                                {icon.icon === 'truck' && <BsTruck className='text-orange-600 text-3xl mt-2'/>}
                                {icon.icon === 'bag-shopping' && <MdOutlineShoppingBag className='text-orange-600 text-3xl mt-2'/>}
                                {icon.icon === 'gift' && <FaGift className='text-orange-600 text-3xl mt-2'/>}
                                <div>
                                    <p className='text-2xl'>{icon.name}</p>
                                    <p className='opacity-60'>{icon.text}</p>    
                                </div>
                            </div>
			            )}
            </div>
        </div>
    </div>
  )
}
