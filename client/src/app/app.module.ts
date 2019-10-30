import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResidenteFormComponent } from './components/residente-form/residente-form.component';
import { ResidenteListComponent } from './components/residente-list/residente-list.component';

import { ResidenteService } from './services/residente.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResidenteFormComponent,
    ResidenteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ResidenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
