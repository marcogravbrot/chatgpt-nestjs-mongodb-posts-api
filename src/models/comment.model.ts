import {SchemaFactory, Prop, Schema} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
	@Prop({ required: true })
	message: string;

	@Prop({ required: true })
	emoji: string;

	@Prop()
	post: string;

	@Prop()
	authorIPAddress: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
