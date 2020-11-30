const designData = [
  {
    name: 'Collaborative idea generation',
    description:
      'In this activity, you will have to propose an idea for our design project: Build a robot that helps children learn mathematics. At the initial level you will have to propose the idea and during the discussions you will need to point advantages and disadvantages of the proposed ideas. In the final level you will have to conclude in one idea.',
    Author: 'Konmich',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/12988/',
    Time: '120 minutes',
  },
  {
    name: 'Metodología Docente',
    description:
      '¿Qué ventajas e inconvenientes destacarías del uso de múltiples estrategias metodológicas de E-A para atender la diversidad del estudiantado?',
    Author: 'Verónica',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '120 minutes',
  },
  {
    name: 'ITIC Class Activity',
    description:
      '¿Qué consejo/s sobre privacidad de datos y riesgos relacionados con la compartición de datos le darías a un/a amigo/a? (En dos frases máximo).',
    Author: 'IshA',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '120 minutes',
  },
  {
    name: 'ITIC Class Activity',
    description:
      '¿Qué consejo/s sobre privacidad de datos y riesgos relacionados con la compartición de datos le darías a un/a amigo/a? (En dos frases máximo).',
    Author: 'IshA',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '120 minutes',
    blooms: 'understand',
  },
  {
    name: '¿Qué curso preparías utilizando estas herramientas?',
    description: 'Elegir un tema para desarrollar con estas herramientas',
    Author: 'Karina Chappell Alaniz',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '120 minutes',
  },
  {
    name: 'Aspecto del seminario que más te ha interesado',
    description: 'Indica el aspecto del seminario que más te ha interesado',
    Author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '120 minutes',
  },
  {
    name: 'Metodología Docente',
    description:
      '¿Qué ventajas e inconvenientes destacarías del uso de múltiples estrategias metodológicas de E-A para atender la diversidad del estudiantado?',
    Author: 'Verónica',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '120 minutes',
  },
  {
    name: 'Asking questions to peers',
    description: 'Ask a question to the peers that have presented',
    Author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '86400 minutes',
  },
  {
    name: 'Questions about Science communication',
    description: 'Propose a question for the groups having studied "Science communication',
    Author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '60 minutes',
  },
  {
    name: 'Questions about Science communication',
    description: 'Propose a question for the groups having studied "Science communication',
    Author: 'Davinia',
    link: 'https://ilde.upf.edu/pg/lds/vieweditor/14229/',
    Time: '60 minutes',
  },
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return '1 year old';
  } else if (calculatedAge == 0) {
    return 'Baby';
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}
function designTemplate(design) {
  return `
    <div class="mt-5 col-sm-1 col-md-1 col-lg-3 col-xl-3">
     <div class="card" style="18rm">
      <div class="card-body">
        <h5 class="card-title">${design.name}</h5>
         <p class="card-text">${design.description} </p>
              <a href="${design.link}" target="_blank" class="btn btn-primary btn-sm"
                >Preview</a
              >
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmModal">
          Select
        </button>
            </div>
          </div>
        </div>
    `;
}
// function petTemplate(pet) {
//   return `
//       <div class="animal">
//       <img class="pet-photo" src="${pet.photo}">
//       <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
//       <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//       ${pet.favFoods ? foods(pet.favFoods) : ''}
//       </div>
//     `;
// }

// document.getElementById('app').innerHTML = `
//     <h1 class="app-title">Pets (${designData.length} results)</h1>
//     ${designData.map(petTemplate).join('')}
//     <p class="footer">These ${designData.length} pets were added recently. Check back soon for updates.</p>
//   `;
document.getElementById('app').innerHTML = `
  
  ${designData.map(designTemplate).join('')}
  
`;
