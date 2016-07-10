'use strict';

module.exports = function(app) {
  app.controller('HeroController', function($http) {
    this.marvels = [];
    this.dcs = [];

    this.getDc = function() {
      $http.get('http://localhost:3000/api/dc')
      .then((res) => {
        this.dcs = res.data;
      }, (err) => {
        console.log(err);
      });
    };

    this.addDc = function(dc) {
      $http.post('http://localhost:3000/api/dc', dc)
      .then((res) => {
        this.dcs.push(res.data);
        this.dc = null;
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.deleteDc = function(dc) {
      $http.delete('http://localhost:3000/api/dc/' + dc._id)
      .then(() => {
        this.dcs.splice(this.dcs.indexOf(dc), 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updateDc = function(dc) {
      $http.put('http://localhost:3000/api/dc/', dc)
      .then(() => {
        this.dcs = this.dcs.map(n => {
          return n._id === dc._id ? dc : n;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.getMarvel = function() {
      $http.get('http://localhost:3000/api/marvel')
      .then((res) => {
        this.marvels = res.data;
      }, (err) => {
        console.log(err);
      });
    };

    this.addMarvel = function(marvel) {
      $http.post('http://localhost:3000/api/marvel', marvel)
      .then((res) => {
        this.marvels.push(res.data);
        this.marvel = null;
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.deleteMarvel = function(marvel) {
      $http.delete('http://localhost:3000/api/marvel/' + marvel._id)
      .then(() => {
        this.marvels.splice(this.marvels.indexOf(marvel), 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updateMarvel = function(marvel) {
      $http.put('http://localhost:3000/api/marvel/', marvel)
      .then(() => {
        this.marvels = this.marvels.map(n => {
          return n._id === marvel._id ? marvel : n;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.getHeros = function() {
      this.getDc();
      this.getMarvel();
    };
  });
};
