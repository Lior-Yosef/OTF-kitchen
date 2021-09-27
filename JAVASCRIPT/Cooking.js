imgElement= document.getElementById ("img");
nextElement= document.getElementById ("next");
backElement= document.getElementById ("previous");

var index=0;
imgElement.src=arrayImg[index];

nextElement.onclick = () =>{
    imgElement.src=arrayImg[index]; 
    index++
    if(index==arrayImg.length){
        index=0;
    }

}

backElement.onclick =()=> {
    imgElement.src=arrayImg[index]; 
    index--
    if (index<0){
        index=arrayImg.length-1
    }
}

var contener=document.getElementById("contener");
var imagesArray=document.getElementById("images")


contener.innerHTML= " "

function ShowProduct () {

    //////////////// for show two images ////////////////////

    // for (var i = 0; i < Product.length; i++) {
    //     contener.innerHTML+=`<section class="Product">
    //     name: ${Product[i].NameProduct} <br>
    //     Description: ${Product[i].Description} <br>
    //     price: ${Product[i].price} <br>
    //     ID: ${Product[i].ID} <br>
    //     </section>`
    //      for (var x = 0; x < Product[i].images.length; x++) {
    //          imagesArray.innerHTML +=`<img src =${Product[i].images[0]}>` 
         
    //      }
     
    // }

    //////////////// for show two images ////////////////////



     for (var i = 0; i < Product.length; i++) {
         
        if ("Cooking"==Product[i].Categoric) {

            contener.innerHTML+=`<section class="Product">
            <img src="${Product[i].images[0]}" width="250px" height="250px">
            <div id="obj">
            <h1> ${Product[i].NameProduct}</h1> <br>
            <span> price:${Product[i].price}<i class="fas fa-dollar-sign"></i></span> 
            ID: ${Product[i].ID} <br>
            <p> ${Product[i].Description} </p> <br>
            </div>
            <div class="btn">
            <button class="addBtn" >Add to cart</button>
            <button class="removeBtn" >Remove form cart </button>
            <div>
            </section>`   
        }
       
             
         
        
        
    
         }
        
        
    
    
};

ShowProduct ()


addBtn=document.getElementsByClassName("addBtn");
removeBtn=document.getElementsByClassName("removeBtn");
var shoppingCart=[];

for (var j = 0; j < addBtn.length; j++) {
    addBtn[j].onclick=()=>{
    shoppingCart.push(Product[j]);
    console.log(shoppingCart);
}
}

for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].onclick = ()=>{
        for (var x = 0; x < shoppingCart.length; x++) {
            if (shoppingCart[x] == Product[j]) {
                shoppingCart.splice(x,1)
                console.log(shoppingCart);
            }
            
        }
    }
    
}