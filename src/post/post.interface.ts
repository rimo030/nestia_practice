import { tags } from 'typia';

export interface Post {
  id: number & tags.Type<'uint32'>;
  author: string & tags.MinLength<1> & tags.MaxLength<20>;
  title: string & tags.MinLength<1> & tags.MaxLength<100>;
  description: string & tags.MinLength<1> & tags.MaxLength<1000>;
}

export namespace Post {
  export interface ICreateOutput {
    isSuccess: boolean;
    data: Array<Pick<Post, 'id' | 'title' | 'author'>> &
      tags.MinItems<1> &
      tags.MaxItems<1>;
  }

  export interface ICreateInput {
    /**
     * @title title
     * @description This is title
     */
    title: string & tags.MinLength<10> & tags.MaxLength<100>;

    /**
     * @title description
     * @description This is description
     */
    description: string & tags.MinLength<10> & tags.MaxLength<1000>;
  }
}
