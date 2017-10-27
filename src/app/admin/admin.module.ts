import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import {RouterModule, Routes} from '@angular/router';
import { AdminEditLivreComponent } from './admin-edit-livre/admin-edit-livre.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
    {
        path: '', component: AdminRootComponent,
        children: [
            {path: 'edit/:id', component: AdminEditLivreComponent},
            {path: 'edit', component: AdminEditLivreComponent},
        ]
    }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(appRoutes)
  ],
  declarations: [AdminRootComponent, AdminEditLivreComponent]
})
export class AdminModule { }
