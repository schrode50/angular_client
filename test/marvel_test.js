'use strict';

const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../client/js/client');

describe('marvel test', () => {
  let marvelCtrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('DcvMarvel-app');
    angular.mock.inject(function($controller, _$httpBackend_) {
      marvelCtrl = new $controller('MarvelController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should pass the schmoke test', () => {
    expect(false).toBe(false);
  });

  it('should get a list of Marvel studs', () => {
    $httpBackend.expectGET('http://localhost:5000/api/marvel')
    .respond(200, {data: [{name: 'Captain America', world: 'Earth', powers: 0}]});

    marvelCtrl.getMarvel();
    $httpBackend.flush();
  });

  // it('should create a hero', () => {
  //   $httpBackend.expectPOST('http://localhost:5000/api/marvel')
  //   .respond(200, {data: [{name: 'Captain America', world: 'Earth', powers: 0}]});
  //
  //   marvelCtrl.newMarvel = [{name: 'ToastMan', world: 'Da\' Bakery', powers: 4}];
  //   marvelCtrl.addMarvel();
  //   $httpBackend.flush();
  //
  //   expect(marvelCtrl.newMarvel).toBe(null);
  // });
});
