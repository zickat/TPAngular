import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LivreRootComponent} from './livre-root/livre-root.component';
import { HeaderLivreComponent } from './header-livre/header-livre.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        LivreRootComponent
    ],
    declarations: [LivreRootComponent, HeaderLivreComponent]
})
export class LivreModule {}
