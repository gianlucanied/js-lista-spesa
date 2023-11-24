/* Soluzione FOR

//Stampiamo una lista della spesa già data, sulla pagina

// Selezione UL
const listaUL = document.querySelector(".listaspesa");

// Creo la lista della spesa
const listaSpesa = ["melanzane", "carote", "carne", "uova"];

// Scorro la lista della spesa

for (let i = 0; i < listaSpesa.length; i++){
    // Mi salvo l'elemento iesimo della lista
    let itemIesimo = listaSpesa[i];

    // Output elemento iesimo della lista
    console.log(itemIesimo);

    // Creiamo il LI
    const elemenLi = document.createElement("li");

    // Inseriamo dentro il LI il contenuto
    elemenLi.append(itemIesimo);

    // Inseriamo il nuovo LI creato dentro l'UL

    listaUL.append(elemenLi);
}
*/

// Soluzione while

// Selezione UL
const listaUL = document.querySelector(".listaspesa");

// Creazione lista spesa
const listaSpesa = ["melanzane", "carote", "carne", "uova"];

let i = 0;

// Scorro la lista della spesa
while (i < listaSpesa.length) {

    // Mi salvo l'elemento iesimo della lista
    let itemIesimo = listaSpesa[i];

    // Output elemento iesimo della lista
    console.log(itemIesimo);

    // Creiamo il LI
    const elementLi = document.createElement("li");

    // Inseriamo il nuovo LI creato dentro l'UL
    elementLi.append(itemIesimo);

    listaUL.append(elementLi);

    i++;
}