import {Component, OnInit} from '@angular/core';
import {LivreService} from '../livre.service';

@Component({
    selector: 'app-header-livre',
    templateUrl: './header-livre.component.html',
    styleUrls: ['./header-livre.component.css'],
})
export class HeaderLivreComponent implements OnInit {

    author: string;

    saisie: string;

    constructor(private service: LivreService) {
    }

    ngOnInit() {
        this.author = this.service.get(0).author;
    }

    resetSaisie() {
        this.saisie = '';
    }

}
