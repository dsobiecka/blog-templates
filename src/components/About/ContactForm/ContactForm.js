import PropTypes from 'prop-types';
import { Wrapper } from './ContactForm.styles';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2jfr0pp', 'template_8yka0pf', e.target, 'hjHJUhPocsrjGbdF7')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Send</button>
      </form>
    </Wrapper>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
