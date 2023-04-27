import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPedidoComponent } from './formulario-pedido/formulario-pedido.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';

const routes: Routes = [
  {path:'', component:FormularioPedidoComponent, children:[
    {path:'formulario-producto/:idOrder', component:FormularioProductoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
