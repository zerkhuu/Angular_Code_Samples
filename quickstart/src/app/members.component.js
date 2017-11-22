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
var member_service_1 = require("./member.service");
var membersComponent = (function () {
    function membersComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
    }
    membersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.memberService.create(name)
            .then(function (member) {
            _this.members.push(member);
            _this.selectedmember = null;
        });
    };
    membersComponent.prototype.delete = function (member) {
        var _this = this;
        this.memberService
            .delete(member.id)
            .then(function () {
            _this.members = _this.members.filter(function (h) { return h !== member; });
            if (_this.selectedmember === member) {
                _this.selectedmember = null;
            }
        });
    };
    membersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedmember.id]);
    };
    membersComponent.prototype.getmembers = function () {
        var _this = this;
        this.memberService.getmembers().then(function (members) { return _this.members = members; });
    };
    membersComponent.prototype.ngOnInit = function () {
        this.getmembers();
    };
    membersComponent.prototype.onSelect = function (member) {
        this.selectedmember = member;
    };
    membersComponent = __decorate([
        core_1.Component({
            selector: 'my-members',
            templateUrl: './members.component.html',
            styleUrls: ['./members.component.css']
        }),
        __metadata("design:paramtypes", [member_service_1.memberService, router_1.Router])
    ], membersComponent);
    return membersComponent;
}());
exports.membersComponent = membersComponent;
//# sourceMappingURL=members.component.js.map