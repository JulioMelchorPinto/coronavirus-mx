import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { YouTubePlayerModule } from '@angular/youtube-player';

// Imports from ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PopoverModule } from 'ngx-bootstrap/popover';
// Import Routing
import { AppRoutingModule } from './app-routing.module';
// Imports from components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountryComponent } from './pages/country/country.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { environment } from '../environments/environment';



import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';





import { CountupComponent } from './shared/countup/countup.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  };




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,TopbarComponent, NavbarComponent, FooterComponent, DashboardComponent, CountryComponent, NotFoundComponent, CountupComponent, AssistanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    YouTubePlayerModule
  ],
  providers:[{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
