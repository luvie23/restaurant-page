export default function menu(){
    const content = document.getElementById('content');

    const item1 = document.createElement('div');
    item1.setAttribute('id', 'item1');
    item1.classList.add('items');


    const item2 = document.createElement('div');
    item2.setAttribute('id', 'item2');
    item2.classList.add('items');

    content.appendChild(item1);
    content.appendChild(item2);
}

