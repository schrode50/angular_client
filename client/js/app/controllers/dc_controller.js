module.exports = function(app){
  app.controller('DcController', ['$http', DcController]);
};

function DcController($http){
  this.$http = $http;
  this.dcs = [];
  this.url = 'http://localhost:5000/api/dc';
}

DcController.prototype.getDc = function(){
  this.$http.get(this.url)
    .then((res)=>{
      this.dcs = res.data;
    }, (err)=>{
      console.log(err);
    });
};

DcController.prototype.addDc = function(){
  this.$http.post(this.url, this.dc)
    .then((res)=>{
      this.dcs.push(res.data);
      this.dc = null;
    }, (err)=>{
      console.log(err);
    });
};

DcController.prototype.deleteDc = function(dc){
  this.$http.delete(this.url + dc._id)
    .then(()=>{
      this.dcs.splice(this.dcs.indexOf(dc), 1);
    }, (err)=>{
      console.log(err);
    });
};

DcController.prototype.updateDc = function(dc, updated){

  dc.size = updated.size;

  this.$http.put(this.url, dc)
    .then(()=>{
      this.dcs = this.dcs.map((s)=>{
        return s._id === dc._id ? dc : s;
      });
    }, (err)=>{
      console.log(err);
    });

};
