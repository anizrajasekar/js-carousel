var carousel=document.querySelector('img');
var images=["images/slide1.png","images/slide2.png","images/slide3.png"];
var num=3;
function next(){
    num++;
       if(num>=images.length){
        num=0;
        carousel.src=images[num]
        
    }
    else{
       carousel.src=images[num]
       
    }
                    
};
function prev(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};