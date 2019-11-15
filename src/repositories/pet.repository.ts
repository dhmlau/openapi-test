import {DefaultCrudRepository} from '@loopback/repository';
import {Pet, PetRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PetRepository extends DefaultCrudRepository<
  Pet,
  typeof Pet.prototype.id,
  PetRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Pet, dataSource);
  }
}
