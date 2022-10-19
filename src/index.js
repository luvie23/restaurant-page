import './style.css';
import menu from './menu.js'
import reservation from './reservation.js'

menu();

document.getElementById('menuB').addEventListener('click', function(){
    menu();
})

document.getElementById('reservationB').addEventListener('click', function(){
    reservation();
})