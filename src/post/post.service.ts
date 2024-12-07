import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './post.interface';

@Injectable()
export class PostService {
  private readonly posts: Post[] = [
    { id: 1, author: 'rimo1', title: '제목1', description: '내용1' },
    { id: 2, author: 'rimo2', title: '제목2', description: '내용2' },
    { id: 3, author: 'rimo3', title: '제목3', description: '내용3' },
    { id: 4, author: 'rimo4', title: '제목4', description: '내용4' },
  ];
  private nextIndex: number = this.posts.length;

  constructor() {}

  async getNextIndex(): Promise<number> {
    return ++this.nextIndex;
  }

  async createPost(input: Post.ICreateInput): Promise<Post> {
    const post: Post = {
      id: await this.getNextIndex(),
      author: input.author,
      title: input.title,
      description: input.description,
    };

    this.posts.push(post);

    return post;
  }

  async getAllPosts(): Promise<Post[]> {
    return this.posts;
  }

  async getPost(id: number): Promise<Post> {
    const post = this.posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async updatePost(
    id: number,
    input: Partial<Post.ICreateInput>,
  ): Promise<Post> {
    const targetPost = await this.getPost(id);

    Object.assign(targetPost, input);

    this.posts.forEach((el) => {
      if (el.id === id) {
        el = targetPost;
      }
    });
    return targetPost;
  }

  async deletePost(id: number): Promise<void> {
    const targetIndex = this.posts.findIndex((post) => post.id === id);
    if (targetIndex === -1) {
      throw new NotFoundException();
    }

    this.posts.splice(targetIndex, 1);

    return;
  }
}
