// Imports from React
import React, { useState, useEffect } from "react";

// Imports from third party libraries
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

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
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <React.Fragment>
      <NavAnchorContact
        style={{ height: dimensions.height }}
        id="contact"
      ></NavAnchorContact>
      <StyledContact style={{ height: dimensions.height }}>
        <StyledContactLeft style={{ height: dimensions.height }}>
          <div></div>
          <StyledContactLeftText>
            <p>{"<h1>"}</p>
            <h1>Contact me</h1>
            <p>{"</h1>"}</p>
            <p>{"<h2>"}</p>
            <h2>
              You can contact me anytime about anything related to web
              development - web applications, mobile applications, internet
              presence of yourself or your company.
            </h2>
            <p>{"</h2>"}</p>
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
            </StyledContactLeftForm>
            <p>{"</form>"}</p>
          </StyledContactLeftText>
          <div>
            <p style={{ paddingLeft: "1vw" }}>{"</body>"}</p>
            <p>{"</html>"}</p>
          </div>
        </StyledContactLeft>
      </StyledContact>
    </React.Fragment>
  );
};

// Styled components
const NavAnchorContact = styled.div`
  position: absolute;
  top: 300vh;
`;

const StyledContact = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #00397f, #26aee5);
  display: flex;
  @media (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const StyledContactLeft = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 3vw;
  padding: 2vw 0 2vw 1vw;
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
  @media (max-width: 370px) {
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
  @media (max-width: 370px) {
    height: 45px;
  }
`;

export default Contact;
