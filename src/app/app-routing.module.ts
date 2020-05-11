import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'noticias-list',
    loadChildren: () => import('./noticias-list/noticias-list.module').then( m => m.NoticiasListPageModule)
  },
  {
    path: 'noticias-detail',
    loadChildren: () => import('./noticias-detail/noticias-detail.module').then( m => m.NoticiasDetailPageModule)
  },
  {
    path: 'articulo-detail',
    loadChildren: () => import('./articulo-detail/articulo-detail.module').then( m => m.ArticuloDetailPageModule)
  },
  {
    path: 'numeros-de-telefono',
    loadChildren: () => import('./numeros-de-telefono/numeros-de-telefono.module').then( m => m.NumerosDeTelefonoPageModule)
  },
  {
    path: 'profesionales-list',
    loadChildren: () => import('./profesionales-list/profesionales-list.module').then( m => m.ProfesionalesListPageModule)
  },
  {
    path: 'profesionales-detail',
    loadChildren: () => import('./profesionales-detail/profesionales-detail.module').then( m => m.ProfesionalesDetailPageModule)
  },
  {
    path: 'colabora-con-la-app',
    loadChildren: () => import('./colabora-con-la-app/colabora-con-la-app.module').then( m => m.ColaboraConLaAppPageModule)
  },
  {
    path: 'notificaciones-list',
    loadChildren: () => import('./notificaciones-list/notificaciones-list.module').then( m => m.NotificacionesListPageModule)
  },
  {
    path: 'recursos-utilizados',
    loadChildren: () => import('./recursos-utilizados/recursos-utilizados.module').then( m => m.RecursosUtilizadosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
