const navbaritems = document.querySelectorAll('.navbar__item');
const options = document.querySelectorAll('.type__option');
const items = document.querySelector('.items');
const typeToggle = document.querySelector('.type__toggle');
const typeList = document.querySelector('.type__list');
const checkbox = document.querySelector('#check');
const deleteBtn = document.querySelector('.item__delete');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');



function onAdd() {
    const text = input.value;
    if (text ==='') {
        input.focus();
        return;
    }
    const item = createItem(text);
        items.appendChild(item);
        item.scrollIntoView({block: 'center'});
        input.value = '';
        input.focus();
}

let id = 0;
function createItem(text) {
    const itemRow = document.createElement('li');
        itemRow.setAttribute('class', 'item__row');
        itemRow.setAttribute('data-id',id);
        itemRow.innerHTML = ` 
            <div class="item">
                <span class="item__name">
                    <input type="checkbox" name="checkbox" id="check">
                    ${text}
                </span>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>`;

            id++;
            return itemRow;
}

addBtn.addEventListener('click', onAdd);

input.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})
