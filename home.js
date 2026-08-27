/* for project modals*/
const projects = [
    {
        button: document.querySelector('.infi button'),
        modal: document.getElementById('infimodal')
    },
    
    {
        button: document.querySelector('.eeets button'),
        modal: document.getElementById('eeetsmodal')
    },

    {
        buttton: document.querySelector('.eeets button'),
        modal: document.getElementById('todoamodal')
    }
];

projects.forEach(function (project) {
    project.button.addEventListener('click', function () {
        project.modal.showModel();
    }); 
});

const closeButtons = document.querySelectorAll('.close-buttons');

closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.closest('dialog').close();
    })
})


/* burger menu toggle */

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.burger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open')
}