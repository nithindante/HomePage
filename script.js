
let link_texts = document.getElementsByClassName("links");
let links_text_arr = Array.from(link_texts);


links_text_arr.forEach((element) => {
    element.addEventListener("onmouseenter", () => {

        console.log("true")
    })
})

for (let i = 0; i < link_texts.length; i++) {
    link_texts[i].style.zIndex == "2";
    link_texts[i].addEventListener("click`", () => {
        console.log("andi")
    })
}   
