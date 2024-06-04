import React, { useState } from 'react';

export function PageLogin(props) {

  const [action, setAction] = useState("Log In");

  return (
    <body>
      <main>
        <section className="auth-container">
          <div className="auth-box">
            <h1 className="auth-title">{action}</h1>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-input" placeholder="Enter your password" />
            </div>
            <button className={action==="Log In"?"auth-button click-color":"auth-button"} onClick={() => {setAction("Log In")}}>Login</button>
            <button className={action==="Sign Up"?"auth-button click-color":"auth-button"} onClick={() => {setAction("Sign Up")}}>Sign Up</button>
          </div>
        </section>
      </main>
    </body>

  );
}
