import { environment } from "src/environments/environment";


export class Constant {

    /**
     * urls endpoint para consultar las api
     */
    urls ={
        characters:{
            getCharacters: environment.server +'characters',
            getByIdCharacter: environment.server +'characters/:id',
            getCharacterComics : environment.server +'characters/:id/comics' ,
            getCharacterSeries : environment.server +'characters/:id/series' ,
        },

        comics:{
            getComics: environment.server + 'comics',
            getByIdComics: environment.server + 'comics/:id',
        },
        
        creators:{
            getCreators: environment.server + 'creators',
            getByIdCreator: environment.server + 'creators/:id',
            getCreatorComic: environment.server +'creators/:id/comics',
            getCreatorSeries : environment.server +'creators/:id/series' ,
        },

        series:{
            getSeries: environment.server + 'series',

        }


       
    }

}