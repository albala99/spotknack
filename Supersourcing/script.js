const scrollcontainer=document.querySelector('.auto-scroll');
events();
function events(){
    window.addEventListener('DOMContentLoaded',()=>{
        console.log("dom loaded");
        fetchjson();
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