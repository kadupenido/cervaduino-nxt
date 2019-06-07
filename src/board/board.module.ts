import { Module } from '@nestjs/common';
import { EventsModule } from '../events/events.module';
import { BoardProvider } from './board-provider';
import { BoardService } from './board.service';
import { BuzzerService } from './buzzer/buzzer.service';


@Module({
    imports: [
        EventsModule,
    ],
    providers: [
        BoardService,
        BoardProvider,
        BuzzerService,
    ],
})
export class BoardModule { }
