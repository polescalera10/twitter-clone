import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  onClick?: () => {}
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div onClick={() => onClick?.()} className='group flex max-w-fit items-center cursor-pointer space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 '>
      <Icon className='w-6 h-6' />
      <p className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow