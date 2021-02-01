import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/shared/models/comic';
import { Items } from 'src/app/shared/models/items';
import { ComicsService } from 'src/app/shared/services/comics.service';

/**
 * componente de detalle del comic
 */
@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  /**
   * comic comic
   */
  public comic: Comic = null ; 
  /**
   * creactorsData arreglos de creator
   */
  public creactorsData: Items[] = [];
  /**
   * characterData arreglos de caharacter
   */
  public characterData: Items[] = [];
  /**
   * comicSuggestData arreglos de comic sugerido
   */
  public comicSuggestData: Comic[] = [];
 
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
   * constructor
   * @param router Prermite acceso a información sobre una ruta
   * @param comicsService servcio de comics
   */
  constructor(private router : ActivatedRoute,
              private comicsService : ComicsService) { }
    
/**
 * @ignore
 */
  ngOnInit() {
    this.data$ = this.dataSource.connect();
    this.getByIdComicDetail();
  }

/**
   * Metodo que busca los comics por un identificador unico (id)
   */
  getByIdComicDetail = () => {

    this.router.params.subscribe(( param )=>{

      this.comicsService.getByIdComic(param['id']).subscribe(( resp )=>{
        if(resp.code === 200){

          resp.data.results.map((element) => {
  
            this.comic ={

              id : element.id,
              thumbnail : element.thumbnail,
              description : element.description,
              prices : element.prices,
              title : element.title,
              characters : element.characters,
              creators : element.creators,
              collectedIssues : element.collectedIssues
              
            }
            

            this.comic.collectedIssues.map((element)=>{
              let itemComic: Items 
                itemComic ={
                  resourceURI : element.resourceURI.slice(-4),
                }

              this.getSugget(itemComic.resourceURI);

            })
           
            
            this.comic.creators.items.map((element)=>{
              let item: Items; 

              item ={
                name : element.name,
                role : element.role,
                resourceURI : element.resourceURI.slice(-3),
              }
              
              this.creactorsData.push(item);
              
            })

            this.comic.characters.items.map((element)=>{
              let item: Items; 
              
              item = {
                name : element.name,
                resourceURI : element.resourceURI.slice(-7),
              }
              this.characterData.push(item);
              
            })

          }) 

        }
      })
    })
  }

/**
 * metodo que busca las sugerencia de un comic en especifico
 * @param id parametro de identificador 
 */
  getSugget(id){
   this.comicsService.getByIdComic(id).subscribe((resp)=>{

      if(resp.code === 200){
       
        resp.data.results.map((element)=>{

          let comic: Comic; 
          comic = {

            id : element.id,
            thumbnail : element.thumbnail,
            prices : element.prices,
            title : element.title,
            creators : element.creators
          }
            this.comicSuggestData.push(comic)
            
        })
    
      }  
      this.dataSource.data = this.comicSuggestData;
      this.dataSource.paginator = this.paginator;      
   })
}
  

}
