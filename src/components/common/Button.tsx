import { ReactNode } from 'react'
import styled from 'styled-components'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

const StyledButton = styled.a`
  background-color:#eb8258;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  :hover {
    background-color: #6320EE;
  }
`

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props
  return (
    <StyledButton href={`#${rest.href}`} className={rest.className} >{children}</StyledButton>
  )
}

export default Button