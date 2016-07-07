'use strict';

module.exports = function(app) {
  app.controller('HeroController', function($http) {
    this.marvel = [];
    this.dc = [];
    this.url = 'http://localhost:3000/api/';

    this.getDc = function() {
      console.log('in getDc');
      $http.get(this.url + 'dc/')
      .then((res) => {
        this.dc = res.data;
      }, (err) => {
        console.log(err);
      });
    };

    this.addDc = function(dc) {
      console.log('in addDc');
      $http.post(this.url + 'dc/', dc)
      .then((res) => {
        this.dc.push(res.data);
        this.dc = null;
      }, (err) => {
        console.log(err);
      });
    };

    this.deleteDc = function(dc) {
      console.log('in deleteDc');
      $http.delete(this.url + 'dc/' + dc._id)
      .then(() => {
        this.dc.splice(this.dc.indexOf(dc), 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updateDc = function(dc) {
      console.log('in updateDc');
      $http.put(this.url + 'dc/', dc)
      .then(() => {
        this.dc = this.dc.map(n => {
          return n._id === dc._id ? dc : n;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.getMarvel = function() {
      console.log('in getMarvel');
      $http.get(this.url + 'marvel/')
      .then((res) => {
        this.marvel = res.data;
      }, (err) => {
        console.log(err);
      });
    };

    this.addMarvel = function(marvel) {
      console.log('in addMarvel');
      $http.post(this.url + '/marvel/', marvel)
      .then((res) => {
        this.marvel.push(res.data);
        this.marvel = null;
      }, (err) => {
        console.log(err);
      });
    };

    this.deleteMarvel = function(marvel) {
      console.log('in deleteMarvel');
      $http.delete(this.url + 'marvel/' + marvel._id)
      .then(() => {
        this.marvel.splice(this.marvel.indexOf(marvel), 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updateMarvel = function(marvel) {
      console.log('in updateMarvel');
      $http.put(this.url + 'marvel/', marvel)
      .then(() => {
        this.marvel = this.marvel.map(n => {
          return n._id === marvel._id ? marvel : n;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.getHeros = function() {
      console.log('in getHeros');
      this.getDc();
      this.getMarvel();
    };
  });
};
