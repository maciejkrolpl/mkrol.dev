import React from 'react';
import ReactDOM from 'react-dom';
import maciek from './images/nobg1000.png';
import './images/github.svg';
import './styles.css';

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
  <div className="wholesome">
    Testujemy ReacAAAAAAAta!
    <div>
      <img src={maciek} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
