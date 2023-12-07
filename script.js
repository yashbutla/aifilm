let menu = document.getElementById("menu");
menu.addEventListener("click",function(){
    console.log("Sidebar");
    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(0px)";
})
let cross = document.getElementById("cross");
cross.addEventListener("click",function(){
    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(-400px)";
})