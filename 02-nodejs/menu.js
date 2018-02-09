
const infos=require('./data/commandes');
function menu(){
    console.log('*** '+infos.commandes.title+' ***');
    for(commande in infos.commandes){
        console.log(commande.key+" "+commande.libelle);
    }
}