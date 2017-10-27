import {Injectable} from '@angular/core';
import {Livre} from './Livre';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LivreService {

    constructor(private http: HttpClient) {
    }

    get(id: number): Observable<Livre> {
        return this.http.get(`/api/livre/${id}`);
    }

    getAll(): Observable<Livre[]> {
        return this.http.get('/api/livre');
    }

}
