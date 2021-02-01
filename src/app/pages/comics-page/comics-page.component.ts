import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/shared/models/characters';
import { Comic } from 'src/app/shared/models/comic';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { ComicsService } from 'src/app/shared/services/comics.service';

/**
 * componente pagina de creadors
 */
@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.scss']
})
export class ComicsPageComponent implements OnInit {

  /**
   * comicsData arreglo de comic
   */
  public comicsData: Comic[];
  /**
   * charactersData arreglo de character
   */
  public charactersData: Characters[] = [];
  /**
   * item objeto de comic
   */
  public item: Comic = null;
  /**
   * formCharater 
   */
  formCharater = new FormControl();
  /**
   * selected valor del select del filtro por titulo
   */
  selected = '';

  /**
   * parametro objeto para pasar por parametro
   */
  parametro = {
    value:'',
    type:''
  }

  /**
   * paginator paginador
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * dataSource data
   */
  dataSource = new MatTableDataSource<any>();
  /**
   * data$ observable 
   */
  data$: Observable<any>;

  /**
   * 
   * @param comicsService servicio de comic
   * @param charactersService servicio de character
   */
  constructor(private comicsService: ComicsService,
              private charactersService : CharactersService) { }

/**
 * @ignore
 */
  ngOnInit() {
    this.data$ = this.dataSource.connect();
    this.getComics();
    this.getCharacters();
  }

  
/**
* filtro de Comic
* @param event Comic por nombre completo que vamos a filtrar
*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  /**
   * filtro de titulo
   * @param valor valor del titulo que vamos a filtrar
   */
  selectTittle = (valor)=> {
    this.parametro.value = valor
    this.parametro.type = 'title'
    this.getComics(this.parametro);

  }

  /**
   * reset reseteamos el select de la fecha
   */
  reset= () =>{
    this.formCharater.setValue('');
    this.charactersData = [];
    this.getCharacters();
    this.getComics();
  }

  /**
   *  metodo que filtra por grupo de character
   */
  openGroupCharacter = () =>{
    let groupIdCharacter = this.formCharater.value.toString();
    this.parametro.value = groupIdCharacter
    this.parametro.type = 'group'  
   this.getComics(this.parametro); 

  }

  /**
   * metodo que busca los comics
   * @param param parmetro para filtrar a los comic
   */
  getComics = (param?: any) => {

    this.comicsService.getComics(param).subscribe(resp => {

      if (resp.code === 200) {
        this.comicsData = [];
        resp.data.results.map((element) => {

          this.item = {
            id: element.id,
            title: element.title,
            prices: element.prices,
            thumbnail: element.thumbnail,
            creators: element.creators,

          }

          this.comicsData.push(this.item);

        })
        
        this.comicsData.map((elemen) => {

          elemen.creators.items.sort((a, b) => {
            if (a.role < b.role) return 1;
            if (a.role > b.role) return -1;

            return 0;
          })
          this.dataSource.data = this.comicsData;
          this.dataSource.paginator = this.paginator;

        })
      }
    })
  }


/**
   * metodo que busca los characteres
   */
  getCharacters = () => {

    this.charactersService.getCharacters().subscribe((resp) =>{
      if(resp.code === 200){

        resp.data.results.map((element) => {
          let item: Characters ;

          item= {
            id : element.id,
            name : element.name,
          }
          this.charactersData.push(item);

        })
      }  
    })
           
  }



}
