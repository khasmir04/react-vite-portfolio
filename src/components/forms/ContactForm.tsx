import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 4px 8px;
  color: white;
  background-color: #eb8258;
  border-radius: 2px;
  border: 1px solid transparent;
  outline: 1px solid transparent;
  transition: all 0.5s;
  :hover {
    background-color: rgb(255 255 255 / 0.1);
    outline: 1px solid #eb8258;
    border: 1px solid #fff;
  }
`

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xlekwdqj')
  if (state.succeeded) {
    return (
      <p className='rounded-sm border border-gray-700 border-opacity-50 bg-cod-gray p-9 text-2xl text-white shadow-lg'>
        Thanks, I'll be getting in touch soon.
      </p>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-8 rounded-sm border border-gray-700 border-opacity-50 bg-cod-gray p-9 text-white shadow-lg'
    >
      <h2 className='text-3xl'>Let's stay connected!</h2>
      <div>
        <label
          htmlFor='email'
          className='mb-2 block text-left text-sm font-medium text-gray-300'
        >
          Your email:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='focus:border-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-sm border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:ring-white/10'
          placeholder='name@khasmir.com'
          required
        />
        <ValidationError
          prefix='Email'
          field='email'
          errors={state.errors}
        />
      </div>
      <div className='sm:col-span-2'>
        <label
          htmlFor='message'
          className='mb-2 block text-left text-sm font-medium text-gray-300'
        >
          Your message:
        </label>
        <textarea
          id='message'
          name='message'
          rows={6}
          className='focus:border-primary-500 focus:border-primary-500 block w-full rounded-sm border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:ring-white/10'
          placeholder='Leave a comment...'
          defaultValue={''}
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>
      <StyledButton
        type='submit'
        disabled={state.submitting}
      >
        <div className='flex items-center justify-center'>
          <span className='inline'>Send message</span>
          {state.submitting && (
            <span className='ml-2 inline'>
              <svg
                className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>
            </span>
          )}
        </div>
      </StyledButton>
    </form>
  )
}

export default ContactForm
