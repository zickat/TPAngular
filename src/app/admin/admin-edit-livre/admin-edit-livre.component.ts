import {Component, OnInit} from '@angular/core';
import {Livre} from '../../livre/Livre';
import {LivreService} from '../../livre/livre.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-admin-edit-livre',
    templateUrl: './admin-edit-livre.component.html',
    styleUrls: ['./admin-edit-livre.component.css']
})
export class AdminEditLivreComponent implements OnInit {

    livre: Livre = new Livre();

    id = null;

    paramObs;

    constructor(private service: LivreService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.paramObs = this.route.paramMap.switchMap(
            (params: ParamMap) => {
                this.id = +params.get('id');
                console.log('MY ID', this.id);
                if (this.id !== null) {
                    return this.service.get(this.id);
                }
            }
        ).subscribe(livre => this.livre = livre);
    }

    submit() {
        if (this.id === null) {
            this.service.add(this.livre);
            this.livre = new Livre();
        } else {
            console.log('update', this.id);
            this.service.update(this.id, this.livre);
        }
    }

}
