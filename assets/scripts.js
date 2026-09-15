const form = document.querySelector('.shopping-form');
const input = document.querySelector('.item-input');
const list = document.querySelector('.shopping-list ul');
const removeButtons = document.querySelectorAll('.remove-item');
const alert = document.querySelector('.alert');
const checkbox = document.querySelector('.input');
const checkboxes = document.querySelectorAll('.item-checkbox');

alert.style.display = 'none';

console.log(alert);

list.addEventListener('click', function (evento) {

  if (evento.target.closest('.remove-item')) {

    const removeButton = evento.target.closest('.remove-item');

    const item = removeButton.parentElement;

    console.log(item);

    item.remove();

    alert.style.display = 'flex';

    setTimeout(function () {
      alert.style.display = 'none';
    }, 3000);

    console.log('item removido');
  }
});

console.log(removeButtons);

removeButtons.forEach(function (button) {

  button.addEventListener('click', function () {

    const item = button.parentElement;

    console.log(item);
  });
});

form.addEventListener('submit', function (evento) {

  evento.preventDefault();

  const itemName = input.value.trim();

  if (itemName !== '') {
    const listItem = document.createElement('li');

    listItem.classList.add('shopping-item');

    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';

    checkbox.classList.add('item-checkbox');

    checkbox.addEventListener('change', function () {
      console.log(checkbox.checked);
    });

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        console.log(checkbox.checked);
      });
    });

    const label = document.createElement('label');

    label.appendChild(checkbox);

    label.appendChild(document.createTextNode(' ' + itemName));

    const removeButton = document.createElement('button');

    removeButton.type = 'button';

    removeButton.classList.add('remove-item');

    const removeImage = document.createElement('img');

    removeImage.src = 'assets/button.png';

    removeImage.alt = 'Remover item' + itemName;

    removeButton.appendChild(removeImage);

    listItem.appendChild(label);

    listItem.appendChild(removeButton);

    list.appendChild(listItem);

    input.value = '';
  }
});