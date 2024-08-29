'use client'

import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {UserButton} from './userButton'

export const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav className='bg-secondary flex justify-between items-center p-4 rounded-xl w-[98%] shadow-sm bg-[#f2f1f9]'>
      <span className='font-bold text-lg tracking-widest'>AKAVUMO</span>
      <div className='flex gap-x-4'>
        <Button asChild variant={pathName === '/' ? 'default' : 'outline'}>
          <Link href='/'>Properties</Link>
        </Button>
        <Button
          asChild
          variant={pathName === '/agents' ? 'default' : 'outline'}
        >
          <Link href='/agents'>Agents</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}
