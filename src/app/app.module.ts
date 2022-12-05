import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimalTypeMenuComponent } from './components/animal-type-menu/animal-type-menu.component';
import { SearchComponent } from './components/search/search.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CareCartComponent } from './components/care-cart/care-cart.component';
import { CareCartDetailsComponent } from './components/care-cart-details/care-cart-details.component';
import { SimpleErrorModalComponent } from './components/error/modals/simple-error-modal/simple-error-modal.component';
import { AnimalCriteriaReportComponent } from './components/animal-criteria-report/animal-criteria-report.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

registerLocaleData(localeRu, 'ru');

const routes: Routes = [ // path match creates a NEW instance of component!
  { path: 'animal-criteria-report', component: AnimalCriteriaReportComponent },
  { path: 'animal-form', component: AnimalFormComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'care-cart-details', component: CareCartDetailsComponent },
  { path: 'animal-details/:id', component: AnimalDetailsComponent },
  { path: 'animal-search/:searchKey', component: AnimalListComponent },
  { path: 'animals/:code', component: AnimalListComponent },
  { path: 'animals', component: AnimalListComponent },
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: '/animals', pathMatch: 'full' }, // match an empty path
  { path: '**', redirectTo: '/animals', pathMatch: 'full' } // match anything not matched above
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AnimalListComponent,
    AnimalTypeMenuComponent,
    SearchComponent,
    AnimalDetailsComponent,
    CareCartComponent,
    CareCartDetailsComponent,
    SimpleErrorModalComponent,
    AnimalCriteriaReportComponent,
    AnimalFormComponent,
    UserFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }], // to make pipes take ru locale
  bootstrap: [AppComponent]
})
export class AppModule { }
