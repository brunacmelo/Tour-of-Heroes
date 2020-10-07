"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var heroes_component_1 = require("./heroes/heroes.component");
var messages_component_1 = require("./messages/messages.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var hero_search_component_1 = require("./hero-search/hero-search.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var grid_list_1 = require("@angular/material/grid-list");
var menu_1 = require("@angular/material/menu");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false }),
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                grid_list_1.MatGridListModule,
                menu_1.MatMenuModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                messages_component_1.MessagesComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
