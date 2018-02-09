var Personne=function(nom1,pre,pseud){
   this.nom=nom1;
   this.prenom=pre;
   this.pseudo=pseud;
   this.getNomComplet = function(){
       return this.nom+' '+this.prenom+' '+this.pseudo;
       //Attention comportement inattendu  return this.nom,this.prenom,this.pseudo; retourne le pseudo seulement
    };
}

var jules=new Personne('Lemaire','Jules','jules77');
var paul=new Personne('Lemaire','Paul','paul44');

console.log(jules.nom,jules.prenom,jules.pseudo);
//console.log(paul.getNomComplet());
Personne.prototype.afficheNom=function(){
    return this.nom.toUpperCase()+' '+this.prenom;
}
console.log(paul.afficheNom());
jules.pseudo='jules44';
console.log(jules.getNomComplet());
console.log('L\'age de Jules = '+jules.age);
Personne.prototype.age='NON DEFINI';
console.log('L\'age de Jules = '+jules.age);
jules.age=30;
console.log('L\'age de Jules = '+jules.age);

Personne.prototype.getInitiales=function(){
    return this.prenom.charAt(0)+this.nom.charAt(0);
}
console.log(jules.getInitiales());
robert={}
robert.prenom='Robert';
robert.nom='LEPREFET';
robert.pseudo='rob77';
robert.getNomComplet=function(){
    return nom,prenom,pseudo;
}
//robert.afficheNom();
var Client=function(personne,numeroClient){
    this.personne=personne;
    this.numCli=numeroClient;
    this.getInfos = function(){
        return this.numCli,Personne.call(getNomComplet());
        //Attention comportement inattendu  return this.nom,this.prenom,this.pseudo; retourne le pseudo seulement
     };
 }

steve=new Client(new Personne('Lucas','Steve','steve44'),'A01');

console.log(steve.personne.afficheNom());

console.log(steve.numCli);

var Test=function(nom1,pre,pseud,numeroClient){
   Personne.call(this,nom1,pre,pseud);
   this.numCli=numeroClient;
   /*this.getNomComplet=function(titre){
        return titre;
   }
   Demo polymorphisme comme surcharge
   */
 }

testa=new Test('Tester','tessa','tes01','A4');

console.log(testa.getNomComplet());//"titl"

console.log(testa.numCli);
//console.log(testa.afficheNom()); Affiche nom n'est pas transportée aux sous-classes.