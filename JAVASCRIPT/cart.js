var myCart = document.getElementById("cart");

myCart.innerHTML =
   `<table id="CartTable">
<tr>
<th> </th>
<th> Product Name </th>
<th> Price </th>
<th> </th>
</tr>

<tr class="CarProduct"> 

<td class="ProductImg"><img src= ${Product[2].images[0]}> </td>
<td class="ProductName">${Product[2].NameProduct} </td>
<td class="ProductPrice">${Product[2].price}<i class="fas fa-dollar-sign"></i>  </td>
<td class="ProductQuantity"> <button class="btn"> remove </button> </td>


</td>


</tr>

<tr class="CarProduct"> 

<td class="ProductImg"><img src= ${Product[15].images[0]}> </td>
<td class="ProductName">${Product[15].NameProduct} </td>
<td class="ProductPrice">${Product[15].price} <i class="fas fa-dollar-sign"></i> </td>
<td class="ProductQuantity"> <button class="btn"> remove </button> </td>




</td>


</tr>

<tr class="CarProduct"> 

<td class="ProductImg"><img src= ${Product[40].images[0]}> </td>
<td class="ProductName">${Product[40].NameProduct} </td>
<td class="ProductPrice">${Product[40].price}<i class="fas fa-dollar-sign"></i>  </td>
<td class="ProductQuantity"> <button class="btn"> remove </button> </td>



</td>


</tr>

</table>

<article id="totalAmount">
<h1>TOTAL PRICE:</h1>
<h2 id="totalAmountNumber"></h2>`

ProductPrice = document.getElementsByClassName("ProductPrice");
totalAmount = document.getElementById("totalAmount");
let TotalPrice=0;

function totalPay() {
   for (let i = 0; i < ProductPrice.length; i++) {
      TotalPrice += parseInt(ProductPrice[i].innerText)
   }
   totalAmountNumber.innerHTML = `${TotalPrice}<i class="fas fa-dollar-sign"></i>`
}
totalPay()


var removeFromCart = document.getElementsByClassName("btn")
var CarProduct = document.getElementsByClassName("CarProduct")


for (let i = 0; i < removeFromCart.length; i++) {
   removeFromCart[i].onclick = () => {
      ProductPrice[i].innerText = 0
      TotalPrice=0
      CarProduct[i].style.display = "none";
      totalPay()
   }
}