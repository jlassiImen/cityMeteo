import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { CinemaDetailsRoutingModule } from './cinema-details-routing.module';
import { CinemaDetailsComponent } from './cinema-details.component';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { CinemasService } from './../services/cinemas/cinemas.service';
import { OwlModule } from 'ngx-owl-carousel'
import { MyHttpInterceptor } from '../interceptors/MyHttpInterceptor';

@NgModule({
  declarations: [
    CinemaDetailsComponent
  ],
  imports: [
    CommonModule,
    CinemaDetailsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpModule,
    OwlModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    CinemasService, MeteoService
  ]
})
export class CinemaDetailsModule { }