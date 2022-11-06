import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

registerLocaleData(localeRu, 'ru');

const routes: Routes = [ // path match creates a NEW instance of component!
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
    AnimalListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }], // to make pipes take ru locale
  bootstrap: [AppComponent]
})
export class AppModule { }
