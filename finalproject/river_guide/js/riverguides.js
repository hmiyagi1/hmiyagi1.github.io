
const requestURL = 'https://hmiyagi1.github.io/finalproject/river_guide/json/riverguides.json';

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
		
        let certification = document.createElement('p');
		
		let yearsofexperience = document.createElement('p');
		
		let email = document.createElement('p');
		
		let biography = document.createElement('p');
        
        let image = document.createElement('img');


        h2.textContent = riverguides[i].name + ' ' + riverguides[i].lastname;
		
        certification.textContent = riverguides[i].certification;
		
		yearsofexperience.textContent = riverguides[i].yearsofexperience;
		
		email.textContent = riverguides[i].email;
		
		biography.textContent = riverguides[i].biography;
        
        image.setAttribute('src', riverguides[i].imageurl);
		
        image.setAttribute('alt', riverguides[i].name + " " + riverguides[i].lastname + " - " + riverguides[i].order );

        card.appendChild(h2);
		
        card.appendChild(certification);
		
		card.appendChild(yearsofexperience);
		
		card.appendChild(email);
		
		card.appendChild(biography);
        
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

    }
  });
