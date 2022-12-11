import { Controller, Get, Post, Delete, Param, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import {CommentService} from "../services/comment.service";
import {CommentDto} from "../dtos/comment.dto";

@Controller('comments')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Post()
	async create(@Body() commentDto: CommentDto, @Req() request: Request, @Param('postId') postId: string) {
		return this.commentService.create(commentDto, request.ip);
	}

	@Get()
	async findAll() {
		return this.commentService.findAll();
	}

	@Get(':postId')
	async findAllByPost(@Param('postId') postId: string) {
		return this.commentService.findAllByPost(postId);
	}

	@Delete(':id')
	async delete(@Req() request: Request, @Param('id') id: string) {
		const comment = await this.commentService.findById(id);
		if (request.ip !== comment.authorIPAddress) {
			throw new Error('Unauthorized to delete comment');
		}
		await this.commentService.delete(id);
	}
}
