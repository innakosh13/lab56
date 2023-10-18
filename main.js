let formBtn = document.querySelector('.btn')
let forma = document.querySelector('#form')



forma.addEventListener('submit', function (event) {
    event.preventDefault()
    let allEntryField = document.querySelectorAll('.enter');
    let validation = true;
    deleteErrorMsg()

    for (let i = 0; i < allEntryField.length; i++) {
        if (allEntryField[i].value.trim() === '') {
            validation = false;
            // Создаем элемент ошибки под пустым полем
            let errorMsg = document.createElement('p');
            errorMsg.className = 'trable'
            errorMsg.textContent = 'Поле пустое';
            errorMsg.style.margin = 0;
            errorMsg.style.color = 'orange';
            errorMsg.style.zIndex = 1;
            allEntryField[i].parentNode.appendChild(errorMsg);
        }
    }

    if (proverkaEmail() === 'false') {
      validation=false
    }

    if (validation) {
        forma.submit();
    }
  })

    
  let deleteErrorMsg = function () {
    // Данная ф-ция очищает все предыдущие сообщениях о незаполненных полях
    let errorElements = form.querySelectorAll('.trable')
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove()
    }
  }

  function proverkaEmail() {
    // Данная ф-ция проверяет значение email в поле и с помощью 
    // регулярного выражения проверяет корректность
  
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = email.value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail. Например inna@mail.ru');
       return false;
    }
 }