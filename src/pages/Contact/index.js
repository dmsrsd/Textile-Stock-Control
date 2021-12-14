import "./contact.css";
import { address, email, phone } from "../../assets";
import { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cn1ycox", //Service ID
        "template_c9937qi", //Template ID
        formRef.current,
        "user_eLHDYIxKVY3m9bxozIsDy" //Integration
      )
      .then(
        (result) => {
          console.log("RESULT", result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              <a href="https://wa.me/6289638798119?text=Isi Pesan">
                Chat Via WhatsApp
              </a>
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              dmsrsdi@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              East Jakarta, Indonesia
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b className="story">What’s your story?</b> Get in touch. Always
            available for freelancing if the right project comes along. me.
          </p>
          <div className="formulir">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{
                  backgroundColor: darkMode ? "#333" : "white",
                  color: darkMode && "white",
                }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{
                  backgroundColor: darkMode ? "#333" : "white",
                  color: darkMode && "white",
                }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{
                  backgroundColor: darkMode ? "#333" : "white",
                  color: darkMode && "white",
                }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{
                  backgroundColor: darkMode ? "#333" : "white",
                  color: darkMode && "white",
                }}
                rows="5"
                placeholder="Message"
                name="message"
              />

              <button>Submit</button>
              {done && " Your Message has been sent"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
