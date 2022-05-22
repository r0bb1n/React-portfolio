import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const Form = () => {
  const [inputValue, setInputValue] = useState({
      name: "",
      email: "",
      message: "",
  });

  const [displayMessage, setDisplayMessage] = useState([]);

  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputValue({...inputValue, [name]: value});
  };

  const showMessage = (e) => {
      e.preventDefault();

      setDisplayMessage([...displayMessage, {
          name: inputValue.name,
          email: inputValue.email,
          message: inputValue.message,
          id: uuidv4(),
      }]);

      setInputValue({
          name: "",
          email: "",
          message: "",
      });
  };
  
  

    return (
    <main className="contactPage">
        <div className="contact">
            <h1>Contact me!</h1>
        </div>
        <div className="contactForm">
            <form onSubmit={showMessage} className="form">
                <label>Name:</label>
                <input type="text" value={inputValue.name} name="name" onChange={handleChange} autoComplete="off" className="typing" />
                <label>Email:</label>
                <input value={inputValue.email} type="email" name="email" placeholder="youremail@mail.com" onChange={handleChange} autoComplete="off" className="typing" />
                <label>Your message:</label>
                <input value={inputValue.message} as="textarea" name="message" rows={3} onChange={handleChange} autoComplete="off" className="typing" />
                <input type="submit" className="submit" />
            </form>
        </div>
        {displayMessage.map((message) => (
            <div key={message.id} className="message">
                <p>Message from:</p>
                <p>{message.name}</p>
                <p>{message.message}</p>
            </div>
        ))}
    </main>
  )
}

export default Form