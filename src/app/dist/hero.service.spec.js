"use strict";
exports.__esModule = true;
var hero_service_1 = require("./hero.service");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
describe('HeroService', function () {
    var httpClientSpy;
    var heroService;
    beforeEach(function () {
        // TODO: spy on other methods too
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        heroService = new hero_service_1.HeroService(httpClientSpy);
    });
    it('should return expected heroes (HttpClient called once)', function () {
        var expectedHeroes = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
        httpClientSpy.get.and.returnValue(rxjs_1.of(expectedHeroes));
        heroService.getHeroes().subscribe(function (heroes) { return expect(heroes).toEqual(expectedHeroes, 'expected heroes'); }, fail);
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
    it('should return an error when the server returns a 404', function () {
        var errorResponse = new http_1.HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });
        httpClientSpy.get.and.returnValue(rxjs_1.of(errorResponse));
        heroService.getHeroes().subscribe(function (heroes) { return fail('expected an error, not heroes'); }, function (error) { return expect(error.message).toContain('test 404 error'); });
    });
});
