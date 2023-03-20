import { AnchorHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const StyledButton = styled.a`
  background-color:#eb8258;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  :hover {
    background-color: #1b1919;
    border: 1px solid white;
  }
`

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props
  return (
    <StyledButton {...rest} >{children}</StyledButton>
  )
}

export default Button