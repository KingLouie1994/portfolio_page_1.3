// Imports from React
import React, { useState, useEffect } from "react";

// Imports from third party libraries
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Import of external data
import Location from "../Data/Location.png";

// Imports for styling
import styled from "styled-components";

const Contact = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  });

  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast.success("Message sent!", {
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const toastifyError = () => {
    toast.error("Something went wrong, just send me a mail!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
      toastifyError();
    }
  };

  return (
    <React.Fragment>
      <NavAnchorContact id="contact"></NavAnchorContact>
      <StyledContact>
        <StyledContactLeft>
          <div></div>
          <StyledContactLeftText>
            <p>{"<h1>"}</p>
            <h1>Contact me</h1>
            <p>{"</h1>"}</p>
            <p>{"<p>"}</p>
            <h2>
              You can contact me anytime about anything related to web
              development - web applications, mobile applications, internet
              presence of yourself or your company.
            </h2>
            <p>{"</p>"}</p>
            <p>{"<form>"}</p>
            <StyledContactLeftForm onSubmit={handleSubmit(onSubmit)} noValidate>
              <StyledContactLeftInput
                type="text"
                name="name"
                ref={register({
                  required: { value: true, message: "Please enter your name" },
                  maxLength: {
                    value: 50,
                    message: "Please use 50 characters or less",
                  },
                })}
                placeholder="Name"
              />
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
              <StyledContactLeftInput
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                placeholder="Email adress"
              />
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
              <StyledContactLeftInput
                type="text"
                name="subject"
                ref={register({
                  required: { value: true, message: "Please enter a subject" },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 140 characters",
                  },
                })}
                placeholder="Subject"
              />
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
              <StyledContactLeftTextarea
                rows={3}
                name="message"
                ref={register({
                  required: true,
                })}
                placeholder="Your message"
              />
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
              <button type="submit">Send</button>
              <ToastContainer />
            </StyledContactLeftForm>
            <p>{"</form>"}</p>
            <p>{"<p>"}</p>
            <h2>
              Don't want to use the form? Just send me a{" "}
              <StyledContactLink
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:luis.schekerka@gmail.com"
                style={{ color: "#ed6f22" }}
              >
                mail
              </StyledContactLink>{" "}
              or reach out to me on{" "}
              <StyledContactLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/luisschekerka/"
                style={{ color: "#ed6f22" }}
              >
                LinkedIn!
              </StyledContactLink>
            </h2>
            <p>{"</p>"}</p>
          </StyledContactLeftText>
          <div>
            <p style={{ paddingLeft: "1vw" }}>{"</body>"}</p>
            <p>{"</html>"}</p>
          </div>
        </StyledContactLeft>
        <StyledContactRight>
          <StyledContactRightPicture src={Location} alt="Profile Picture" />
          <StyledContactRightAddress>
            <div>
              <p>Luis Schekerka,</p>
              <p>Maria-Louisen-Straße 110</p>
              <p>22301 Hamburg</p>
              <p>Germany</p>
            </div>
            <div>
              <p>
                <span style={{ color: "#ed6f22" }}>@</span>:{" "}
                luis.schekerka@gmail.com
              </p>
            </div>
          </StyledContactRightAddress>
        </StyledContactRight>
      </StyledContact>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorContact = styled.div`
  height: 100vh;
  position: absolute;
  top: 300vh;
`;

const StyledContact = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledContactLeft = styled.div`
  width: 45vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 3vw;
  padding: 1vw 0 1vw 1vw;
  p {
    color: #8ed3f4;
    font-family: "La Belle Aurore", cursive;
  }
  @media (max-width: 2100px) and (orientation: landscape) {
    left: 3.5vw;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    left: 4vw;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    left: 4.5vw;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    left: 5vw;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    left: 5.5vw;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    left: 6vw;
  }
  @media (orientation: portrait) {
    right: 3vw;
    width: 94vw;
    padding: 5vh 1vh 2vh 1vh;
  }
  @media (max-width: 1800px) and (orientation: portrait) {
    padding: 7vh 1vh 2vh 1vh;
  }
  @media (max-width: 1400px) and (orientation: portrait) {
    padding: 8vh 1vh 2vh 1vh;
  }
  @media (max-width: 1200px) and (orientation: portrait) {
    padding: 9vh 1vh 2vh 1vh;
  }
  @media (max-width: 1000px) and (orientation: portrait) {
    padding: 10vh 1vh 2vh 1vh;
  }
  @media (max-width: 800px) and (orientation: portrait) {
    padding: 11vh 1vh 2vh 1vh;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    padding: 12vh 1vh 2vh 1vh;
  }
  @media (max-width: 400px) and (orientation: portrait) {
    p {
      font-size: 12px;
    }
  }
`;

const StyledContactLeftText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
  h1 {
    padding-left: 1vw;
  }
  h2 {
    padding-left: 1vw;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
  }
`;

const StyledContactLeftForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 1vw;
  button {
    width: 25%;
    color: #ed6f22;
    background: none;
    border: 1px solid #ed6f22;
    padding: 10px 18px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
  }
  .errorMessage {
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
    color: #8ed3f4;
  }
  @media (max-width: 1200px) {
    button {
      width: 30%;
      height: 30px;
      padding: 0;
    }
  }
  @media (max-width: 500px) {
    button {
      width: 47%;
      height: 25px;
      padding: 0;
    }
  }
`;

const StyledContactLeftInput = styled.input`
  width: 100%;
  height: 50px;
  color: #ed6f22;
  background-color: #002552;
  border: 0;
  padding: 15px;
  margin: 5px 0 5px 0;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  :focus {
    outline: none;
    border-bottom: 1px solid #ed6f22;
  }
  ::placeholder {
    color: #ed6f22;
  }
  @media (max-width: 800px) {
    height: 30px;
  }
  @media (max-width: 600px) {
    margin: 2px 0 2px 0;
  }
`;

const StyledContactLeftTextarea = styled.textarea`
  width: 100%;
  color: #ed6f22;
  background-color: #002552;
  border: 0;
  padding: 15px;
  margin: 5px 0 5px 0;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  :focus {
    outline: none;
    border-bottom: 1px solid #ed6f22;
  }
  ::placeholder {
    color: #ed6f22;
  }
  @media (max-width: 800px) {
    height: 90px;
  }
  @media (max-width: 600px) {
    height: 45px;
  }
`;

const StyledContactLink = styled.a`
  text-decoration: none;
`;

const StyledContactRight = styled.div`
  width: 47vw;
  height: 100vh;
  position: absolute;
  left: 53vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 2100px) and (orientation: landscape) {
    left: 53.5vw;
    width: 46.5vw;
  }
  @media (max-width: 1900px) and (orientation: landscape) {
    left: 54vw;
    width: 46;
  }
  @media (max-width: 1700px) and (orientation: landscape) {
    left: 54.5vw;
    width: 45.5vw;
  }
  @media (max-width: 1600px) and (orientation: landscape) {
    left: 55vw;
    width: 45vw;
  }
  @media (max-width: 1400px) and (orientation: landscape) {
    left: 55.5vw;
    width: 44.5vw;
  }
  @media (max-width: 1200px) and (orientation: landscape) {
    left: 56vw;
    width: 44vw;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

const StyledContactRightPicture = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.3;
`;

const StyledContactRightAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 280px;
  height: 200px;
  left: 20%;
  top: 100px;
  color: white;
  background-color: #002552;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  div {
    padding: 25px;
  }
  p {
    padding-bottom: 5px;
  }
`;

export default Contact;
