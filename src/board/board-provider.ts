import { Injectable } from '@nestjs/common';

import { Board } from 'johnny-five';

@Injectable()
export class BoardProvider {

    board: Board;

    constructor() {
        this.board = new Board();
    }
}
