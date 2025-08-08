import { AnchorHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props
  const merged = twMerge(
    'bg-burnt-sienna text-base px-2 py-1 hover:bg-white/10 hover:border hover:border-white rounded-md transition duration-500',
    className
  )

  return (
    <a
      className={merged}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Button
