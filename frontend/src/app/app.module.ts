import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { GazComponent } from './chart/gaz/gaz.component';
import { ChartsModule } from 'ng2-charts';
import { TemperaturaComponent } from './chart/temperatura/temperatura.component';
import { UmiditateComponent } from './chart/umiditate/umiditate.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { GazService } from './services/gaz.service';


@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GazComponent,
    TemperaturaComponent,
    UmiditateComponent,
    ViewPageComponent,
  ],
  imports: [
    ChartsModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent, GazService]
})
export class AppModule { }
