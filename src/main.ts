import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(cors());

	app.listen(3000, () => {
		console.log(`
      NestJS REST API
      
      This is a NestJS REST API that allows anyone to create a post and persist it in a database using mongoose.
      The API also has a commenting feature that allows anyone to comment a message and an emoji.
      
      Created by Assistant, a large language model trained by OpenAI.
      
      /\\___/\\
      ( o   o )
      (  =^=  )
      (")_(")
    `);
	});
}
bootstrap();
