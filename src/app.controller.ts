import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  /**
   * Busca as informações sobre a API
   */
  @Get()
  async getSystemInfo(): Promise<any> {
    return this.appService.getSystemInfo();
  }
}
