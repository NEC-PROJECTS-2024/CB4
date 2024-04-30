import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PopularComponent } from './Components/popular/popular.component';
import { BooksResolver } from './Services/Resolver/books.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Dashboard', children: [
      { path: "", redirectTo: "Books", pathMatch: "full" },
      { path: 'Books', component: DashboardComponent },
      { path: 'Popular', component: PopularComponent },
      { path: 'Search', loadChildren:()=> import('./Components/SearchModule/Search.module').then(m => m.SearchModule), resolve: { resolvedOptions: BooksResolver } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
