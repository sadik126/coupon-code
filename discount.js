console.log('here is your code')

document.getElementById('discount-btn').addEventListener('click' , function(){

  const discountvalue =  document.getElementById('discount-field');
  

  const price = document.getElementById('price')
  const updatedprice = price.innerText
  

  if(discountvalue.value == 'sadik30'){
    const mainprice = parseInt(updatedprice)- updatedprice * 30/100;
    
   window.alert(`congratulations , you will get 30% discount . please pay ${mainprice} taka`)
   price.innerText = mainprice
  }
  else{
    window.alert('you will not get discount')
    price.innerText = 1000
  }
})