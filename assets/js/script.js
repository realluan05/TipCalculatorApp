jQuery(document).ready(function($y){
    $y('.tip-percentage button').click(function(){
        if($y(this).hasClass('active')) {
            $y('.tip-percentage button').removeClass('active');
        } else {
            $y('.tip-percentage button').removeClass('active');
            $y(this).addClass('active');
        }
    });
});