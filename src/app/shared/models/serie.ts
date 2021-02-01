import { Thumbnail } from "./Thumbnail";
import { Creator } from './creactor';

/**
 * interface de serie
 */
export interface Series  {

    /**
     * id identificador unico
     */
    id?: number;
    /**
     * title titulo
     */
    title?: string;
    /**
     * startYear inicio de año
     */
    startYear?: number;
    /**
     * endYear fin de año
     */
    endYear?: number;
    /**
     * type tipo
     */
    type?: string;
    /**
     * rating  clasificacion
     */
    rating?: string;
    /**
     * thumbnail iagen miniatura
     */
    thumbnail?: Thumbnail;
    /**
     * creators creador
     */
    creators?: Creator
  
}