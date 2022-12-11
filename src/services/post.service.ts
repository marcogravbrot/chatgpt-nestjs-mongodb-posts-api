import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {PostDto} from '../dtos/post.dto';
import {Post} from '../models/post.model';

@Injectable()
export class PostService {
	constructor(
		@InjectModel('Post') private readonly postModel: Model<Post>,
	) {
	}

	async create(postDto: PostDto, authorIPAddress: string): Promise<Post> {
		const createdPost = new this.postModel({
			...postDto,
			authorIPAddress,
		});
		return createdPost.save();
	}

	async findAll(): Promise<Post[]> {
		return this.postModel.find().exec();
	}

	async findById(id: string): Promise<Post> {
		return this.postModel.findById(id).exec();
	}

	async delete(id: string, authorIPAddress: string): Promise<void> {
		const post = await this.postModel.findById(id).exec();

		if (post.authorIPAddress !== authorIPAddress) {
			throw new Error('Invalid IP address');
		}

		await this.postModel.findByIdAndDelete(id).exec();
	}
}
