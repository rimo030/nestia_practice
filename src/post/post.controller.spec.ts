import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import * as Apis from '../api/functional';
import typia from 'typia';
import { AppModule } from '../app.module';
import { NestApplication } from '@nestjs/core';

describe('PostController', () => {
  let app: NestApplication;
  let controller: PostController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<PostController>(PostController);

    // app = module.createNestApplication();
    // app.listen(3000);
  });

  afterAll(async () => {
    // await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('test write', async () => {
    const res = await Apis.post.write(
      {
        host: 'http://localhost:3000',
        simulate: true,
      },
      {
        author: '1234567890',
        title: '1234567890',
        description: '1234567890',
      },
    );

    typia.assertEquals(res);
  });

  it('test readAll', async () => {
    const res = await Apis.post.readAll({
      host: 'http://localhost:3000',
      simulate: true,
    });

    typia.assertEquals(res);
  });

  it('test read', async () => {
    const res = await Apis.post.read(
      {
        host: 'http://localhost:3000',
        simulate: true,
      },
      '1',
    );

    typia.assertEquals(res);
  });

  it('test update', async () => {
    const res = await Apis.post.update(
      {
        host: 'http://localhost:3000',
        simulate: true,
      },
      '1',
      {},
    );

    typia.assertEquals(res);
  });
  it('test update', async () => {
    const res = await Apis.post.update(
      {
        host: 'http://localhost:3000',
        simulate: true,
      },
      '1',
      {},
    );

    typia.assertEquals(res);
  });

  it('test remove', async () => {
    const res = await Apis.post.remove(
      {
        host: 'http://localhost:3000',
        simulate: true,
      },
      '1',
    );

    typia.assertEquals(res);
  });
});
