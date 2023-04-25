import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from './jwt/jwt.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('header')
  @UseGuards(JwtGuard)
  getRequestHeader(@Req() request: Request): any {
    return request.headers;
  }
}
