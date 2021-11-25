// access to ul to add items 
let navItems= document.getElementById("navbar__list");
let sections=document.querySelectorAll("section");
// create four sections navbar using for for no repeat 
for(let i=1;i<=4;i++){
    // create li of ul 
    let navSections = document.createElement("li");
    // add li into navItems(ul)
    navItems.appendChild(navSections);
    // create link for sections 
    let navLink= document.createElement("a");
    // setAttribute href to link 
    navLink.setAttribute("data_link",`section${i}`);
    navLink.classList.add("menu__link");
    // add link into li
    navSections.appendChild(navLink);
    // add text to link ex: section1
    let sectionName= document.createTextNode(`Section${i}`);
    // add text of link into a item 
    navLink.appendChild(sectionName);
}


// show active class 
window.onscroll=function(){
    sections.forEach(function(active){
        if(
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ){
            active.classList.add("your-active-class");
        }else{
            active.classList.remove("your-active-class");
        }
    });
};
// scroll smooth
let links=document.querySelectorAll("a");
links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const el= document.getElementById(item.getAttribute("data_link"));
        el.scrollIntoView({behavior:"smooth"});
    });
});







