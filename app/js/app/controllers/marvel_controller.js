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

MarvelController.prototype.addMarvel = function(){
  this.$http.post(this.url, this.marvel)
    .then((res)=>{
      this.marvel.push(res.data);
      this.weasel = null;
    }, (err)=>{
      console.log(err);
    });
};

MarvelController.prototype.deleteMarvel = function(marvel){
  this.$http.delete(this.url + marvel._id)
    .then(()=>{
      this.marvel.splice(this.marvel.indexOf(marvel), 1);
    }, (err)=>{
      console.log(err);
    });
};

MarvelController.prototype.updateMarvel = function(marvel, updated){

  marvel.strength = updated.strength;

  this.$http.put(this.url, marvel)
    .then(()=>{
      this.marvel = this.marvel.map((w)=>{
        return w._id === marvel._id ? marvel : w;
      });
    }, (err)=>{
      console.log(err);
    });

};
