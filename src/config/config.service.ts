import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    public port = process.env.PORT || 3000;
    public database = process.env.DATABASE || 'mongodb://localhost/cervaduino';
}
