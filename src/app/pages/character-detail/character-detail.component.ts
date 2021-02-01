import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/shared/models/characters';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { Comic } from 'src/app/shared/models/comic';
import { Series } from 'src/app/shared/models/serie';


/**
 * Componente detalle del los characters
 */
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  /**
   * comicData arregglo de comic
   */
  public comicData: Comic[] = [];
  /**
   * seriesData arreglo de series
   */
  public seriesData: Series[] = [];
  /**
   * character objeto de character
   */
  public character: Characters = null;       
  /**
 * paginator paginador
 */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * dataSource dataSource
   */
  dataSource = new MatTableDataSource<any>();
   /**
   * data$ observable 
   */
  data$: Observable<any>;

/**
 * Constructor 
 * @param router  Permite acceso a información sobre una ruta
 * @param charactersService servicio de character
 */
  constructor( private router : ActivatedRoute,
               private charactersService : CharactersService,
             
    ) { }

/**
* filtro de Character
* @param event valor que vamos a filtrar 
*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
     
  }

/**
 * @ignore
 */
  ngOnInit() {

    this.data$ = this.dataSource.connect();
  
    this.getByIdCharaterComic();  
    this.getByIdCharSeries();
    this.getByIdCharaterDetail();

  }

  /**
   * Metodo que busca los comics referentes a un character especifico (id)
   */
  getByIdCharaterComic = () =>{
    this.router.params.subscribe(( param )=>{

      this.charactersService.getCharacterComics(param['id']).subscribe(( resp )=>{
        if(resp.code === 200){

          resp.data.results.map((element) => {
  
            let item: Comic

            item = {

              id : element.id,
              thumbnail : element.thumbnail,
              prices : element.prices,
              title : element.title,
              creators : element.creators 
            }

            this.comicData.push(item);
 
          })
        }
        this.dataSource.data = this.comicData;
        this.dataSource.paginator = this.paginator;
      })
    })

  }

 /**
   * Metodo que busca las series referentes a un character especifico (id)
   */
  getByIdCharSeries = () =>{

    this.router.params.subscribe(( param )=>{

      this.charactersService.getCharacterSeries(param['id']).subscribe(( resp )=>{
        if(resp.code === 200){

          resp.data.results.map((element) => {
  
            let item: Series;
           
            item ={

              id : element.id,
              thumbnail : element.thumbnail,
              title : element.title,
              startYear : element.startYear,
              endYear : element.endYear,
              type : element.type,
              rating : element.rating,

            }
            
           
            this.seriesData.push(item);
          })
        }
      })
    })
  }

   /**
   * Metodo que busca los character por un atributo especifico id 
   */
  getByIdCharaterDetail = () => {

    this.router.params.subscribe(( param )=>{

      this.charactersService.getByIdCharater(param['id']).subscribe(( resp )=>{
        if(resp.code === 200){

          resp.data.results.map((element) => {
  
            this.character ={

              thumbnail : element.thumbnail,
              description : element.description,
              name: element.name,

            }
         
          
          })
        }
      })
    })

  }


}
