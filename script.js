let settingMenu = document.querySelector(".settings-menu");

function settingMenuToggle(){

settingMenu.classList.toggle("settings-menu-height");
}


//--------------------------------------------------------


const darkBtn = document.querySelector("#dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
}