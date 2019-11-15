/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewPet
 * NewPet
 */
@model({name: 'NewPet'})
export class NewPet {
  constructor(data?: Partial<NewPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({required: true})
  name: string;

  /**
   * 
   */
  @property()
  tag?: string;

}

