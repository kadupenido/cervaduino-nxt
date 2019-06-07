import { Injectable } from '@nestjs/common';

import { BoardProvider } from '../board-provider';
import { Pin } from 'johnny-five';

@Injectable()
export class BuzzerService {

    buzzer: Pin;

    constructor(private readonly board: BoardProvider) {
        this.buzzer = new Pin(1);
    }

}
