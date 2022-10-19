export default function menu(){

    function createDiv(){
        const element = document.createElement('span');
        element.classList.add('description')
        return element;
    }

    const content = document.getElementById('content');

    const board = document.createElement('div')

    const item1 = document.createElement('div');
    item1.setAttribute('id', 'item1');
    item1.classList.add('items');

    const item2 = document.createElement('div');
    item2.setAttribute('id', 'item2');
    item2.classList.add('items');

    const item3 = document.createElement('div');
    item3.setAttribute('id', 'item3');
    item3.classList.add('items');

    const item4 = document.createElement('div');
    item4.setAttribute('id', 'item4');
    item4.classList.add('items');

    const paragraph = document.createElement('p');
    paragraph.textContent = "GOOD FOOD, BETTER COMPANY"

    //food description
    item1.appendChild(createDiv()).textContent = "Breakfast Set (Sausage, Rice, Eggs)";
    item2.appendChild(createDiv()).textContent = "SALAD INSIDE AN AVOCADO";
    item3.appendChild(createDiv()).textContent = "SLOPPY BURGER";
    item4.appendChild(createDiv()).textContent = "SEAFOOD RAMEN";
    
    content.appendChild(paragraph);
    content.appendChild(board);
    
    board.appendChild(item1);
    board.appendChild(item2);
    board.appendChild(item3);
    board.appendChild(item4);
    

    
   
}

