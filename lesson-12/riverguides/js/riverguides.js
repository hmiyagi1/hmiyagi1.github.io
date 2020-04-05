


const requestURL = 'riverguides.json';

fetch(requestURL)
  .then(function (response) {
	  
    return response.json();
  })
  .then(function (jsonObject) {
	  
    console.table(jsonObject); 

    const riverguides = jsonObject['riverguides'];

    for (let i = 0; i < riverguides.length; i++ ) {
		
        let card = document.createElement('section');
		
        let h2 = document.createElement('h2');
		
        let Bdate = document.createElement('p');
        
        let image = document.createElement('img');


        h2.textContent = riverguides[i].name + ' ' + riverguides[i].lastname;
		
        Bdate.textContent = riverguides[i].birthdate;
        
        image.setAttribute('src', riverguides[i].imageurl);
		
        image.setAttribute('alt', riverguides[i].name + " " + riverguides[i].lastname + " - " + riverguides[i].order );

        card.appendChild(h2);
		
        card.appendChild(Bdate);
        
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

    }
  });
