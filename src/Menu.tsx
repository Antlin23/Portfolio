import { useCallback, useEffect, useState } from 'react';
import './css/App.css';

import Modal from 'react-bootstrap/Modal';

function Menu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div id='menu'>
        <a id='menu--mail' href='mailto:anton.jumkil@gmail.com'><div className='menu--popup menu--mailPopup'>Contact</div><i className="fa-regular fa-envelope"></i>
        </a>
        <a id='menu--linkedIn' href='https://www.linkedin.com/in/anton-lindstr%C3%B6m-94b38622a/'><div className='menu--popup menu--linkedInPopup'>LinkedIn</div><i className="fa-brands fa-linkedin-in"></i></a>
        <a id='menu--gitHub' href='https://github.com/Antlin23/'><div className='menu--popup menu--gitHubPopup'>GitHub</div>
        <svg viewBox="0 0 16 16" width="22" height="22" aria-hidden="true"><path fillRule="evenodd" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"></path></svg>        </a>
        <button className='menu--openmodal' onClick={handleShow}>
        <div className='menu--popup menu--quotePopup'>Weekly quote</div>
          <i className="fa-solid fa-quote-left"></i>
        </button>
        
      <Modal show={show} onHide={handleClose} centered className='quote-modal'>
        <Modal.Header className='' closeButton>
          <Modal.Title className=''>
            Quote of the week
            <i className="fa-regular fa-circle-question question"></i>
            <div className='info'>
            Life-inspiring quotes I’ve handpicked from books. Check back each week for a new quote!
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
          "Action cures fear"
          <p className='small'>-The magic of thinking big, David J. Schwartz</p>
          </Modal.Body>
      </Modal>
      </div>

  );
}
export default Menu;