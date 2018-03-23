function validateForm(){
    var ime = document.forms["forma"]["fname"].value;
    var prezime = document.forms["forma"]["lname"].value
    var kontakt = document.forms["forma"]["tel"].value;
    var opis = document.forms["forma"]["opis"].value;
    var zemlja = document.forms["forma"]["country"].value;
    if(ime=="" || prezime=="" || kontakt==""){
        alert("Neko od polja je ostalo prazno!");
    }
    else{
        var poruka = "Uspesno ste porucili proizvod: " + ime + " " + prezime + ", za ";
        if(zemlja=="srb")
            poruka+="Srbiju";
        else if(zemlja=="bih")
            poruka+="Bosnu i Hercegovinu";
        else
            poruka+="Crnu Goru";
        alert(poruka);
    }
};