const petNames = [
    "Biscoito", "Luna", "Rex", "Mimi", "Pingo", "Nina", "Max", "Chico", "Tico", "Mina","Bidu", "Zé", "Fofinha", "Xuxa", "Cacau", "Belinha", "Brahma", "Juju"
];

document.getElementById('nameGenerator').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * petNames.length);
    document.getElementById('petName').textContent = `Nome sugerido: ${petNames[randomIndex]}`;
});
