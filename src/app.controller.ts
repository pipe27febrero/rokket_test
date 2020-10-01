import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('')
    info() {
        return {
            name: 'Rokket API', version: '1.0.0'
        }
    }
}

