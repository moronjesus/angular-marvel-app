import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../constant/Constant';
import { credentials } from '../constant/Credential';
import { UtilsService } from './utils.service';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

   /**
   * 
   * @param http  parametro de httpcliente de angular 
   * @param constant parametro para las rutas api
   * @param utilsService servicio para remplazar un parametro 
   */
constructor(private http: HttpClient,
  private constant: Constant,
  private utilsService: UtilsService) { }


  /**
   * metodo para consultar los creators
   * @returns retorna todos los creators
   */
  public getCreators(): Observable<Response>{

    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)
  
    let url = this.constant.urls.creators.getCreators; 
    return this.http.get<Response>(url, {params});
  
  }
  /**
   * metodo para consultar los character por identficador unico
   * @param id parametro identificador unico
   * @returns retorna un creator especifico
   */

  public getByIdCreator( id : string ): Observable<Response>{

    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)

    let url = this.constant.urls.creators.getByIdCreator; 
    url = this.utilsService.settingParameter(url, "id", id.toString());
    return this.http.get<Response>(url, {params});

  }

  /**
   * metodo para consultar las comics por creador
   * @param id parametro identificador unico
   * @returns retorna los comis de un creator en  especifico
   */
  public getCreatorComics( id : string ) : Observable<Response>{
 
    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)

    let url = this.constant.urls.creators.getCreatorComic; 
    url = this.utilsService.settingParameter(url, "id", id.toString());
    
    return this.http.get<Response>(url, {params});
  }

  /**
   * metodo para consultar las series por creador
   * @param id parametro identificador unico
   * @returns retorna las series de un creator en especifico
   */
  public getCreatorSeries( id : string ) : Observable<Response>{
 
    let params = new HttpParams()
      .set('ts', credentials.ts)
      .set('hash', credentials.hash)
      .set('apikey', credentials.apikey)

    let url = this.constant.urls.creators.getCreatorSeries; 
    url = this.utilsService.settingParameter(url, "id", id.toString());
    
    return this.http.get<Response>(url, {params});
  }

}
