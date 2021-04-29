
var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName
}
//setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. 
//(Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
function setBestCustomer(){
    window.bestCustomer = 'not bob';
}
//overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer(overwrite) {
    bestCustomer = overwrite;
}
const leastFavoriteCustomer = 'jim'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'tim';
}