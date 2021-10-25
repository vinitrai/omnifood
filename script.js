const menuBtn = document.querySelector('.menu__btn');
const navBar = document.querySelector('.main__nav');

menuBtn.addEventListener('click',function(){
    const menuIcon = this.children[0];
    // console.log(menuIcon);
    function showMenu(){
          navBar.classList.add('show')
          menuIcon.classList.replace('fa-bars','fa-times');
    }
    function hideMenu(){
         navBar.classList.remove('show') 
        menuIcon.classList.replace('fa-times','fa-bars')
    }
    
    menuIcon.classList.contains('fa-bars')?showMenu():hideMenu();
})
