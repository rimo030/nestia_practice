import core, { TypedBody, TypedParam } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { Post } from './post.interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @core.TypedRoute.Post()
  async write(@TypedBody() input: Post.ICreateInput): Promise<Post.IGetOutput> {
    const post = await this.postService.createPost(input);

    return {
      isSuccess: true,
      data: post,
    };
  }

  @core.TypedRoute.Get()
  async readAll(): Promise<Post.IGetAllOutput> {
    const posts = await this.postService.getAllPosts();

    return {
      isSuccess: true,
      data: posts,
    };
  }

  @core.TypedRoute.Get(':id')
  async read(@TypedParam('id') id: `${number}`): Promise<Post.IGetOutput> {
    const post = await this.postService.getPost(Number(id));

    return {
      isSuccess: true,
      data: post,
    };
  }

  @core.TypedRoute.Patch(':id')
  async update(
    @TypedParam('id') id: `${number}`,
    @TypedBody() input: Post.IUpdateInput,
  ): Promise<Post.IGetOutput> {
    const post = await this.postService.updatePost(Number(id), input);

    return {
      isSuccess: true,
      data: post,
    };
  }

  @core.TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: `${number}`): Promise<void> {
    return await this.postService.deletePost(Number(id));
  }
}
