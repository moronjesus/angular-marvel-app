import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Constant } from './shared/constant/Constant';

//angular material
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


//layout
import { HeaderComponent } from './layout/header/header.component';


//page
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { CreatorPageComponent } from './pages/creator-page/creator-page.component';
import { HomeComponent } from './pages/home/home.component';
import { MY_FORMATS, SeriesPageComponent } from './pages/series-page/series-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { CharacterComponent } from './components/character/character.component';
import { CreatorDetailComponent } from './pages/creator-detail/creator-detail.component';
import { SerieComponent } from './components/serie/serie.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

//cdk
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataAlphabet } from 'src/assets/data/alphabet';

//moment
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';




@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    CharactersPageComponent,
    ComicsPageComponent,
    CreatorPageComponent,
    HomeComponent,
    SeriesPageComponent,
    ComicsComponent,
    CharacterDetailComponent,
    ComicDetailComponent,
    CharacterComponent,
    CreatorDetailComponent,
    SerieComponent,
    CardDetailComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    ScrollingModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
    
  ],
  providers: [ 
    Constant, 
    DataAlphabet, 
    MatDatepickerModule,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
