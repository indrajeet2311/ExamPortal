"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var start_component_1 = require("./pages/user/start/start.component");
var load_quiz_component_1 = require("./pages/user/load-quiz/load-quiz.component");
var update_question_component_1 = require("./pages/admin/update-question/update-question.component");
var update_quiz_component_1 = require("./pages/admin/update-quiz/update-quiz.component");
var view_quizzes_component_1 = require("./pages/admin/view-quizzes/view-quizzes.component");
var add_category_component_1 = require("./pages/admin/add-category/add-category.component");
var view_categories_component_1 = require("./pages/admin/view-categories/view-categories.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signup_component_1 = require("./pages/signup/signup.component");
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var dashboard_component_1 = require("./pages/admin/dashboard/dashboard.component");
var user_dashboard_component_1 = require("./pages/user/user-dashboard/user-dashboard.component");
var admin_guard_1 = require("./services/admin.guard");
var normal_guard_1 = require("./services/normal.guard");
var profile_component_1 = require("./pages/profile/profile.component");
var welcome_component_1 = require("./pages/admin/welcome/welcome.component");
var add_quiz_component_1 = require("./pages/admin/add-quiz/add-quiz.component");
var view_questions_component_1 = require("./pages/admin/view-questions/view-questions.component");
var add_question_component_1 = require("./pages/admin/add-question/add-question.component");
var instructions_component_1 = require("./pages/user/instructions/instructions.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: '',
                component: welcome_component_1.WelcomeComponent
            },
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent
            },
            {
                path: 'categories',
                component: view_categories_component_1.ViewCategoriesComponent
            },
            {
                path: 'add-category',
                component: add_category_component_1.AddCategoryComponent
            },
            {
                path: 'quizzes',
                component: view_quizzes_component_1.ViewQuizzesComponent
            }, {
                path: 'add-quiz',
                component: add_quiz_component_1.AddQuizComponent
            }, {
                path: 'quiz/:qid',
                component: update_quiz_component_1.UpdateQuizComponent
            }, {
                path: 'view-questions/:qid/:title',
                component: view_questions_component_1.ViewQuestionsComponent
            }, {
                path: 'add-question/:qid/:title',
                component: add_question_component_1.AddQuestionComponent
            }, {
                path: 'question/:quesid',
                component: update_question_component_1.UpdateQuestionComponent
            }
        ],
        canActivate: [admin_guard_1.AdminGuard]
    },
    {
        path: 'user-dashboard',
        component: user_dashboard_component_1.UserDashboardComponent,
        canActivate: [normal_guard_1.NormalGuard],
        children: [
            {
                path: ':catId',
                component: load_quiz_component_1.LoadQuizComponent
            },
            {
                path: 'instructions/:qid',
                component: instructions_component_1.InstructionsComponent
            },
        ]
    },
    {
        path: "start/:qid",
        component: start_component_1.StartComponent,
        canActivate: [normal_guard_1.NormalGuard]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
