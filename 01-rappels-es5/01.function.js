console.log("01 - Fonctions");
var nombre1=10;
var nombre2=20;
var additionner=function(nb1,nb2){
    return nb1+nb2;
}
resultat1=additionner(nombre1,nombre2);
console.log("resultat1 == "+resultat1)

function somme(arg1,arg2){
    return additionner(arg1,arg2);
}
resultat2=somme(10,20);
console.log("resultat2 == "+resultat2);

function multiplication(arg1,arg2,arg3){
    return arg1*arg2;
}
var resultat3=multiplication(nombre1,nombre2);
console.log("resultat3 == "+resultat3);

function afficherOperation(nomOp,operation,nb1,nb2,operateur){
    console.log(nomOp+" ["+nb1+" "+operateur+" "+nb2+" ] == "+operation(nb1,nb2));
}
afficherOperation('Somme',somme,20,40,"+");
afficherOperation('Multiplication',multiplication,10,20,"x");
afficherOperation('Soustraction',function(nb1,nb2){
    return nb1-nb2;
},15,5,"-");