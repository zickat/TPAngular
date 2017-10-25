import {Component, OnInit} from '@angular/core';
import {Livre} from '../Livre';
import {LivreService} from '../livre.service';

@Component({
    selector: 'app-livre-list',
    templateUrl: './livre-list.component.html',
    styleUrls: ['./livre-list.component.css']
})
export class LivreListComponent implements OnInit {

    message: string;

    livres: Livre[];

    constructor(private service: LivreService) {
    }

    ngOnInit() {
        this.livres = this.service.getAll();
    }

    onClicked(livre: Livre){
        this.message = 'Livre cliqué : ' + livre.titre;
    }

}
