import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardGuard } from '../guard.guard';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { RestritoComponent } from './restrito/restrito.component';

const restritoRoutes: Routes = [
    {
         path: 'restrito', component: RestritoComponent, children:
         [
            { path: 'cadastro', component: CadastroProdutoComponent},
            { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard]  },
            { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard]  }
        ]
    },
        { path: '', redirectTo: '/restrito/lista', pathMatch:'full' }
    ]
    
@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})

export class RestritoRoutingModule { }