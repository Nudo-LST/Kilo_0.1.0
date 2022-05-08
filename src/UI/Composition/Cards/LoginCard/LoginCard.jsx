import React from "react";
import "./LoginCard.scss";

export default function LoginCard(props) {
  return (
    <div class="card">
      <h1 class="title">Login</h1>
      <form>
        <div class="input-container">
          <input type="" id="#{label}" required="required" />
          <label for="">Username</label>
          <div class="bar"></div>
        </div>
        <div class="input-container">
          <input type="" id="#{label}" required="required" />
          <label for="">Password</label>
          <div class="bar"></div>
        </div>
        <div class="button-container">
          <button>
            <span>Go</span>
          </button>
        </div>
        <div class="footer">
          <a href="https://www.google.com">Forgot your password?</a>
          <a href="https://www.google.com">Login</a>
        </div>
      </form>
    </div>
  );
}
