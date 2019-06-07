import { Injectable, Logger } from '@nestjs/common';
import { Board } from 'johnny-five';

import { EventsGateway } from '../events/events.gateway';
import { BoardProvider } from './board-provider';

@Injectable()
export class BoardService {

    board: Board;

    constructor(
        private readonly eventsGateway: EventsGateway,
        private readonly boardProvider: BoardProvider,
    ) {
        this.board = this.boardProvider.board;
        this.board.on('ready', this.boardReady);
    }

    private boardReady(): void {
        Logger.log('Board ready...');
    }
}
