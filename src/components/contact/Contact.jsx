import Topbar from "../topbar/Topbar";
import "./contact.scss";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from "@material-ui/icons";
function Contact() {
    const formRef = useRef();
 
  const [message, setMessage] = useState(false);
  



  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g7n6n8m",
        "template_9n4oap7",
        formRef.current,
        "user_yqimngPQxBoZsByq1zEN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contacto">
   

      <section className="contact">
        <h1 className="heading">
          {" "}
          contact <span>me</span>{" "}
        </h1>

        <div className="row">
          <div className="info-container">
            <h1>get in touch</h1>

            <p>
            I am an Electronics and Communications Engineer from Ecuador

            </p>

            <div className="box-container">
              <div className="box">
                <i className="fas fa-map">
                  <LocationOn className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>address :</h3>
                  <p>Ecuador, ambato - Tungurahua</p>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-envelope">
                  <Email className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>email :</h3>
                  <p>corozco6489@gmail.com</p>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-phone">
                  <Phone className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>number :</h3>
                  <p>+593 983592690</p>
                </div>
              </div>
            </div>

            <div className="share">
              <a href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ" target="_blank" >
                <YouTube className="fas fa-user" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/carlos-orozco-64892021/" target="_blank" >
                <LinkedIn className="fas fa-user" />{" "}
              </a>
              <a href="https://github.com/corozco6489" target="_blank">
                <Facebook className="fas fa-user" />{" "}
              </a>
              <a href="https://github.com/corozco6489" target="_blank">
                <Instagram className="fas fa-user" />{" "}
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" placeholder="your name"  name="user_name" />
              <input type="number" placeholder="your number"  name="user_number"/>
            </div>

            <div className="inputBox">
              <input type="email" placeholder="your email"    name="user_email"/>
              <input type="text" placeholder="your subject"   name="user_subject" />
            </div>

            <textarea
               name="message"
              placeholder="your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
