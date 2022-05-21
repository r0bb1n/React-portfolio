import ModalWithInternalState from './modal-internal-state'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <a href="mailto:" className="footerMail">kjellgrenrobin@gmail.com</a>
        <p>Copyright 2022</p>
      </div>
      <div className="footer__right">
      <ModalWithInternalState
        activator={({ setShow }) => (
          <button
            className="modalBtn"
            type="button"
            onClick={() => setShow(true)}
          >
            Random fun fact
          </button>
        )}
      >
        I have had the world high score in a Pokemon game once!
      </ModalWithInternalState>
      </div>
    </div>
  )
}

export default Footer