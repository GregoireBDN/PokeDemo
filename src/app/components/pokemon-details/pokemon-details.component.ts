import { Component, Input, OnInit } from "@angular/core";
import { PokeDetails } from "../../class/pokemon";
import { PokeShareInfoService } from "../../service/poke-share-info/poke-share-info.service";

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrl: "./pokemon-details.component.css",
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokeDetails?: PokeDetails;

  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService
      .getObservable()
      .subscribe((e: string) => console.log("e" + e));
  }
  ngOnInit(): void {}
  onClickImg(): void {
    new Audio(this.pokeDetails?.cries.legacy).play();
  }
}
