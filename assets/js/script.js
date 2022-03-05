jQuery(document).ready(function($y){
    $y('.tip-percentage > *').click(function(){
        if($y(this).hasClass('active')) {
            $y(this).removeClass('active');
        } else {
            $y('.tip-percentage > *').removeClass('active');
            $y(this).addClass('active');
        }
    });

    const bill            = $y('#bill');
    const numberPeople    = $y('#number-people');
    const custom          = $y('#custom');

    $y('.btn-reset').click(function(){
        bill.val("");
        numberPeople.val("");
        custom.val("");
    });
});