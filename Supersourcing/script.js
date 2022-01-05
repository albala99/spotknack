const scrollcontainer=document.querySelector('.auto-scroll');
const scrollcontainer2=document.querySelector('.auto-scroll-2');
events();
function events(){
    window.addEventListener('DOMContentLoaded',()=>{
        console.log("dom loaded");
        fetchjson();
        fetchjson2();
    })
}

function fetchjson(){
    fetch('images.json').then(response=>response.json()).then(data=>{
        let html='';
        data.forEach(container=>{
            html+=`<div class="figure"><figure><img src="${container.imgsrc}" alt="${container.alt}"></figure></div>`;
        })
        scrollcontainer.innerHTML=html;
    }).catch(function(error){
        console.log(error);
    })
}

function fetchjson2(){
    fetch('images1.json').then(response=>response.json()).then(data=>{
        let html='';
        data.forEach(container=>{
            html+=`<div class="figure"><figure><img src="${container.imgsrc}" alt="${container.alt}"></figure></div>`;
        })
        scrollcontainer2.innerHTML=html;
    }).catch(function(error){
        console.log(error);
    })
}