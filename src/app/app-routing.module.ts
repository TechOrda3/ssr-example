import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        loadComponent: () => import('./users/users.component').then(c => c.UsersComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./user/user.component').then(c => c.UserComponent)
      },
    ]
  },
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
