import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
  <>
    <button className='btn' onClick={() => setShow(!show)}>
      show/hide
    </button>
    {show && <Item />}
  </>);
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    // Adding event listener for resize window
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
    // With this callback function in return, the event listener to resize is removed from list of events in browser
  },[]);

  return (
    <div style={{marginTop:'2rem'}}>
      <h1>window</h1>
      <h2>size : {size} px</h2>
    </div>
  );
}

export default ShowHide;
