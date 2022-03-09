jQuery(document).ready(function($y){

    const bill            = $y('#bill');
    const numberPeople    = $y('#number-people');
    const custom          = $y('#custom');
    const porcentTip      = $y('.tip-percentage > input:not(.last)');
    let buttonReset       = $y('.btn-reset');

    porcentTip.click(function(){
        if ($y(this).hasClass('active')) {
            $y(this).removeClass('active');
        } else {
            $y('.tip-percentage > input:not(.last').removeClass('active');
            $y(this).addClass('active');
        }

        if (bill.val() != '' && numberPeople.val() != '' && porcentTip.val() != '') {
            buttonReset.removeAttr('disabled');
            buttonReset.removeClass('disabled');
        }
    });

    bill.focusout(function(){
        if (bill.val() != '' && numberPeople.val() != '') {
            let results = bill.val() / numberPeople.val();
            $y('#totals').text(`R$ ${results}`);
        }

        if (bill.val() != '' && numberPeople.val() != '' && porcentTip.val() != '') {
            buttonReset.removeAttr('disabled');
            buttonReset.removeClass('disabled');
        }
    });

    numberPeople.focusout(function(){
        if (bill.val() != '' && numberPeople.val() != '') {
            let results = bill.val() / numberPeople.val();
            $y('#totals').text(`R$ ${results}`);
        }

        if (bill.val() != '' && numberPeople.val() != '' && porcentTip.val() != '') {
            buttonReset.removeAttr('disabled');
            buttonReset.removeClass('disabled');
        }
    });

    buttonReset.click(function(){
        bill.val("");
        numberPeople.val("");
        custom.val("");
        porcentTip.removeClass('active');
        $y('#totals-tip-amount').text("R$ 0.00");
        $y('#totals').text("R$ 0.00");
        $y(this).attr('disabled', 'disabled');
        $y(this).addClass('disabled');
    });
});