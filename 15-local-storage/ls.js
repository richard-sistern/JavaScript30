const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

// TODO: Add check all, uncheck all, clear all buttons

function addItem(e) {
    // console.log('here') // need to tick preserve log to see as page reloads
    e.preventDefault(); // prevent page reload on submit
    
    const text = (this.querySelector('[name=item]')).value;

    // 'text' is ES6 shorthand for text: 'text',
    const item = {
        text,
        done: false
    };
    // console.log(item);

    items.push(item);
    populateList(items, itemsList);

    // local storage can only store strings, its a key:value store
    localStorage.setItem('items', JSON.stringify(items)); 
    
    // 'this' is the form element
    this.reset(); // clear the form input
};

function populateList(plates = [], platesList) {
    platesList.innerHTML =  plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join(''); // join converts array to a string
};

function toggleDone(e) {
    // console.log(e.target);
    if (!e.target.matches('input')) return; // skip unless its an input

    const el = e.target;
    // console.log(el.dataset.index);
    const index = el.dataset.index;
    
    // invert the checkbox
    items[index].done = !items[index].done;
    
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
};

addItems.addEventListener('submit', addItem); // submit covers all bases 

// listen for a click on ul.plates and items don't exist yet
itemsList.addEventListener('click', toggleDone);

// on page load
populateList(items, itemsList);