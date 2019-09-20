import React from 'react'

const Contact = () => {
    return (
      <div className="container">
      <h1 className="center white-text">Ping me!</h1>
  <form className="contact-container" method="POST" action="/contact">
      <div className="input-field">
        <div className="label-content">Name:</div>
        <input type="text" name="name" required />
    </div>
    <div className="input-field">
        <div className="label-content">Email:</div>
        <input type="email" name="email" required />
    </div>

    <div className="input-field">
        <div className="textarea">Message:</div>
        <textarea name="message" required />
    </div>

    <button className="waves-effect waves-light btn"type="submit">Send</button>

    <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Your message has been sent!</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>An error occured while submitting the form.</p>
        </div>
      }
    </div>
  </form>
  </div>
    )
}
export default Contact