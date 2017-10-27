import {Injectable} from '@angular/core';
import {Livre} from './Livre';

@Injectable()
export class LivreService {

    books: Livre[] = [
        {
            titre: 'Le foot',
            author: 'Zizou',
            collection: 'Le foot est top !'
        },
        {
            titre: 'Le foot 2',
            author: 'Zizou',
            collection: 'Le foot est top !'
        },
        {
            titre: 'Le foot 3',
            author: 'Zizou',
            collection: 'Le foot est top !'
        }
    ];

    constructor() {
    }

    get(id: number): Livre {
        return this.books[id];
    }

    getAll(): Livre[] {
        return this.books;
    }

}
