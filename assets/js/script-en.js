jQuery(document).ready(function($y){

    const bill            = $y('#bill');
    const numberPeople    = $y('#number-people');
    const custom          = $y('#custom');
    const porcentTip      = $y('.tip-percentage > input:not(.last)');
    let   tipAmount       = $y('#totals-tip-amount');
    let   totals          = $y('#totals');
    let   buttonReset     = $y('.btn-reset');

    function round(n)
    {
        return (Math.round(n * 100) / 100).toFixed(2);
    }

    function clear()
    {
        bill.val("");
        numberPeople.val("");
        custom.val("");
        porcentTip.removeClass('active');
        tipAmount.text("$0.00");
        totals.text("$0.00");
        $y(this).attr('disabled', 'disabled');
        $y(this).addClass('disabled');
    }

    function percentageTip(element)
    {
        if (element.hasClass('active')) {
            let tip = element.val() / 100;
            let results = (bill.val() / numberPeople.val()) * tip;
            tipAmount.text(`$${round(results)}`);
        }
    }

    function updateTotals(element)
    {
        element.focusout(function(){
            if (bill.val() != '' && numberPeople.val() != '') {
                let results = bill.val() / numberPeople.val();
                totals.text(`$${round(results)}`);
            }

            if (bill.val() != '' && numberPeople.val() != '' && porcentTip.val() != '') {
                buttonReset.removeAttr('disabled');
                buttonReset.removeClass('disabled');
            }

            percentageTip($y('.tip-percentage > input.active'));
        });
    }

    updateTotals(bill);
    updateTotals(numberPeople);

    $y('.tip-percentage > input').each(function(){
        $y(this).focusout(function(){
            if (bill.val() != '' && numberPeople.val() != '' && $y(this).val() != '') {
                let tip = $y(this).val() / 100;
                let results = (bill.val() / numberPeople.val()) * tip;
                tipAmount.text(`$${round(results)}`);
            }
        });
    });

    porcentTip.click(function(){
        if ($y(this).hasClass('active')) {
            $y(this).removeClass('active');
        } else {
            $y('.tip-percentage > input:not(.last)').removeClass('active');
            $y(this).addClass('active');
        }

        if (bill.val() != '' && numberPeople.val() != '' && porcentTip.val() != '') {
            buttonReset.removeAttr('disabled');
            buttonReset.removeClass('disabled');
        }
    });

    buttonReset.click(function(){
        clear();
    });
});