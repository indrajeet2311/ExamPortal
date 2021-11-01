"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuestionService = void 0;
var core_1 = require("@angular/core");
var helper_1 = require("./helper");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.getQuestionsOfQuiz = function (qid) {
        return this._http.get(helper_1["default"] + "/question/quiz/all/" + qid);
    };
    QuestionService.prototype.getQuestionsOfQuizForTest = function (qid) {
        return this._http.get(helper_1["default"] + "/question/quiz/" + qid);
    };
    //add
    QuestionService.prototype.addQuestion = function (question) {
        return this._http.post(helper_1["default"] + "/question/", question);
    };
    QuestionService.prototype.deleteQuestion = function (quesId) {
        return this._http["delete"](helper_1["default"] + "/question/" + quesId);
    };
    QuestionService.prototype.getQuestion = function (quesId) {
        return this._http.get(helper_1["default"] + "/question/" + quesId);
    };
    QuestionService.prototype.updateQuestion = function (question) {
        return this._http.put(helper_1["default"] + "/question/", question);
    };
    QuestionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
