import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import {RouterModule, Routes} from '@angular/router';
import { AdminEditLivreComponent } from './admin-edit-livre/admin-edit-livre.component';

const appRoutes: Routes = [
    {
        path: '', component: AdminRootComponent,
        children: [
            {path: '', component: AdminEditLivreComponent}
        ]
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(appRoutes)
  ],
  declarations: [AdminRootComponent, AdminEditLivreComponent]
})
export class AdminModule { }
