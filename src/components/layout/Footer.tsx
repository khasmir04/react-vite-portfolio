const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='w-100 p-5 bg-[#1b1919]'>
      <div className='container m-auto flex flex-col justify-between items-center'>
        <p className='text-3xl ml-auto'>{`</ Dev KJ >`}</p>
        <p className='text-center text-gray-500'>Copyright &copy; {currentYear}</p>
        <p className='text-center text-gray-500'>Khasmir Jhon Caluscusao</p>
      </div>
    </div>
  )
}

export default Footer