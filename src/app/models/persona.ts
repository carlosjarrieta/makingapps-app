import { Area } from "./area";

export interface Persona {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  nit: string;
  area:  Area;
}
