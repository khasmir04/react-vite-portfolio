import styled from 'styled-components'

const StyledSpan = styled.span`
  color: #eb8258;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='w-100 bg-cod-gray p-5'>
      <div className='container m-auto flex flex-col items-center justify-between'>
        <p className='ml-auto text-3xl font-bold'>
          <StyledSpan>{`</`}</StyledSpan> Dev KJ<StyledSpan> {`>`}</StyledSpan>
        </p>
        <p className='text-center text-gray-500'>
          Copyright &copy; {currentYear}
        </p>
        <p className='text-center text-gray-500'>Khasmir Jhon Caluscusao</p>
      </div>
    </div>
  )
}

export default Footer
