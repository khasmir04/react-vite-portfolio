import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface NavButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode,
}

const NavButton = (props: NavButtonProps) => {
  const { children, ...rest } = props
  return (
    <a {...rest} className='text-lg'>{children}</a>
  )
}

export default NavButton