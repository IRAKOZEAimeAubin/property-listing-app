import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

export const UserButton = () => {
  return (
    <Avatar className='outline-none'>
      <AvatarImage src='' />
      <AvatarFallback className='bg-[#afa5de] text-white text-center'>
        AL
      </AvatarFallback>
    </Avatar>
  )
}
