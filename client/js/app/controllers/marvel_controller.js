module.exports = function(app){
  app.controller('MarvelController', ['$http', MarvelController]);

};

function MarvelController($http){
  this.$http = $http;
  this.marvel = [];
  this.url = 'http://localhost:5000/api/marvel';
}

MarvelController.prototype.getMarvel = function(){
  this.$http.get(this.url)
    .then((res)=>{
      this.marvel = res.data;
    }, (err)=>{
      console.log(err);
    });
};

MarvelController.prototype.addWeasel = function(){
  this.$http.post(this.url, this.weasel)
    .then((res)=>{
      this.marvel.push(res.data);
      this.weasel = null;
    }, (err)=>{
      console.log(err);
    });
};

MarvelController.prototype.deleteWeasel = function(weasel){
  this.$http.delete(this.url + weasel._id)
    .then(()=>{
      this.marvel.splice(this.marvel.indexOf(weasel), 1);
    }, (err)=>{
      console.log(err);
    });
};

MarvelController.prototype.updateWeasel = function(weasel, updated){

  weasel.strength = updated.strength;

  this.$http.put(this.url, weasel)
    .then(()=>{
      this.marvel = this.marvel.map((w)=>{
        return w._id === weasel._id ? weasel : w;
      });
    }, (err)=>{
      console.log(err);
    });

};
