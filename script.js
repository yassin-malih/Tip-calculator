'use strict'

const button = document.getElementById("btn")
const total = document.getElementById("total")
const billVal = document.getElementById("billInput")
const billPerc = document.getElementById("billPerc")


button.addEventListener('click',function(){
const tipVal = billVal.value 
const tipPerc =  billPerc.value
const totalAll =tipVal * (1 + tipPerc / 100)
total.innerText= totalAll.toFixed(2)

})