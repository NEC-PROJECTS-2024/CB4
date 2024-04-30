import { NgModule } from "@angular/core";

import { SearchComponent } from "./search/search.component";
import { SharedModule } from "src/app/Shared.module";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
    { path: "", redirectTo: "Search", pathMatch: "full" },
    { path: "Search", component: SearchComponent },
];
@NgModule({
    declarations: [
        SearchComponent,
    ],
    providers: [],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    bootstrap: [SearchComponent]
})
export class SearchModule { }