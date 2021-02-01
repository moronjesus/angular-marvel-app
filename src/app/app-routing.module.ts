import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CharacterDetailComponent } from "./pages/character-detail/character-detail.component";
import { CharactersPageComponent } from "./pages/characters-page/characters-page.component";
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { ComicsPageComponent } from "./pages/comics-page/comics-page.component";
import { CreatorDetailComponent } from './pages/creator-detail/creator-detail.component';
import { CreatorPageComponent } from "./pages/creator-page/creator-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { SeriesPageComponent } from "./pages/series-page/series-page.component";

const app_routes: Routes = [
    
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'characters', 
        component: CharactersPageComponent 
    },
    { 
        path: 'comics', 
        component: ComicsPageComponent 
    },
    { 
        path: 'creators', 
        component: CreatorPageComponent 
    },
    { 
        path: 'series', 
        component: SeriesPageComponent 
    },
    {
        path:'characterdetail/:id',
        component: CharacterDetailComponent,
    },
    {
        path:'comicsdetail/:id',
        component: ComicDetailComponent,
    },
    {
        path:'creatordetail/:id',
        component: CreatorDetailComponent,
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
