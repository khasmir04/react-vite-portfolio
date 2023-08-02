import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 4px;
`

const StyledButton = styled.button`
  padding: 4px 8px;
  color: white;
  background-color: #eb8258;
  border-radius: 4px;
`

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xlekwdqj')
  if (state.succeeded) {
    return (
      <p className='text-white rounded-xl border border-[#EB8258] border-opacity-50 bg-custom-100 p-9 text-2xl shadow-lg'>
        Thanks, I'll be getting in touch soon.
      </p>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='text-white flex flex-col space-y-8 rounded-xl border border-[#EB8258] border-opacity-50 bg-custom-100 p-9 shadow-lg'
    >
      <h2 className='text-3xl'>Let's get connected</h2>
      <div>
        <label
          htmlFor='email'
          className='text-gray-300 mb-2 block text-sm font-medium'
        >
          Your email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border p-2.5 text-sm shadow-sm'
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
          className='text-gray-300 mb-2 block text-sm font-medium'
        >
          Your message
        </label>
        <textarea
          id='message'
          name='message'
          rows={6}
          className='text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border p-2.5 text-sm shadow-sm'
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
        Send message
      </StyledButton>
    </form>
  )
}

export default ContactForm
