import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string
}

const PageTitle = (props: PageTitleProps) => {
  const { title, className, ...rest } = props
  const merged = twMerge('text-3xl', className)

  return (
    <h2
      {...rest}
      className={merged}
    >
      {title}
    </h2>
  )
}

export default PageTitle
