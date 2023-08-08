import { HTMLAttributes } from 'react'

export interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string
}

const PageTitle = (props: PageTitleProps) => {
  const { title, ...rest } = props
  return (
    <h2
      {...rest}
      className='text-3xl'
    >
      {title}
    </h2>
  )
}

export default PageTitle
