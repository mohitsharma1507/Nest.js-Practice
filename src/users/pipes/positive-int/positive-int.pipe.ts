import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const id = Number(value);
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('Validation failed (positive integer is expected)');
    }
    return id;
  }
}
