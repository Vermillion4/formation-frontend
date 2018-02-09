var villes=['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(data){
    console.log(data);
})
var lettreADansToutesLesVilles=villes.every(function(data){
        return data.match('a');
    }
)
console.log('lettreADansToutesLesVilles == '+lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret=villes.some(function(data){
    return data.match('-');
}
)
console.log('auMoinsUneVilleAvecUnTiret == '+auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace=villes.filter(function(data){
    return !(data.match(' ') || data.match('-'));
})
villesDecorees=villesSansTiretSansEspace.map(function(data){return '\''+data+'\'';});
console.log('villesSansTiretSansEspace == ['+villesDecorees+']');

villesMajusculeSeTerminantParS=villes.filter(function(data){
    return data.charAt(data.length-1)==='s';
}).map(function(data){return data.toUpperCase();});
console.log('villesMajusculeSeTerminantParS ==',villesMajusculeSeTerminantParS);