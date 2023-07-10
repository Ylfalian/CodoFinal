const titulo = document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

function posine(resultado) {
        
    if (resultado >= 4) {
      po = "Positive";
    } else {
      po = "Negative";
    }
    return po;
  }


fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(usuario => {
            const divItem = document.createElement('div')
            var resultado = Math.floor(Math.random(1) * 10)
            divItem.innerHTML = `
            <div class="comment-card">
            <div class="comment-header">
              <h2>${usuario.name}</h2>
              <span class="comment-date">${usuario.email}</span>
            </div>
            <div class="comment-body">
              <p>${resultado}/10</p>
            </div>
            <span class="comment-badge comment-${posine(resultado)}">${posine(resultado)}</span>
          </div>`



            titulo.appendChild(divItem);

        });
    })
    .catch(err => console.log(err))


   