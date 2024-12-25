//app.controller.ts
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

export class Response {
  msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }
}

@Controller()
export class AppController {
  constructor() {
    console.log("AppController");
  }

  @Get()
  getHello(): { message: Response } {
    const response = new Response("Hello World!");
    return { message: response };
  }
}
