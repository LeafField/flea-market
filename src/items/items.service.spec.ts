import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { ItemRepository } from './item.repository';

const mockItemRepository = () => ({});

describe('Items Service test', () => {
  beforeEach(async () => {
    let itemsService;
    let itemsRepository;
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ItemRepository,
          useFactory: mockItemRepository,
        },
      ],
    }).compile();
    itemsService = module.get<ItemsService>(ItemsService);
    itemsRepository = module.get<ItemRepository>(ItemRepository);
  });
});
