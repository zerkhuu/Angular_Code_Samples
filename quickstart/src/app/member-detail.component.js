"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var member_service_1 = require("./member.service");
var form_options_1 = require("./form.options");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/switchMap");
var memberDetailComponent = (function () {
    function memberDetailComponent(memberService, route, location, _fb) {
        this.memberService = memberService;
        this.route = route;
        this.location = location;
        this._fb = _fb;
        this.ReadyOptions = [new form_options_1.fOptions('Yes'), new form_options_1.fOptions('No')];
        this.StatusOptions = [new form_options_1.fOptions('Active'), new form_options_1.fOptions('Inactive'), new form_options_1.fOptions('PUG')];
        this.GuardianOptions = [new form_options_1.fOptions('Titan'), new form_options_1.fOptions('Hunter'), new form_options_1.fOptions('Warlock')];
    }
    memberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.memberService.getmember(+params.get('id')); })
            .subscribe(function (member) { return _this.member = member; });
    };
    memberDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    memberDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.member.name.length < 1) {
            alert("Name is required.");
        }
        else {
            this.memberService.update(this.member)
                .then(function () { return _this.goBack(); });
        }
    };
    memberDetailComponent = __decorate([
        core_1.Component({
            selector: 'member-detail',
            templateUrl: './member-detail.component.html',
            styleUrls: ['./member-detail.component.css']
        }),
        __metadata("design:paramtypes", [member_service_1.memberService,
            router_1.ActivatedRoute,
            common_1.Location,
            forms_1.FormBuilder])
    ], memberDetailComponent);
    return memberDetailComponent;
}());
exports.memberDetailComponent = memberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map