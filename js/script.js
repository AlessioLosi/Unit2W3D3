
 const bookList = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
      .then(response => response.json())
      .then(books => {
        generateBookList(books);
      })
      .catch(error => console.error('Error', error));
  }

  const generateBookList = function (books) {
    const bookContainer = document.getElementById('books-container');
    books.forEach((book) => {
      const col = document.createElement('div');
      col.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

      const card = document.createElement('div');
      card.classList.add('card', 'px-4', 'justify-content-center');

      const img = document.createElement('img');
      img.src = book.img;
      img.classList.add('card-img-top');
      img.alt = 'copertina libro';

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h2');
      cardTitle.classList.add('card-title');
      cardTitle.innerText = book.title;

      const cardPrice = document.createElement('p');
      cardPrice.classList.add('card-text');
      cardPrice.innerText = `€${book.price}`;

      const button = document.createElement('button');
      button.classList.add('btn', 'btn-danger');
      button.innerText = 'Elimina';
      button.addEventListener('click', () => {
        col.remove();
      });
      const button1 = document.createElement('button');
      button1.classList.add('btn', 'btn-success');
      button1.innerText = 'Compra ora';
      button1.addEventListener('click', () => {
        const chart=document.createElement('ul')
        const elementChart=document.createElement('li')
        chart.appendChild('elementChart');
        elementChart.appendChild('col');
        
      });

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(button);
      cardBody.appendChild(button1);


      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      

      bookContainer.appendChild(col);
    });
   
  }

   document.addEventListener('DOMContentLoaded', bookList);