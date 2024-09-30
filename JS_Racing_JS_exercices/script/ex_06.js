window.onload = function() {


    (function() {
    
        var whiteBox = document.querySelector("footer > div");
        var result = ("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=%2A&limit=25&offset=0");
        fetch(result)
        .then(res => res.json())
        .then((res2) => {
            
            res2.records.forEach(element => {
               
                    // whiteBox.innerHTML = 
                   var commune = element.record.fields.nom_commune;
                   var etablissement = element.record.fields.nom_etablissement;
                   var mail = element.record.fields.mail;       
                   whiteBox.innerHTML += commune + ", " + etablissement + ", " + mail + "<br>";

            });

        });
    
    })(); 
    };