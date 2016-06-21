'use strict';

const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../client/js/client');

describe('dc test', () => {
  let dcCtrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('DcvMarvel-app');
    angular.mock.inject(function($controller, _$httpBackend_) {
      dcCtrl = new $controller('DcController');
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

  it('should get a list of DC chumps', () => {
    $httpBackend.expectGET('http://localhost:5000/api/dc')
    .respond(200, {data: [{name: 'Green Lantern', world: 'Oa', powers: 0}]});

    dcCtrl.getDc();
    $httpBackend.flush();
  });
});
