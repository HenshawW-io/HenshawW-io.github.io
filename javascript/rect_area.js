Area = (length, width) => {
    let l = document.getElementById('length').value;
    let w = document.getElementById('width').value;

    let a = l * w;
    
    document.getElementById('area-calculator').innerHTML = 'The area of this rectangle is ' + a + '.';
}