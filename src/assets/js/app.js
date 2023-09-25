(function() { 
    const txtNumberOfPages = document.getElementById('txtNumberOfPages');
    const btnPlus = document.getElementById('btnPlus');
    const btnMinus = document.getElementById('btnMinus');
    let timer;

    btnPlus.addEventListener('mousedown', continuosIncrement);
    btnPlus.addEventListener('mouseup', timeoutClear);
    btnPlus.addEventListener('mouseleave', timeoutClear);

    btnMinus.addEventListener('mousedown', continuosDecrement);
    btnMinus.addEventListener('mouseup', timeoutClear);
    btnMinus.addEventListener('mouseleave', timeoutClear);

    function continuosIncrement() {
        ++txtNumberOfPages.value;
        timer = setTimeout(continuosIncrement, 200);
    }

    function continuosDecrement() {
        if (txtNumberOfPages.value > 1) {
            --txtNumberOfPages.value;
            timer = setTimeout(continuosDecrement, 200);
        }
    }
    
    function timeoutClear() {
        clearTimeout(timer);
    }
})();