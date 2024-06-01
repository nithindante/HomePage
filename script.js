
let link_texts = document.getElementsByClassName("links");
let links_text_arr = Array.from(link_texts);

for (let i = 0; i < link_texts.length; i++) {
    link_texts[i].addEventListener("mouseover", () => {
       ((link_texts[i]).nextElementSibling).classList.toggle("show");
    })
}

for (let i = 0; i < link_texts.length; i++) {
    link_texts[i].addEventListener("mouseout", () => {
       ((link_texts[i]).nextElementSibling).classList.toggle("show");
    })
}

for (let i = 0; i < link_texts.length; i++) {
    link_texts[i].addEventListener("click", () => {
        if (link_texts[i].textContent == "Projects") 
        {
            let projects = document.getElementsByClassName("projects");
            for (let index = 0; index < projects.length; index++) {
                projects[index].scrollIntoView()
            }
        }
        if (link_texts[i].textContent == "Contact me!") 
        {
            let contact = document.getElementsByTagName("footer");
            for (let index = 0; index < contact.length; index++) {
                contact[index].scrollIntoView()
            }
        }
    })
}