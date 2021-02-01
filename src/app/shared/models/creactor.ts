import { Comic } from "./comic";
import { Items } from "./items";
import { Thumbnail } from "./Thumbnail";

/**
 * interface creador
 */
export interface Creator  {

    /**
     * id identificador unico
     */
    id?:          string;
    /**
     * firstName primer nombre
     */
    firstName?:   string;
    /**
     * middleName segundo nombre
     */
    middleName?:  string;
    /**
     * lastName apellido
     */
    lastName?:    string;
    /**
     * fullName nombre completo
     */
    fullName?:    string;
    /**
     * resourceURI ruta a la lista completa
     */
    resourceURI?: string;
    /**
     * thumbnail iamgen en miniarura
     */
    thumbnail?:   Thumbnail;
    /**
     * comics comics
     */
    comics?:      Comic;
    /**
     * series series
     */
    series?:      Comic;
    /**
     * available antidad de elementos
     */
    available?: number;
    /**
     * items array de datos
     */
    items ?: Array<Items>
   
}