import { Comic } from "./comic";
import { Creator } from "./creactor";
import { Items } from "./items";
import { Prices } from "./price";
import { Thumbnail } from "./Thumbnail";


/**
 * interface de personajes
 */
export interface Characters  {

        /**
         * id identificador unico
         */
        id?: number;
        /**
         * name nombre 
         */
        name?: string;
        /**
         * description descripción
         */
        description?: string;
        /**
         * resourceURI identificador de URL 
         */
        resourceURI?: string;
        /**
         *thumbnail imagen en miniatura
         */
        thumbnail ?: Thumbnail;
        /**
         * comics  comic
         */
        comics?: Comic;
        /**
         * series series
         */
        series?: Comic;
        /**
         * title
         */
        title?: string;
        /**
         * prices precio
         */
        prices?: Prices;
        /**
         * creators creadores
         */
        creators?: Creator;
        /**
         * items array de intem resultado de la data
         */
        items?: Array<Items>
}




