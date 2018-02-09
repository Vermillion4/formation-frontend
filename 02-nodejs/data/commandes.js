module.exports = {
    "commandes": 
    {
        "title":{
            "libelle": "*** Application Conférence ***",
            "fonction":"listerMenu"
            },
        "1":{
            "libelle": "Liste de tous les présentateurs",
            "fonction":"listerTousLesPresentateurs"
             },
        "2": {
            "libelle": "Top présentateurs",
            "fonction":"listerTopPresentateurs"
        },
        "3":{
            "libelle": "Liste des sessions",
            "fonction":"listerToutesLesSessions"
        },
        "4":{
            "libelle": "Détail d'une session",
            "fonction":"trouverUneSession",
            "args":"1"
        }
    }
}
