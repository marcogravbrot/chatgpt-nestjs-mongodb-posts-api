import {SchemaFactory, Prop, Schema} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	content: string;

	@Prop({ required: true })
	imageUrl: string;

	@Prop()
	authorIPAddress: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
