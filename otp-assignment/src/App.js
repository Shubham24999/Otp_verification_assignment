import React, { useState } from "react";
import OTPInput from "./components/OTPInput";
import "./App.css";

function App() {
    const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="App">
      {!modal && (
        <button onClick={toggleModal} className="btn-modal">
          Click Here for Phone Verification Popup 
        </button>
      )}

      {modal && (
        <div
          style={{
            backgroundColor: "#C5CAE9",
            height: "400px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div>
            <h1>Phone Verification</h1>

            <hr />
            <p>Enter the OTP you have recieved on XXXXX-31400</p>
          </div>
          <OTPInput
            autoFocus
            isNumberInput
            length={6}
            className="otpContainer"
            inputClassName="otpInput"
            onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
          />
          <div className="change">
            <button>Change Number</button>
            <button>Resend-OTP</button>
          </div>
          <div style={{ border: "0px" }}>
            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "green",
                color: "white"
              }}
            >
              Verify Phone Number
            </button>
          </div>
          <br />
          <button onClick={toggleModal} className="close-pop">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
