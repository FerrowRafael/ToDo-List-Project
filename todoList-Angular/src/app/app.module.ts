import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//#region Containers
import { HomeComponent } from './containers/home/home.component';
//#endregion

//#region Components
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoFormComponent,
    TodoListItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
