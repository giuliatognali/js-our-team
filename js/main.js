'use strict';


const ourTeam =
    [

        {
            name: 'Wayne Barnett',
            role: 'Founder & CEO',
            img: 'wayne-barnett-founder-ceo.jpg'
        },

        {
            name: 'Angela Caroll',
            role: 'Chief Editor',
            img: 'angela-caroll-chief-editor.jpg'
        },

        {
            name: 'Walter Gordon',
            role: 'Office Manager',
            img: 'walter-gordon-office-manager.jpg'
        },

        {
            name: 'Angela Lopez',
            role: 'Social Media Manager',
            img: 'angela-lopez-social-media-manager.jpg'
        },

        {
            name: 'Scott Estrada',
            role: 'Developer',
            img: 'scott-estrada-developer.jpg'
        },

        {
            name: 'Barbara Ramos',
            role: 'Graphic Designer',
            img: 'barbara-ramos-graphic-designer.jpg'
        }

    ]

console.log(ourTeam);

console.log(ourTeam[0]);


//stama i valori degli oggetti dell'array
for (let i = 0; i < ourTeam.length; i++) {
    for (let key in ourTeam[i]) {
        console.log(ourTeam[i][key])
    }

}

