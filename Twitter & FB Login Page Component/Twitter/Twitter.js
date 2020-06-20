import React from "react";
import styles from "./Twitter.module.css";
export const Twitter = () => {
  function handleSocialLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email -->" + email);
    console.log("Password -->" + password);
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <img
          src="https://pluspng.com/img-png/png-twitter-logo-twitter-in-png-2500.png"
          alt="twitter logo"
          style={{ width: "32px", height: "32px" }}
        ></img>
        <h4>Log in to Twitter</h4>
      </div>
      <div className={styles.FormContainer}>
        <form id="form" className="form" onSubmit={(e) => handleSocialLogin(e)}>
          <div className={styles.FormControl}>
            <label htmlFor="email">Phone,email, or username</label>
            <input name="email" id="email" className={styles.Input} />
          </div>
          <div className={styles.FormControl}>
            <label htmlFor="password">Password</label>
            <input name="password" id="password" className={styles.Input} />
          </div>
          <button className={styles.FormButton}>Log in</button>
        </form>
        <div>
          <a
            href="https://twitter.com/account/begin_password_reset"
            target="blank"
          >
            <i>forgot password?</i>
          </a>
          <span style={{ padding: "0 5px", color: "grey" }}>.</span>
          <a href="https://twitter.com/i/flow/signup" target="blank">
            <i>Sign up for twitter</i>
          </a>
        </div>
      </div>
    </div>
  );
};
