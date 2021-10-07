import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { DisplayBoardComponent } from './components/display-board/display-board.component';
import { ReportsComponent } from './components/reports/reports.component';

import { FaasosApiService } from './services/faasos-api.service';

const appRoutes: Routes = [
  {path: 'createOrder', component: CreateOrderComponent, data: [{'type':'creation'}]},
  {path: 'addPrediction', component: CreateOrderComponent, data: [{'type':'prediction'}]},
  {path: 'displayBoard', component: DisplayBoardComponent},
  {path: 'getReport', component: ReportsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    DisplayBoardComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FlashMessagesModule
  ],
  providers: [
    FlashMessagesService,
    FaasosApiService,
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent,
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ]
})
export class AppModule { }
