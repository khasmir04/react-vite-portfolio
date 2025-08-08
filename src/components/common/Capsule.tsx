import { twMerge } from 'tailwind-merge'

const Capsule = ({
  tool,
  className,
  withDot,
}: {
  tool: string
  className?: string
  withDot?: boolean
}) => {
  const merged = twMerge(
    'rounded-full bg-gray-700/40 px-4 py-1 text-lg font-medium text-white',
    className
  )

  return (
    <>
      <span className={merged}>{tool}</span>
      {withDot && <span className={twMerge('mx-2', className)}>&middot;</span>}
    </>
  )
}

export default Capsule
