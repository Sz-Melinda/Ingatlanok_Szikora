$(function(){

    const ajax = new Ajax();

    const api="http://127.0.0.1:8000/ingatlanok";
    const tomb = [];

    ajax.getAdat(api, tomb, ingatlanMegj);

    function ingatlanMegj() {

        const szuloElem = $("#ingatlanok");
        const sablonElem = $(".ingatlan");

        tomb.forEach(element => {
            
            let ujElem =sablonElem.clone().appendTo(szuloElem);
            ujElem = new Ingatlan(ujElem, tomb[element]);
        });
        sablonElem.remove();
    }


})