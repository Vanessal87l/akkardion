const headers=document.querySelectorAll(".akkardion-header");
const tocka_1=document.querySelector(".svg-tocka");
const tocka_2=document.querySelector(".svg-tocka-2");
const tocka_3=document.querySelector(".svg-tocka-3");
tocka_1.addEventListener("click",()=>{
    const parent=tocka_1.closest(".akkardion-item");
    const content=parent.querySelector(".akkardion-content");
    content.classList.toggle("active");
 });
tocka_2.addEventListener("click",()=>{
    const parent=tocka_2.closest(".akkardion-item");
    const content=parent.querySelector(".akkardion-content");
    content.classList.toggle("active");
 });
tocka_3.addEventListener("click",()=>{
    const parent=tocka_3.closest(".akkardion-item");
    const content=parent.querySelector(".akkardion-content");
    content.classList.toggle("active");
 });
// headers.forEach(header=>{
//     header.addEventListener("click",()=>{
//         const content=header.nextElementSibling;
//          content.classList.toggle("active");
//     });
// });
