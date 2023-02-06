import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigInComponent } from './components/sig-in/sig-in.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MenuComponent } from './components/menu/menu.component';
import { GuardianGuard } from './shared/guards/guardian.guard';
import { ColorComponent } from './components/gn-color/color/color.component';
import { EditColorComponent } from './components/gn-color/edit-color/edit-color.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'signIn', component: SigInComponent },
  { path: 'menu', component: MenuComponent ,canActivate:[GuardianGuard]},
  { path: 'color', component: ColorComponent ,canActivate:[GuardianGuard]},
  // { path: 'edit/:idcolor', component: EditColorComponent ,canActivate:[GuardianGuard]},


  // { path: 'color/:idcolor', component: ColorComponent ,canActivate:[GuardianGuard]},

  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
