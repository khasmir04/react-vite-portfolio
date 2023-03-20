const PageTitle = (props: { title: string }) => {
  const { title } = props
  return (
    <h2 className='text-3xl'>{title}</h2>
  )
}

export default PageTitle