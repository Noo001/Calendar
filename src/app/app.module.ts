import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DxBoxModule, DxButtonModule, DxCalendarModule, DxFormModule, DxNumberBoxModule, DxPopupModule, DxSelectBoxModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxCalendarModule,
    DxTemplateModule,
    DxBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxFormModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
