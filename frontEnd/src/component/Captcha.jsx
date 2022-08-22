import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Captcha() {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("captcha value:", value);
    setVerified(true);
  }

  return (
    <div>
      <h3>Recaptcha</h3>
      <form name="recaptcha">
        <input type="text" placeholder="Enter your email adress" />
        <br />

        <button
          type="button"
          name="submit"
          value="Click me"
          disabled={!verified}
        >
          Click me
        </button>
        <ReCAPTCHA
          sitekey="6Lfg5JkhAAAAAASQvMTfCZ4nPppVlveuYcm9l31E"
          onChange={onChange}
        ></ReCAPTCHA>
      </form>
    </div>
  );
}

export default Captcha;
