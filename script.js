const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}    
];

const comments = [
    {text: 'Kocham to!', id: 849321 },
    {text: 'Super fajne', id: 333445 },
    {text: 'Jestes najlepszy', id: 2343232 },
    {text: 'To jest moje ulubione', id:123456 },
    {text: 'Dobre dobre dobre', id: 543541 }
]


// array.prototype.some(); - czy jest przynajmniej jedna osoba w wieku 19 lat


const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log(isAdult); // zwróci nam true
console.log({isAdult}); // zwróci nam objekt

// array prototype.every(); - czy wszyscy są w wieku 19 lat?

const allAdult = people.every(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log(allAdult); // zwróci nam true

// array prototype.find(); - zwraca pierwszą pasującą wartość

const comment = comments.find(function(comment){
    if(comment.id === 543541){
        return true;
    }
})
console.log(comment);

// array prototype.findIndex() - znalezienie "miejsca" w array

const index = comments.findIndex(function(comment){
    if(comment.id === 123456){
         return true;
    }
});
console.log(index);

