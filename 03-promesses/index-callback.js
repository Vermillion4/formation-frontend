console.log("Hello")

function findIdByEmail(email, callback) {

    $.get('http://localhost:3000/ids_store?email='+email, function(resultat){
        callback(resultat[0].id)
    })
    
}

function findTokenById(id, callback) {
    $.get('http://localhost:3000/persons_store?id='+id, function(resultat){
        callback(resultat[0].token)
    })

}

function findSecretByToken(token, callback) {
    $.get('http://localhost:3000/secrets_store?token='+token, function(resultat){
        callback(resultat[0].secret)
    })

}
const email = '2@2.fr';

findIdByEmail(email, function(id){

    findTokenById(id, function(token) {

        findSecretByToken(token, function(secret){
            
            console.log("Le secret est :", secret)
        
        
        }) 

    })

})

console.log("FIN")

