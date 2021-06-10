// Отправляем запрос методом fetch на получение данных из json-файла
fetch('test.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(formHTML) {

    // Функция для создания HTML-формы
    function createForm(elementsArray) {

      // Создаем на странице элемент с тегом form
      let newForm = document.createElement("form");
      
        // Проходимся методом forEach по полученному из json-файла массиву
        elementsArray.forEach(function(formElements) {
          let styles = "";
          // Находим стили css и с каждой итерацией присваиваем свойству соответствующее значение свойства
          Object.keys(formElements.styles).forEach(function(key) {
            styles += `${key}: ${formElements.styles[key]};`;
          });

          //Вставляем в форму инпуты и кнопку с необходимыми атрибутами
          newForm.innerHTML += `<${formElements.element} id="${formElements.id}" type="${formElements.type}" placeholder="${formElements.name}" style="${styles}">${formElements.text}<br>`;
        });

        // Размещаем созданный элемент form после тега с id = "form"
        document.getElementById('form').prepend(newForm);

    }
    
    createForm(formHTML);
  })
  .catch(function(err) {
    console.log(err)
  })

  




