import core, { TypedBody, TypedParam } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import typia, { tags } from 'typia';
import { Post } from './post.interface';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @core.TypedRoute.Post()
  async write(
    @TypedBody() input: Post.ICreateInput,
  ): Promise<Post.ICreateOutput> {
    return typia.random<Post.ICreateOutput>();
  }

  @core.TypedRoute.Get()
  async readAll(): Promise<Post[]> {
    return typia.random<Post[]>();
  }

  @core.TypedRoute.Get(':id')
  async read(@TypedParam('id') id: `${number}`): Promise<Post> {
    const random = typia.random<Post>();
    return { ...random, id: Number(id) };
  }

  @core.TypedRoute.Patch(':id')
  async update(
    @TypedParam('id') id: `${number}`,
    @TypedBody() input: Partial<Post.ICreateInput>,
  ): Promise<Post> {
    const random = typia.random<Post>();
    return { ...random, id: Number(id) };
  }

  @core.TypedRoute.Delete(':id')
  async remove(@TypedParam('id') id: `${number}`): Promise<void> {
    return;
  }
}
