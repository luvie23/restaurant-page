export default function reservation(){

    const content = document.getElementById('content');
    content.innerHTML = "";
    const board = document.createElement('div');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "HOURS: 06:00 PM - <em>11:00 PM</em>";

    content.appendChild(paragraph);
    content.appendChild(board);

    const form = document.createElement('form');
    const name = document.createElement('input');

    form.appendChild(name);
    board.appendChild(form);


}