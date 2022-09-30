import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Captcha() {
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [siteKey, setSiteKey] = useState();
  ``;
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  };

  useEffect(() => {
    async function getSiteKey() {
      const { data: googleSiteKey } = await axios.get(
        "http://localhost:2222/config/secretkey"
      );
      setSiteKey(googleSiteKey);
    }
    getSiteKey();
  }, [navigate]);

  return (
    <div>
      <h3>Recaptcha</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        <ReCAPTCHA sitekey={siteKey} ref={captchaRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Captcha;
