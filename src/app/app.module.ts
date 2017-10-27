import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LivreModule} from './livre/livre.module';
import {RouterModule, Routes} from '@angular/router';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
    {path: '', redirectTo: '/livre', pathMatch: 'full'},
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LivreModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
