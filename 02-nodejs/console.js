//import { listerTousLesPresentateurs, listerTopPresentateurs, listerToutesLesSessions, trouverUneSession } from './service';

var service=require('./service');
const readLine=require('readline');
const out=console.log;
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
    });
var repondALaCommande=function(commande,nomfonction){
    var i=0;
    if(commande==1){
        out(service.listerTousLesPresentateurs().filter(function(speaker){
                i++;return i<nb;
            }
        ));
        return;
    }
    if(commande==2){
        out(service.listerTopPresentateurs());
        return;
    }
    if(commande==3){
        out(service.listerToutesLesSessions().filter(function(speaker){
            i++;return i<nb;
            }
        ));
        return;
    }
    if(commande==4){

        rl.question('Quel session voulez-vous voir ? ', (idSession) => {
            out(service.trouverUneSession(idSession));
        });    

        return;   
    }
    if(commande==99){
        rl.close();
        process.exit();
    }
}

function menu(){
    out('*** ApplicationCoonférence ***');
    out('1. Liste de tous les présentateurs');
    out('2. Top présentateurs');
    out('3. Liste des sessions');
    out('4. Détail d\'une session');
    rl.question('', (answer) => {
        repondALaCommande(answer);
    });
    clearInterval(programme);
}
menu();
var programme=setInterval(function(){
    menu();

}, 10000);