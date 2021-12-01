import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facture} from "../models/facture";
import {detailFacture} from "../models/detailFacture";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  url: string | undefined;
  urlD: string | undefined;
  constructor(private http: HttpClient) {
    this.url="http://localhost:8090/facture/";
    this.urlD="http://localhost:8090/detailFacture/";
  }

  getFactures(){
    return this.http.get<Facture[]>(this.url+"list");
  }
  getFacturebyId(id: number){
    return this.http.get<Facture>(this.url+"findById/"+id);
  }
  deleteFacture(id: number){
    return this.http.delete(this.url + 'delete/' + id);
  }
  deleteDetailFacture(id: number){
    return this.http.delete(this.urlD + 'delete/' + id);
  }
  ajouterDetailFacture(detailFact: detailFacture){
    return this.http.post(this.urlD + '/add'  , detailFact).subscribe();
  }

}
