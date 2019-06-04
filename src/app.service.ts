import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  /**
   * Busca as informações sobre a API
   */
  getSystemInfo(): any {
    return {
      // name: pkgJson.name,
      // version: pkgJson.version,
      uptime: process.uptime(),
    };
  }
}
