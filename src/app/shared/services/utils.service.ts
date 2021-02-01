import { Injectable } from '@angular/core';


/**
 * servicio util 
 */
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /**
   * @ignore
   */
  constructor() { }

  /**
   * para remplazar parametro en la url 
   * @param url url 
   * @param key la llave 
   * @param value  valor 
   */
  public settingParameter(url:string, key:string, value:string): string{
    return  url.replace(':'+key, value);
  }
}
