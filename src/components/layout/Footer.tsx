const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='w-100 bg-[#1b1919] p-5'>
      <div className='container m-auto flex flex-col items-center justify-between'>
        <p className='ml-auto text-3xl font-bold'>{`</ Dev KJ >`}</p>
        <p className='text-gray-500 text-center'>
          Copyright &copy; {currentYear}
        </p>
        <p className='text-gray-500 text-center'>Khasmir Jhon Caluscusao</p>
      </div>
    </div>
  )
}

export default Footer
