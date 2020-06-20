import React from "react";
import styles from "./Facebook.module.css";
export const Facebook = () => {
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
        <h3>Facebook</h3>
      </div>
      <div className={styles.FormContainer}>
        <h5 style={{ marginTop: "15px" }}>Login to Facebook</h5>
        <form
          id="form"
          className={styles.Form}
          onSubmit={(e) => handleSocialLogin(e)}
        >
          <div className={styles.FormControl}>
            <input placeholder="Email" id="email" className={styles.Input} />
          </div>
          <div className={styles.FormControl}>
            <input
              placeholder="Password"
              id="password"
              className={styles.Input}
            />
          </div>
          <button className={styles.FormButton}>Log in</button>
        </form>
        <p>---------or---------</p>
        <a href="https://www.facebook.com/r.php" target="blank">
          <button className={styles.NewAccount}>Create New Account</button>
        </a>
        <a
          href="https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar"
          style={{
            marginTop: "10px",
            paddingBottom: "15px",
          }}
          target="blank"
        >
          <i style={{ color: "#3b5699" }}>forgotten account?</i>
        </a>
      </div>
    </div>
  );
};
