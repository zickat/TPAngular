import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LivreRootComponent} from './livre-root/livre-root.component';
import { HeaderLivreComponent } from './header-livre/header-livre.component';
import { LivreComponent } from './livre/livre.component';
import {LivreService} from './livre.service';
import { LivreListComponent } from './livre-list/livre-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    {
        path: 'livre', component: LivreListComponent,
        children: [
            {path: '', component: LivreListComponent},
            {path: ':id', component: LivreComponent}
        ]
    },
    // {path: 'admin', component: LivreListComponent},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        LivreRootComponent
    ],
    declarations: [LivreRootComponent, HeaderLivreComponent, LivreComponent, LivreListComponent],
    providers: [LivreService]
})
export class LivreModule {}
