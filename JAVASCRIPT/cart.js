var myCart = document.getElementById("cart");

myCart.innerHTML =
`<table id="CartTable">
<tr>
<th> </th>
<th> Product Name </th>
<th> Price </th>
</tr>

<tr class="CarProduct"> 

<td class="ProductImg"><img src= ${Product[2].images[0]}> </td>
<td class="ProductName">${Product[2].NameProduct} </td>
<td class="ProductPrice">${Product[2].price}<i class="fas fa-dollar-sign"></i>  </td>
<td class="ProductQuantity">


</td>


</tr>

<tr class="CarProduct"> 

<td class="ProductImg"><img src= ${Product[15].images[0]}> </td>
<td class="ProductName">${Product[15].NameProduct} </td>
<td class="ProductPrice">${Product[15].price} <i class="fas fa-dollar-sign"></i> </td>
<td class="ProductQuantity">



</td>


</tr>

<tr class="CarProduct"> 

<td class="ProductImg"><img src= ${Product[40].images[0]}> </td>
<td class="ProductName">${Product[40].NameProduct} </td>
<td class="ProductPrice">${Product[40].price}<i class="fas fa-dollar-sign"></i>  </td>
<td class="ProductQuantity">


</td>


</tr>

</table>

<article id="totalAmount">
<h1>TOTAL PRICE:</h1>
<h2 id="totalAmountNumber"></h2>`

ProductPrice=document.getElementsByClassName("ProductPrice");
totalAmount=document.getElementById("totalAmount");
var TotalPrice=0;

function totalPay() {
   for (let i = 0; i < ProductPrice.length; i++) {
    TotalPrice+=parseInt(ProductPrice[i].innerText)
       
   } 
   return TotalPrice
}
totalPay()

totalAmount.innerHTML+=`<h1>${TotalPrice}<i class="fas fa-dollar-sign"></i> </h1>`




