const email = '1@1.fr';

/*
const promesse = $.get('http://localhost:3000/ids_store?email='+email);

const p1 = promesse
.then(function(resultat){
    return resultat[0].id;
})

p1.then(function(id){

})
*/



function findIdByEmail(email) {
    return $.get('http://localhost:3000/ids_store?email='+email).then(function(resultat){
        return resultat[0].id;
    })
}

function findTokenById(id, callback) {
    return $.get('http://localhost:3000/persons_store?id='+id).then(function(resultat){
        return resultat[0].token;
    })
}

function findSecretByToken(token) {
    return $.get('http://localhost:3000/secrets_store?token='+token).then(function(resultat){
        return resultat[0].secret;
    })

}
//const email = '2@2.fr';

findIdByEmail(email, function(id){

    findTokenById(id, function(token) {

        findSecretByToken(token, function(secret){
            
            console.log("Le secret est :", secret)
        
        
        }) 

    })

})

findIdByEmail(email)
.then(function(id){
    return findTokenById(id);
})
.then(function(token){
    return findSecretByToken(token);
})
.then(function(secret){
    console.log("Promesse -->", "Le secret est :", secret)
})

findIdByEmail(email)
.then(id => findTokenById(id))
.then(token => findSecretByToken(token))
.then(secret => console.log("Promesse -->", "Le secret est :", secret))


