function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  console.log(name);

  const ph = event.target.phno.value;
  const add = event.target.add.value;

  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = name + ' ' + ph + ' ' + add;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', () => {});
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  editBtn.addEventListener('click', () => {});

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  ul.appendChild(li);
  console.log(ul);
}
