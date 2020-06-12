function calculatrice(){
    do {
        do{
            var choix = Number(prompt("Que souhaitez vous faire \n \n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division \n 5 - quitter"));
            if(choix == 5){
                alert("merci d'avoir tester la calculatrice :)");
               return;
            }
            }while(choix != 1 && choix != 2 && choix != 3 && choix != 4 && choix != 5) ;
            do{
                var premierNombre = Number(prompt("Saisissez un premier Nombre"));
                var deuxiemeNombre = Number(prompt("Saisissez un deuxième Nombre"));
            }
            while(isNaN(premierNombre) || isNaN(deuxiemeNombre))
            function addition(a,b){ return a + b;}
            function soustraction(a,b){return a - b;}
            function division(a,b){
                if(b == 0){
                    throw new Error("impossible de diviser par 0 !")
                }
                    return a / b;
            }
            function multiplication(a,b) {return a * b;}
            try {
                switch(choix){
                case 1:
                    var resultat = addition(premierNombre,deuxiemeNombre);
                    break;
                case 2:
                    var resultat = multiplication(premierNombre,deuxiemeNombre);
                    break;
                case 3:
                    var resultat = soustraction(premierNombre,deuxiemeNombre);
                    break;
                case 4:
                    var resultat = division(premierNombre,deuxiemeNombre);
                    break;
                default:
                    throw new error("une erreur est survenue !")
            }
            alert(resultat);
            restart = confirm("voulez vous relancez un calcul ?");
            } catch (error) {
                alert(error);
            }
    } while (restart == true);
    if( restart == false){
        alert("merci d'avoir tester la calculatrice :)");
    }
}