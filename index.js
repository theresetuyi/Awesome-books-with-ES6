/* eslint-disable */
import { DateTime } from './modules/luxon.js';
import { Book } from "./modules/books.js";
import { Display } from "./modules/bookDesplay.js";

let display;
const today = document.getElementById('today');

window.onload = () => {
  // eslint-disable-next-line no-undef
  display = new Display();
  display.render();
  today.textContent = new Date().toDateString();
};

const len = () => {
  const aux = display.books.length;
  let aux1;
  if (aux !== 0) {
    aux1 = display.books[aux - 1].id + 1;
  } else {
    aux1 = 1;
  }
  return aux1;
};

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  const thisForm = e.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  const id = len();
  // eslint-disable-next-line no-undef
  const newBook = new Book(title, author, id);
  display.addBook(newBook);
  thisForm.reset();
};

function changePage(link) {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.classList.contains(link)) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

const pageLinks = document.querySelectorAll('[data-section]');

pageLinks.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    changePage(link.dataset.section);
  };
});