// access to ul to add items 
let navItems= document.getElementById("navbar__list");
// create four sections navbar using for for no repeat 
for(let i=1;i<=4;i++){
    // create li of ul 
    let navSections = document.createElement("li");
    // add li into navItems(ul)
    navItems.appendChild(navSections);
    // create link for sections 
    let navLink= document.createElement("a");
    // setAttribute href to link 
    navLink.setAttribute("href",`#section${i}`);
    navLink.classList.add("menu__link");
    // add link into li
    navSections.appendChild(navLink);
    // add text to link ex: section1
    let sectionName= document.createTextNode(`Section${i}`);
    // add text of link into a item 
    navLink.appendChild(sectionName);
}


// create section 4 
// create section as a container
let footer = document.querySelector("footer"); 
let section4 = document.createElement("section");
// setAttribute to section 4 
section4.setAttribute("id","section4");
section4.setAttribute("data-nav","Section 4");
// add section before footer
footer.before(section4);

// create div 
let divContainer = document.createElement("div");
// setAttribute (classname) to this div 
divContainer.classList.add("landing__container");
// add div into section 
section4.appendChild(divContainer);

// create h2 element 
let head2 = document.createElement("h2");
// add h2 to divContainer
divContainer.appendChild(head2);
// add text to h2 
let textHead2= document.createTextNode("Section 4");
// add text into h2 
head2.appendChild(textHead2);

// create two p element && add them into divContainer
let p1= document.createElement("p");
divContainer.appendChild(p1);
let textP1=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
p1.appendChild(textP1);

let p2= document.createElement("p");
divContainer.appendChild(p2);
let textP2=document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
p2.appendChild(textP2);
