import {Component, Input, OnInit} from '@angular/core';
import {Livre} from '../Livre';
import {LivreService} from '../livre.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-livre',
    templateUrl: './livre.component.html',
    styleUrls: ['./livre.component.css'],
})
export class LivreComponent implements OnInit {

    @Input() livre: Livre;
    paramObs: Subscription;

    constructor(private route: ActivatedRoute, private service: LivreService) {
    }

    ngOnInit() {
        this.paramObs = this.route.paramMap.switchMap(
            (params: ParamMap) => this.service.get(+params.get('id'))
        ).subscribe(livre => this.livre = livre);
    }

}
