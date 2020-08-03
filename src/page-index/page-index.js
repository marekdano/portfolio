import 'normalize.css/normalize.css';
import './page-index.scss';
import Typed from 'typed.js';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faCodepen } from "@fortawesome/free-brands-svg-icons/faCodepen";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";


library.add(faAngleDown);
library.add(faGithub);
library.add(faLinkedinIn);
library.add(faCodepen);
library.add(faTwitter);
dom.watch();

const options = {
  strings: ['Frontend developer by day.', 'Backend developer by night.'],
  showCursor: true,
  typeSpeed: 80,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 400,
  onComplete: () => {
    document.querySelector('.typed-cursor').style.display = 'none';
    setTimeout(() => {
      document.querySelector('#typed-sentences').style.display = 'none';
      document.querySelector('.title').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.title').classList.add('fade-in');
      }, 500);
    }, 1000);
  }
}

const typed = new Typed("#typed-sentences", options);
