import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface NavButtonProps extends ButtonHTMLAttributes<Text> {
  children: ReactNode,
  section: string,
}

const NavButton = (props: NavButtonProps) => {
  const { children, section } = props
  return (
    <a href={`#${section}`} className='text-lg'>{children}</a>
  )
}

export default NavButton