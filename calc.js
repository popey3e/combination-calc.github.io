const nFactorial = document.getElementById("inp-n-factorial")
const factorialResult = document.getElementById("factorial-result")
const nCombination = document.getElementById("inp-n-combination")
const rCombination= document.getElementById("inp-r-combination")
const combinationResult = document.getElementById("combination-result")

const factorial = x => {
    if(x == 0 || x == 1){
        return 1
    }else {
        return  x * factorial(x-1)
    }
}	

const factorialCalc = (x) => {factorialResult.innerHTML = factorial(x)}

const combinationCalc = (a,b) => { 
    combinationResult.innerHTML = factorial(a) / (factorial(a-b) * factorial(b))	
}

const resetCombination = () => {
    nCombination.value = null
    rCombination.value = null
    combinationResult.innerHTML = ""
}

const resetFactorial = () => {
    nFactorial.value = null
    factorialResult.innerHTML = ""
}

const resetAll = () => {
    resetFactorial()
    resetCombination()
}