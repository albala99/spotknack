const productlist=document.querySelector('.product-list');
eventListener();
function eventListener(){
    window.addEventListener('DOMContentLoaded',()=>{
        console.log('DOM fully loaded');
        loadjson();
    })
}
function loadjson(){
    fetch('mobile.json')
.then(response=>response.json())
.then(data=>{
    let html='';
    data.forEach(product=>{
        html+=
            `<div class = "product-item">
            <div class = "product-img">
                <img src = "${product.image}" alt = "product image">
                <button type = "button" class = "add-to-cart-btn">
                <i class = "fas fa-shopping-cart"></i>Add To Cart
                </button> 
            </div>

                <div class = "product-content">
                    <h3 class = "product-name">${product.model}</h3>
                    <p class = "product-price">Rs.${product.price}</p>
                </div>
        </div>`;
    }) ;
    productlist.innerHTML=html;
    // for(var i=0; i<data.length;i++){
    //     document.getElementById("container").innerHTML+=
    //     data[i].id + data[i].model + data[i].price+ "<br />";
    // }
})
.catch(function(error){
    console.log(error);
})
}
