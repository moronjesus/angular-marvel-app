import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/shared/models/characters';
import { CharactersService } from 'src/app/shared/services/characters.service';


/**
 * Componente central 
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * charactersData arreglo de character
   */
  public charactersData: Characters[] = [];

  /**
   * 
   * @param charactersService  servicio de character
   */
  constructor(private charactersService : CharactersService,) { }
/**
 * @ignore
 */
  ngOnInit() {

    this.getCharacters();
  }


  /**
   * metodo que busca los characters
   * @param param parametro de 
   */
  getCharacters = ( param?:string ) => {

    this.charactersService.getCharacters( param ).subscribe((resp) =>{

      if(resp.code === 200){
        this.charactersData = [];
        resp.data.results.map((element) => {

          let item: Characters ;

          item= {
            id : element.id,
            name : element.name,
            description: element.description,
            thumbnail : element.thumbnail,
            comics : element.comics,
            series : element.series
          }       
          this.charactersData.push(item);

        })
      }

      
    })
           
  }
}
