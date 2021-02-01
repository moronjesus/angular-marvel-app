import { Injectable } from '@angular/core';
import { credentials } from '../constant/Credential';
import { Constant } from '../constant/Constant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

/**
 * servicio comic
 */
@Injectable({
  providedIn: 'root'
})
export class ComicsService {


  /**
   * 
   * @param http  parametro de httpcliente de angular 
   * @param constant parametro para las rutas api
   * @param utilsService parametro para remplazar un parametro 
   */
constructor(private http: HttpClient,
            private constant: Constant,
            private utilsService: UtilsService) { }

  /**
   * metodo para consultar los comic
   * @param param parametro para consultar por algo en especifico
   * @returns retorna comics
   */
public getComics( param?: any): Observable<Response>{

  let params = new HttpParams()
    params = params.set('ts', credentials.ts)
    params = params.set('hash', credentials.hash)
    params = params.set('apikey', credentials.apikey)
    if(param && param.type === 'title'){
      params = params.set('orderBy', param.value )
    } 
    if(param && param.type === 'group'){
     params = params.set('sharedAppearances', param.value )
    }
  
  let url = this.constant.urls.comics.getComics; 
  return this.http.get<Response>(url, {params});

}

  /**
   * metodo para consultar un comic
   * @param id parametro identificador unico
   * @returns retorna un solo comic
   */
public getByIdComic( id : string ): Observable<Response>{

  let params = new HttpParams()
    .set('ts', credentials.ts)
    .set('hash', credentials.hash)
    .set('apikey', credentials.apikey)

  let url = this.constant.urls.comics.getByIdComics; 
  url = this.utilsService.settingParameter(url, "id", id.toString());
  return this.http.get<Response>(url, {params});

}

}
