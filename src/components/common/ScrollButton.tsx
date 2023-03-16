import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Heading = styled.h1`
   text-align: center;
   color: green;
`;

const Content = styled.div`
   overflow-y: scroll;
   height: 2500px;
`;

const Button = styled.div`
   position: fixed; 
   width: 100%;
   bottom: 40px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #EB8258;
`

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  );
}

export default ScrollButton;
