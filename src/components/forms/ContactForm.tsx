import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const StyledDiv = styled.div`
padding: 4px;
`

const StyledButton = styled.button`
padding: 4px 8px;
color: white;
background-color: #EB8258;
border-radius: 4px;
`

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xlekwdqj");
  if (state.succeeded) {
    return <p className='text-2xl p-9 bg-[#1b1919] text-white rounded-xl'>Thanks, I'll be getting in touch soon.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='p-9 bg-[#1b1919] text-white flex flex-col rounded-xl space-y-8'>
      <h2 className='text-3xl'>Let's get connected</h2>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
        <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@khasmir.com" required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
        <textarea id="message" name='message' rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." defaultValue={""} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <StyledButton type="submit" disabled={state.submitting}>
        Send message
      </StyledButton>
    </form>
  );
}

export default ContactForm
