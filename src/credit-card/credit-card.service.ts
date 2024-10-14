import { Injectable } from '@nestjs/common';
import { Prisma, CreditCard } from '@prisma/client';
import { PrismaService } from 'src/prisma_service';

@Injectable()
export class CreditCardService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CreditCardCreateInput): Promise<CreditCard> {
    const creditCard = await this.prisma.creditCard.create({ data });
    return creditCard;
  }
}
