export default function reservation(){

    const content = document.getElementById('content');
    content.innerHTML = "";
    const board = document.createElement('div');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "HOURS: 06:00 PM - <em>11:00 PM</em>";

    content.appendChild(paragraph);
    content.appendChild(board);

    const contact = document.createElement('p');
    contact.innerHTML = "43 Regalado Avenue Cor. <br> Burbank Street North Fairview 1100 <br><br> <em>Marino Monferrato</em> <br> 202-555-0186"


    board.appendChild(contact);


}