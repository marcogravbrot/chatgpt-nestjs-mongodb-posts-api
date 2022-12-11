import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from '../dtos/comment.dto';
import { Comment, CommentSchema } from '../models/comment.model';

@Injectable()
export class CommentService {
	constructor(
		@InjectModel('Comment') private readonly commentModel: Model<Comment>,
	) {}

	async create(commentDto: CommentDto, authorIPAddress: string): Promise<Comment> {
		const createdComment = new this.commentModel({
			...commentDto,
			authorIPAddress,
		});
		return createdComment.save();
	}

	async findAll(): Promise<Comment[]> {
		return this.commentModel.find().exec();
	}

	async findAllByPost(postId: string): Promise<Comment[]> {
		return this.commentModel.find({ postId }).exec();
	}

	async findById(id: string): Promise<Comment> {
		return this.commentModel.findById(id).exec();
	}

	async delete(id: string): Promise<void> {
		await this.commentModel.findByIdAndDelete(id).exec();
	}
}
