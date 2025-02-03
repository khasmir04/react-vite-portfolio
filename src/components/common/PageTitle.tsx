import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string
  subtitle?: string
}

const PageTitle = (props: PageTitleProps) => {
  const { title, subtitle, className, ...rest } = props
  const merged = twMerge('text-3xl', className)

  return (
    <div
      {...rest}
      className={merged}
    >
      <h2>{title}</h2>
      <p className='text-base font-light text-white/50'>{subtitle}</p>
    </div>
  )
}

export default PageTitle
