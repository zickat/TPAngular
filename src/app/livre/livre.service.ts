import {Injectable} from '@angular/core';
import {Livre} from './Livre';

@Injectable()
export class LivreService {

    constructor() {
    }

    get(): Livre {
        return {
            titre: 'Le foot',
            author: 'Zizou',
            collection: 'Le foot est top !'
        };
    }

    getAll(): Livre[] {
        return [
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
    }

}
