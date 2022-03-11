jQuery(document).ready(function($y){

    const bill            = $y('#bill');
    const numberPeople    = $y('#number-people');
    const custom          = $y('#custom');
    const porcentTip      = $y('.tip-percentage > input:not(.last)');
    let buttonReset       = $y('.btn-reset');

    function round(n)
    {
        return (Math.round(n * 100) / 100).toFixed(2);
    }

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

    $y('.tip-percentage > input').each(function(){
        $y(this).focusout(function(){
            if (bill.val() != '' && numberPeople.val() != '' && $y(this).val() != '') {
                let tip = $y(this).val() / 100;
                let results = (bill.val() / numberPeople.val()) * tip;
                $y('#totals-tip-amount').text(`$ ${round(results)}`);
            }
        });
    });

    bill.focusout(function(){
        if (bill.val() != '' && numberPeople.val() != '') {
            let results = bill.val() / numberPeople.val();
            $y('#totals').text(`$ ${round(results)}`);
        }

        if (bill.val() != '' && numberPeople.val() != '' && porcentTip.val() != '') {
            buttonReset.removeAttr('disabled');
            buttonReset.removeClass('disabled');
        }
    });

    numberPeople.focusout(function(){
        if (bill.val() != '' && numberPeople.val() != '') {
            let results = bill.val() / numberPeople.val();
            $y('#totals').text(`$ ${round(results)}`);
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
        $y('#totals-tip-amount').text("$ 0.00");
        $y('#totals').text("$ 0.00");
        $y(this).attr('disabled', 'disabled');
        $y(this).addClass('disabled');
    });
});