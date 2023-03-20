/* Função para manuseio do Menu */
function toggleMenu(){
    var menutoggle = document.querySelector('.toggle');
    var glass = document.querySelector('.glass')
    var menu = document.querySelector('.navigation');
    var content = document.querySelector('.content');
    var sci = document.querySelector('.sci');
    var navigation = document.querySelector('.menu');
    menutoggle.classList.toggle('active');
    menu.classList.toggle('active');
    glass.classList.toggle('active');
    content.classList.toggle('active');
    sci.classList.toggle('active');
    navigation.classList.toggle('active');
}