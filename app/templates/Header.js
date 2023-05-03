import Navigation from '../components/Navigation'
import HeaderIcons from '../components/HeaderIcons'
import Link from 'next/link'


export default function Header() {
  return (
        <header>
            <nav className='flex items-center justify-between px-24 h-24'>
                <Navigation/>
                <Link href="/" className='uppercase text-xl w-2/6 text-center'>Swanky<span className='text-orange-600'>.</span></Link>
                <HeaderIcons/>
            </nav>
        </header>
  )
}
