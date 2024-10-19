import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonDetailsComponent } from "./components/pokemon-details/pokemon-details.component";
import { SearchPokemonComponent } from "./components/search-pokemon/search-pokemon.component";
import { FilterPokemonPipePipe } from "./pipe/filter-pokemon--pipe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    FilterPokemonPipePipe,
    PokemonDetailsComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
