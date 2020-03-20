var slideindex=1;
showSlides(slideindex);



function plusSlides(n){
    
    showSlides(slideindex += 1);
}

function currentText(n){
    showSlides(slideindex=n);
}





function showSlides(n){
    
    var slides = document.getElementsByClassName("main-image");
    var numbers = document.getElementsByClassName('main-text_number');  
    var texts = document.getElementsByClassName("main-text_text");
    if (n > slides.length){slideindex=1}
    if (n < 1) {slideindex=slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display='none';    
    }
    for (let i = 0; i < numbers.length; i++) {
        numbers [i].style.display='none';    
    }
    for (let i = 0; i < texts.length; i++) {
        texts [i].style.display='none';    
    }
    slides[slideindex - 1 ].style.display='block';
    numbers[slideindex - 1 ].style.display='block';
    texts[slideindex- 1].style.display='block';

}