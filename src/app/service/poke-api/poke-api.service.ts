import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokeDetails, PokeServiceRes } from "../../class/pokemon";

const url = "https://pokeapi.co/api/v2/pokemon";
@Injectable({
  providedIn: "root",
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(url + "?limit=100000&offset=0");
  }
  getPokemonData(id: string): Observable<PokeDetails> {
    return this.http.get<PokeDetails>(url + "/" + id + "/");
  }
}
