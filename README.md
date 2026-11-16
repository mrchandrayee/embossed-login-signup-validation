# Embossed Login / Sign Up with Validation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/embossed-login-signup-validation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable recreation of the supplied 17.17-second screen recording.

## Visible interface reproduced

- Title: **Embossed Login / Sign Up with Validation**
- Soft light-grey neumorphic card with rounded corners and shadows
- Blue embossed welcome panel with greeting and mode-switch button
- Create Account form with first name, last name, email, password, confirm password
- Terms and conditions checkbox
- Sign-up error alert and field-level validation messages
- Login view with email, password, Remember me, Forgot password and Login Now
- Social sign-in buttons (Google, Facebook and LinkedIn)
- Caption: `Comment "Login" for code`

## HTML code transcribed from the editor

The recording clearly shows this login form fragment:

```html
<form id="loginForm" novalidate>
  <div class="input-group">
    <input type="email" class="input" id="loginEmail" placeholder="Email address">
  </div>

  <div class="input-group">
    <input type="password" class="input" id="loginPassword" placeholder="Password">
  </div>

  <div class="options">
    <label class="remember">
      <input type="checkbox">
      <span>Remember me</span>
    </label>
    <a href="#">Forgot password?</a>
  </div>

  <button type="submit" class="submit-btn">Login Now</button>
</form>
```

The full login fragment above is transcribed from the visible code. The video does not show the complete signup markup, all CSS, or JavaScript source, so the rest of the implementation is reconstructed to match the displayed design and observed validation states.

## Run

Extract the ZIP and open `index.html` in Chrome, Firefox, Safari or Edge. No npm install, server, external library, or build step is required.

## Files

- `index.html` — login/signup interface and forms
- `style.css` — embossed/neumorphic styling, responsive layout and mode transitions
- `script.js` — validation, error messages, mode switching and demo feedback
- `README.md` — extracted code and implementation notes

## Validation behavior

- Required first and last names (at least 2 characters)
- Email format validation
- Password minimum length of 8 characters
- Confirm password matching
- Required terms checkbox
- Login email and password validation
- Inline errors and top alert messages

**Backend note:** This is a front-end demo. Successful validation does not create a real account or authenticate a user. Social buttons and password reset are placeholders until connected to a real authentication service.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
