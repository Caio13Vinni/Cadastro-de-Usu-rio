const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sNumero = document.querySelector('#m-numero');
const sEmail = document.querySelector('#m-email');
const btnSalvar = document.querySelector('#botaoSalvar');

let itens = [];
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  }

  if (edit) {
    sNome.value = itens[index].nome;
    sNumero.value = itens[index].numero;
    sEmail.value = itens[index].email;
    id = index;
  } else {
    sNome.value = '';
    sNumero.value = '';
    sEmail.value = '';
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.numero}</td>
    <td>${item.email}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  if (sNome.value == '' || sNumero.value == '' || sEmail.value == '') {
    return;
  }

  e.preventDefault();

  if (!validatePhoneNumber(sNumero.value)) {
    alert('Número de telefone inválido. Por favor, siga o formato (DDD) 9XXXX-XXXX.');
    return;
  }

  if (!validateEmail(sEmail.value)) {
    alert('E-mail inválido. Por favor, insira um e-mail válido contendo "@" e ".com".');
    return;
  }

  if (id !== undefined) {
    itens[id].nome = sNome.value;
    itens[id].numero = sNumero.value;
    itens[id].email = sEmail.value;
  } else {
    itens.push({'nome': sNome.value, 'numero': sNumero.value, 'email': sEmail.value});
  }

  setItensBD();

  modal.classList.remove('active');
  loadItens();
  id = undefined;
}

function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item, index) => {
    insertItem(item, index);
  });
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? [];
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens));

function validatePhoneNumber(phone) {
  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return phoneRegex.test(phone);
}

function formatPhoneNumber(phone) {
  phone = phone.replace(/\D/g, ""); // Remove tudo que não é dígito
  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses no DDD
  phone = phone.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen no meio do número
  return phone;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.includes(".com");
}

sNumero.oninput = () => {
  sNumero.value = formatPhoneNumber(sNumero.value);
}

loadItens();
