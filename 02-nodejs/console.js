//import { listerTousLesPresentateurs, listerTopPresentateurs, listerToutesLesSessions, trouverUneSession } from './service';

var service=require('./service');
const readLine=require('readline');
const infos=require('./data/commandes');
const out=console.log;
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
    });
var repondALaCommande=function(commande,nomfonction,nbArg,args){
    if(commande==99){
        rl.close();
        process.exit();
    }
    if(nbArg=0){
        nomFonction();
        return;
    }
    for(var i=0;i<nbArg;i++){
        if(i==0){
            var arguments=args[0];
            contiue;
        }
        arguments+=","+args[i];
    } 
    nomfonction.apply(arguments);
}

function menu(){
    rl.question('', (answer) => {
        repondALaCommande(answer,commandes);
    });
    clearInterval(programme);
}
menu();
var programme=setInterval(function(){
    menu();

}, 10000);