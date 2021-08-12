import './style.css';
import { Person } from './person';

let person = new Person('Isabela', 'Baraldi', 'Gandelman', 27);

const appTitle: HTMLElement = document.getElementById('titulo');
appTitle.innerHTML = ' Projeto Person';

const appDiv: HTMLElement = document.getElementById('app.nome');
appDiv.innerHTML = person.getFullName();

const appIdade: HTMLElement = document.getElementById('app.ano');
appIdade.innerHTML = person.getBirthdayYear();
