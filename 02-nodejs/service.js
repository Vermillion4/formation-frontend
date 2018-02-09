var datas=require('./data/devfest-2015');
exports.listerTousLesPresentateurs=function(){
    return datas.speakers;
}
exports.listerToutesLesSessions=function(){
    return datas.sessions;
}
exports.trouverUneSession=function(idSession){
    
    return datas.sessions.filter(session=>session.id==idSession);
}
exports.listerTopPresentateurs=function(){
    return datas.speakers.filter(function(speaker){
        return speaker.topspeaker==true;
    })
        ;
}
