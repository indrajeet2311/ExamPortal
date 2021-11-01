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
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var navbar_component_1 = require("./components/navbar/navbar.component");
var footer_component_1 = require("./components/footer/footer.component");
var signup_component_1 = require("./pages/signup/signup.component");
var login_component_1 = require("./pages/login/login.component");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var snack_bar_1 = require("@angular/material/snack-bar");
var home_component_1 = require("./pages/home/home.component");
var card_1 = require("@angular/material/card");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var auth_interceptor_1 = require("./services/auth.interceptor");
var dashboard_component_1 = require("./pages/admin/dashboard/dashboard.component");
var user_dashboard_component_1 = require("./pages/user/user-dashboard/user-dashboard.component");
var profile_component_1 = require("./pages/profile/profile.component");
var list_1 = require("@angular/material/list");
var sidebar_component_1 = require("./pages/admin/sidebar/sidebar.component");
var welcome_component_1 = require("./pages/admin/welcome/welcome.component");
var view_categories_component_1 = require("./pages/admin/view-categories/view-categories.component");
var add_category_component_1 = require("./pages/admin/add-category/add-category.component");
var view_quizzes_component_1 = require("./pages/admin/view-quizzes/view-quizzes.component");
var add_quiz_component_1 = require("./pages/admin/add-quiz/add-quiz.component");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var select_1 = require("@angular/material/select");
var update_quiz_component_1 = require("./pages/admin/update-quiz/update-quiz.component");
var view_questions_component_1 = require("./pages/admin/view-questions/view-questions.component");
var add_question_component_1 = require("./pages/admin/add-question/add-question.component");
var update_question_component_1 = require("./pages/admin/update-question/update-question.component");
var ckeditor5_angular_1 = require("@ckeditor/ckeditor5-angular");
var sidebar_component_2 = require("./pages/user/sidebar/sidebar.component");
var load_quiz_component_1 = require("./pages/user/load-quiz/load-quiz.component");
var instructions_component_1 = require("./pages/user/instructions/instructions.component");
var start_component_1 = require("./pages/user/start/start.component");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var ngx_ui_loader_1 = require("ngx-ui-loader");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                signup_component_1.SignupComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                dashboard_component_1.DashboardComponent,
                user_dashboard_component_1.UserDashboardComponent,
                profile_component_1.ProfileComponent,
                sidebar_component_1.SidebarComponent,
                welcome_component_1.WelcomeComponent,
                view_categories_component_1.ViewCategoriesComponent,
                add_category_component_1.AddCategoryComponent,
                view_quizzes_component_1.ViewQuizzesComponent,
                add_quiz_component_1.AddQuizComponent,
                update_quiz_component_1.UpdateQuizComponent,
                view_questions_component_1.ViewQuestionsComponent,
                add_question_component_1.AddQuestionComponent,
                update_question_component_1.UpdateQuestionComponent,
                sidebar_component_2.SidebarComponent,
                load_quiz_component_1.LoadQuizComponent,
                instructions_component_1.InstructionsComponent,
                start_component_1.StartComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                forms_1.ReactiveFormsModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                forms_2.FormsModule,
                http_1.HttpClientModule,
                snack_bar_1.MatSnackBarModule,
                ckeditor5_angular_1.CKEditorModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                slide_toggle_1.MatSlideToggleModule,
                select_1.MatSelectModule,
                progress_spinner_1.MatProgressSpinnerModule,
                ngx_ui_loader_1.NgxUiLoaderModule,
                ngx_ui_loader_1.NgxUiLoaderHttpModule.forRoot({
                    showForeground: true
                }),
            ],
            providers: [auth_interceptor_1.AuthInterceptorProviders],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
