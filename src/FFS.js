(function(){

    var attribute_name = 'data-ffs-checked';

    function submitHandler(e)
    {
        var t = e.currentTarget;
        if(t.getAttribute(attribute_name))
        {
            return;
        }
        e.preventDefault();

        console.log("nop bastard");

        t.setAttribute(attribute_name, 'true');
    }

    function init()
    {
        document.querySelectorAll('form').forEach(function(pForm){
            pForm.addEventListener('submit', submitHandler, false);
        });
    }

    NodeList.prototype.forEach = Array.prototype.forEach;

    window.addEventListener('load', init, false);
})();