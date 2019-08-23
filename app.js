console.log('Hello World');

let myname = document.getElementById('myname');
    myname.style.color = 'blue';

let h2 = document.getElementsByClassName('h2');
    for (item of h2){
        item.style.color = 'red';
    }

let p = document.getElementsByClassName('p');
    for (item of p){
        item.style.color = 'green';
    }
