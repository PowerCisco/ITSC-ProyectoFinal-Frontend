async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch('https://itsc-proyectofinal.azurewebsites.net/libro');
    const {headers, rows} = await response.json();
    const data = await response.json();
    
    
}

loadIntoTable('https://itsc-proyectofinal.azurewebsites.net/libro', document.querySelector("table"));


/*
fetch('https://itsc-proyectofinal.azurewebsites.net/libro')
    .then(response => response.json())
    .then(data => console.log(data));
*/