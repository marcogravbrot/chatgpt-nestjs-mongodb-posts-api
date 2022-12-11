import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { Post as PostModel } from '../models/post.model';
import { PostDto } from '../dtos/post.dto';

@Controller('posts')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@Post()
	async create(
		@Body() postDto: PostDto,
		@Req() req,
	): Promise<PostModel> {
		return this.postService.create(postDto, req.ip);
	}

	@Get()
	async findAll(): Promise<PostModel[]> {
		return this.postService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<PostModel> {
		return this.postService.findById(id);
	}

	@Delete(':id')
	async delete(@Param('id') id: string, @Req() req): Promise<void> {
		await this.postService.delete(id, req.ip);
	}
}
