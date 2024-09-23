// Função para abrir o modal
function openMenuModal() {
    document.getElementById('menuModal').style.display = 'flex';
}

// Função para fechar o modal
function closeMenuModal() {
    document.getElementById('menuModal').style.display = 'none';
}

// Função para alternar entre as categorias do menu
function showCategory(category) {
    var categories = document.getElementsByClassName('menu-items');
    
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    
    document.getElementById(category).style.display = 'block';
}
