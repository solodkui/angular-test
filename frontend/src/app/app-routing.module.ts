import { CardListComponent } from './card-list/card-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/card-list/1', pathMatch: 'full' },
  { path: '*', redirectTo: '/card-list/1', pathMatch: 'full' },
  { path: 'card-list/:page', component: CardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
