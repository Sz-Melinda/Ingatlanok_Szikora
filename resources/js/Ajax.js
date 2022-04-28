class Ajax {

    constructor(){}


    getAdat(vegpont, tomb, callback){

        tomb.splice(0,tomb.length);

        $.ajax({

            url:vegpont,
            type:"GET",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success:function(result){

                result.forEach(element => {
                    tomb.push(element)
                });
                callback();
            },
            error: function(result) {

                alert("Adat betöltés sikertelen!");
            }
        });
    }

    postAdat(vegpont, adat){

        $.ajax({

            url:vegpont,
            type:"POST",
            data:adat,
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success:function(result){
            },
            error: function(result) {

                alert("Adat feltöltés sikertelen!");
            }
        });
        
    }

    deletAdat(vegpont,id,calback,sor){

        $.ajax({
            url:vegpont+"/"+id,
            type:"DELETE",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success:function(data){
                calback(sor);
            },
            error: function(data) {
                alert("Adat törlés sikertelen!");
            }
        });
        
    }
   

}