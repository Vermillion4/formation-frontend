let favoriteCityId="rome";
console.log(favoriteCityId)
favoriteCityId="paris"
console.log(favoriteCityId)
const citiesId=["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
//citiesId=[]
//Genere une erreur d'acces a la constante.
citiesId.push("tokyo")
console.log(citiesId)


function getWeather(cityId){
    this.city=cityId;
    this.temperature=20;
    return{city:this.city.toUpperCase(),temperature:this.temperature}
}

const weather=getWeather(favoriteCityId);
console.log(weather)
const{
    city,
    temperature
}=weather;
console.log(city)
console.log(temperature)
/*
Rest operator
• A l’aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et
othersCitiesId.
• Afficher dans la console la valeur de constante parisId.
• Afficher dans la console la valeur de constante nycId.
• Afficher dans la console la taille du tableau othersCitiesId.
*/
const[parisId, nycId,...othersCitiesId]=citiesId;
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)
/*
Créer une classe Trip.
• Ajouter un constructeur avec les propriétés : id, name, imageUrl.

▪ la propriété name de l’objet parisTrip.
• Vérifier le résultat dans la console.
Trip {id: "paris", name: "Paris", imageUrl: "img/paris.jpg"}
Paris

• Ajouter la méthode toString() à la classe Trip qui permet d’avoir l’affichage ci-après. Afficher
dans la console le résultat de son exécution sur l’objet parisTrip.
Trip [paris, Paris, img/paris.jpg]
• Ajouter un getter et un setter pour la propriété price. La classe sauvegardera la valeur dans une
variable privée appellée _price.
• Compléter la méthode toString() pour qu’elle affiche la valeur de _price.
• Valoriser à 100 la propriété price de l’objet parisTrip.
• Afficher dans la console, le résultat de la méthode toString() de l’objet parisTrip.
Trip [paris, Paris, img/paris.jpg, 100]
• Ajouter à la classe Trip une méthode statique getDefaultTrip() qui retourne une instance de la
classe Trip valorisée avec les informations suivantes :
◦ id : rio-de-janeiro
◦ name : Rio de Janeiro
◦ imageUrl : img/rio-de-janeiro.jpg

© Tous droits réservés à Rossi Oddet Classe | 3

• Créer une constante defaultTrip qui récupère le résultat de l’exécution de la méthode
getDefaultTrip().
• Afficher dans la console defaultTrip.toString().
*/
class Trip{
    constructor(id, name, imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }
    get price(){
        return this._price;
    }
    set price(price){
        this._price=price;
    }
    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
/*◦ id : paris
◦ name : Paris
◦ imageUrl : img/paris.jpg*/
let parisTrip=new Trip("paris","paris","img/paris.jpg");
/*
◦ Afficher dans la console :
▪ l’objet parisTrip.
 */
console.log(parisTrip)
Trip.prototype.toString=function(){
    return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+"]";
}
console.log(parisTrip.toString())
Trip.prototype.toString=function(){
    return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this._price+"]";
}
parisTrip.price=100;
console.log(parisTrip.toString())
const defaultTrip=Trip.getDefaultTrip();
console.log(defaultTrip.toString())

class FreeTrip extends Trip{
    constructor(id,name,imageUrl){
        super(id,name,imageUrl)
        this.price=0;
    }
    toString(){
        return "Free"+super.toString();
    }
}
const freeTrip=new FreeTrip("nantes", "Nantes", "img/nanges.jpg");
console.log(freeTrip.toString())
/*FreeTrip.prototype.toString=function(){
    return "Free"+this.super.toString();
}
Le super n'est pas accessible depuis le prototype*/
/**
• Compléter le constructeur de la classe TripService pour initialiser un Set de 3 objet Trip.
• Compléter le constructeur de la classe PriceService pour initialiser une Map (clé = identifiant
voyage, valeur = prix). Stocker y 2 prix pour les villes Paris et Rio de Janeiro.
• Compléter la méthode findByName(tripName) pour qu’elle renvoie une promesse.
*/
class TripService {
    constructor() {
    // TODO Set of 3 trips
        this.trips=new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
        console.log("Creation "+this.trips)
    }
    findByName(tripName) {
        return new Promise((resolve)=>{
            return "Trip found : "+resolve(this.tripName)
        },function(error){
            console.log("No trip with name "+tripName)
        })
        ;
    }
}
class PriceService {
    constructor() {
    // TODO Map of 2 trips
        this.trips=new Map();
        this.trips.set("paris",100);
        this.trips.set("rio-de-janeiro",100)
    }
    findPriceByTripId(tripId) {
        return new Promise(function(resolve){
            return resolve(tripId)
        },function(error){
            console.log("No price for trip trip id "+tripId)
        })
        ;
    }
}
let tripService=new TripService();
let func_call=function(){
    return tripService.findByName("paris").then(result=>console.log(result));
};
setTimeout(func_call,2000)

let priceService=new PriceService();
priceService.findPriceByTripId("paris");
