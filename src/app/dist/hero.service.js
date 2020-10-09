"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
//import { HEROES } from './mock-heroes';
//import { MessageService } from './message.service';
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    //private messageService: MessageService) { }
    HeroService.prototype.getHeroes = function () {
        // TODO: send the message _after_ fetching the heroes
        return this.http.get(this.heroesUrl)
            .pipe(
        //tap(_ => this.log('fetched heroes')),
        operators_1.catchError(this.handleError('getHeroes', [])));
    };
    HeroService.prototype.getHero = function (id) {
        // TODO: send the message _after_ fetching the hero
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(
        //tap(_ => this.log(`fetched hero id=${id}`)),
        operators_1.catchError(this.handleError("getHero id=" + id)));
    };
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = function (hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
        //tap(_ => this.log(`updated hero id=${hero.id}`)),
        operators_1.catchError(this.handleError('updateHero')));
    };
    /** POST: add a new hero to the server */
    HeroService.prototype.addHero = function (hero) {
        return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(
        //tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        operators_1.catchError(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http["delete"](url, this.httpOptions).pipe(
        //tap(_ => this.log(`deleted hero id=${id}`)),
        operators_1.catchError(this.handleError('deleteHero')));
    };
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = function (term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return rxjs_1.of([]);
        }
        //return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        //tap(x => x.length ?
        //this.log(`found heroes matching "${term}"`) :
        //this.log(`no heroes matching "${term}"`)),
        //catchError(this.handleError<Hero[]>('searchHeroes', []))
        //);
    };
    //private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    //}
    HeroService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    HeroService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
