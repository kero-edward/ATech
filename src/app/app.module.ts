import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketSalesComponent } from './components/ticket-sales/ticket-sales.component';
import { CouponChartComponent } from './components/coupon-chart/coupon-chart.component';
import { TicketHomeComponent } from './components/ticket-home/ticket-home.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    TicketSalesComponent,
    CouponChartComponent,
    TicketHomeComponent,
    TicketTableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    TooltipModule,
    BrowserModule,
    ButtonModule,
    ChartModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
