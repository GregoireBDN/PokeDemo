import { Component, OnInit } from "@angular/core";
import { IPokemon, PokeDetails, Pokemon } from "../../class/pokemon";
import { FilterPokemonPipePipe } from "../../pipe/filter-pokemon--pipe.pipe";
import { PokeApiService } from "../../service/poke-api/poke-api.service";
import { Observable } from "rxjs";
import { PokeShareInfoService } from "../../service/poke-share-info/poke-share-info.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  styleUrl: "./search-pokemon.component.css",
})
export class SearchPokemonComponent implements OnInit {
  id: string = "";
  selectPokeId: string = "";
  selectPokeDetails: PokeDetails | null = null;
  searchPokeName: string = "";
  pokeList: Pokemon[] = [];
  constructor(
    private pokeService: PokeApiService,
    private pokeShareInfoService: PokeShareInfoService
  ) {}
  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e: IPokemon, index: number) => {
        this.pokeList.push(new Pokemon("" + (index + 1), e.name, e.url));
      });
    });
  }

  go() {
    if (this.selectPokeId) {
      this.pokeService
        .getPokemonData(this.selectPokeId)
        .subscribe((data) => (this.selectPokeDetails = data));
      this.pokeShareInfoService.setValue(this.selectPokeId);
      console.log(this.selectPokeDetails);
    }
  }
}
