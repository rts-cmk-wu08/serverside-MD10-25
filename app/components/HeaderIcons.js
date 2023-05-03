import { FaUserAlt, FaSearch, FaHeart } from 'react-icons/fa'
import { BsCartFill} from 'react-icons/bs'



export default function HeaderIcons() {
    
  return (
    <div className='flex justify-between gap-4 w-2/6'>
        <div className='flex items-center gap-2'>
            <FaUserAlt/>
            <p className='uppercase'>Login</p>
        </div>
        <div className='flex items-center gap-2'>
            <FaSearch/>
            <input type="search" name="search" placeholder="SEARCH..." className='w-24 placeholder-black'/>
        </div>
        <div className='flex items-center gap-2'>
            <FaHeart/>
            <p>(0)</p>
        </div>
        <div className='flex items-center gap-2'>
            <BsCartFill/>
            <p>(0)</p>
        </div>
    </div>
  )
}
