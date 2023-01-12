import './nobg1000.png';
import './github.svg';
import './styles.css';

const pressIco = (element) => {
  element.classList.add('clicked')
}

const releaseIco = (element) => {
  element.classList.remove('clicked')
}

Array.from(document.getElementsByClassName("social-medial-link")).forEach(
  (link) => {
    link.addEventListener("mousedown", () => {
      pressIco(link)
    });
    link.addEventListener("mousemove", () => {
      releaseIco(link)
    });
    link.addEventListener("mouseup", () => {
      releaseIco(link)
    });
  }
);

