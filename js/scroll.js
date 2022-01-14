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
    }