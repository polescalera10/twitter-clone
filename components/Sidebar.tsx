import React from 'react'
import SidebarRow from './SidebarRow'
import {
  BellIcon,
  HomeIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img src="https://links.papareact.com/drq" className='m-3 h-10 w-10' alt="" />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notifications' />
      <SidebarRow Icon={MailIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow Icon={CollectionIcon} title='Lists' />
      <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sing Out' : 'Log In'} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
    </div>
  )
}

export default Sidebar