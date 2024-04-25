let counter=0;
function increment(){
    counter++;
    displayCounterToUI()
}
function decrement(){
    counter--;
    displayCounterToUI()
}
function displayCounterToUI(){
    let ele = document.getElementById('a');

    ele.innerHTML= 'Counter = ' + counter;
}