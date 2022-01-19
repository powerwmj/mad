let num = 100;
let pos = {y: 0, dy:0, state: true} // true : 스크롤 내릴때, false : 스크롤 올릴때
    window.onscroll = function(){
        pos.y = window.scrollY;
        pos.state = pos.y > pos.dy;
        pos.dy = pos.y;

        if($('.main_v').height() < window.scrollY){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

      
    if( $('.logo').offset().top < window.scrollY) {
         
        if(pos.state) {
            
            num -= 2
            
        } else {
            num += 2
        }
        
        console.log(num);
        
        $('.rect_w').css('transform',`translateY(${num}%`);
        
        
    }

    
}