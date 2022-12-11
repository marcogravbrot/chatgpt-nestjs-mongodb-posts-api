import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from './services/comment.service';
import { Comment, CommentSchema } from './models/comment.model';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { Post, PostSchema } from './models/post.model';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/nest'),
		MongooseModule.forFeature([
			{ name: 'Comment', schema: CommentSchema },
			{ name: 'Post', schema: PostSchema },
		]),
	],
	controllers: [AppController, CommentController, PostController],
	providers: [AppService, CommentService, PostService],
})
export class AppModule {}
