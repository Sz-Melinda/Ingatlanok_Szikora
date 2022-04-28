class Ingatlan {

    constructor(elem ,adat) {

        this.elem = elem;
        this.adat = adat;

        this.kategoria = this.elem.children("h3");
        this.leiras = this.elem.children(".leiras");
        this.datum = this.elem.children(".datum");
        this.tehermentes = this.elem.children(".tehermentes");
        this.kep = this.elem.children("img");

        this.setAdatok(this.adat);
    }


    setAdatok(ertek) {

        this.kategoria.html(ertek.kategoria);
        this.leiras.html(ertek.leiras);
        this.datum.html(ertek.hirdetesDatuma);
        this.tehermentes.html(ertek.tehermentes);
        this.kep.attr("src", ertek.kepUrl);

        /*
        for (const key in ertek.kategoria) {

            
        }
        */
        
    }

}