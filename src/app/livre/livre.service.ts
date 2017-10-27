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

    add(livre: Livre): void {
        this.http.post<Livre>('/api/livre', livre).subscribe();
    }

    update(id: number, livre: Livre): void {
        this.http.put(`/api/livre/${id}`, livre).subscribe();
    }

}
