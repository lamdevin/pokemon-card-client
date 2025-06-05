import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'add', component: CardFormComponent },
  { path: 'edit/:id', component: CardFormComponent },
  { path: 'card/:id', component: CardDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
