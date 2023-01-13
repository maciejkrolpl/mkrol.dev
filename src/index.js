import React from 'react';
import ReactDOM from 'react-dom';
import maciek from './images/nobg1000.png';
import GitHubLogo from './svgs/GitHubLogo';
import './styles.css';
import LinkedInLogo from './svgs/LinkedInLogo';
import SalesforceLogo from './svgs/SalesforceLogo';

// const pressIco = (element) => {
//   element.classList.add('clicked')
// }

// const releaseIco = (element) => {
//   element.classList.remove('clicked')
// }

// Array.from(document.getElementsByClassName("social-medial-link")).forEach(
//   (link) => {
//     link.addEventListener("mousedown", () => {
//       pressIco(link)
//     });
//     link.addEventListener("mousemove", () => {
//       releaseIco(link)
//     });
//     link.addEventListener("mouseup", () => {
//       releaseIco(link)
//     });
//   }
// );

const App = () => (
  <div class="wholesome">

    <div class="selfie-sticked">
      <img src="src/nobg1000.png" class="selfie" />
    </div>
    <div class="content">
      <div class="myname">Maciej Król</div>
      <div class="title">Salesforce Developer</div>
      <div class="social-media">
        <a href="https://github.com/maciejkrolpl/" target="blank" class="social-medial-link">
          <GitHubLogo />
        </a>

        <a href="https://www.linkedin.com/in/maciejkrolpl/" target="blank" class="social-medial-link">
          <LinkedInLogo />
        </a>
        <a href="https://trailblazer.me/id/mkro" target="blank" class="social-medial-link">
          <SalesforceLogo />
        </a>
      </div>
      <div class="resume">
        Over 4 years of commercial experience
      </div>
    </div>

  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
