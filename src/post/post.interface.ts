import { tags } from 'typia';

export interface Post {
  id: number & tags.Type<'uint32'>;
  author: string & tags.MinLength<1> & tags.MaxLength<20>;
  title: string & tags.MinLength<1> & tags.MaxLength<100>;
  description: string & tags.MinLength<1> & tags.MaxLength<1000>;
}

export namespace Post {
  export interface IGetOutput {
    isSuccess: boolean;
    data: Post;
  }

  export interface IGetAllOutput {
    isSuccess: boolean;
    data: Post[];
  }

  export interface ICreateInput
    extends Pick<Post, 'author' | 'title' | 'description'> {}

  export interface IUpdateInput extends Partial<ICreateInput> {}
}
