
$(document).ready(function(){
  
 // ******************************
    //  1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.

    var studente = {
        nome : 'Mario',
        cognome : 'Rossi',
        eta : 27,
    };

    for (var key in studente) {
        console.log(key + ' : ' + studente[key]);
    }
// ******************************

// ******************************
   // 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

   var studenti = [
       {
           nome : 'paolo',
           cognome :'duzioni',
       },
       {
           nome : 'lorenzo',
           cognome : 'balsano',
       },
       {
           nome : 'fabio',
           cognome :'giorgini',
       },

   ];

   // 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

//    inserimento oggetto tramite prompt
//    ****************************
   var nome = prompt('inserisci nome');
   var cognome = prompt('inserisci cognome');
   var eta = parseInt ( prompt ('inserisci eta') );

   var objectUser = {
       nome,
       cognome,
       eta,
   }
   
   studenti.push(objectUser);


   for (var i = 0; i < studenti.length; i++) {
       console.log(studenti[i]);
   }

   
   

   


}); //end doc ready