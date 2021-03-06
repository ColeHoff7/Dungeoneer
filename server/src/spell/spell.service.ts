import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Spell } from './spell.interface';

@Injectable()
export class SpellService {
  constructor(@InjectModel('SpellModel') private spellModel: Model<Spell>) {}

  async get(): Promise<Spell[]> {
    return this.spellModel.find().exec();
  }

  async getById(id: string): Promise<Spell> {
    return this.spellModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Spell[]> {
    return this.spellModel.find({ name: name }).exec();
  }

  async getByLevel(level: number): Promise<Spell[]> {
    return this.spellModel.find({ level: level }).exec();
  }

  async getBySchool(school: string): Promise<Spell[]> {
    return this.spellModel.find({ school: school }).exec();
  }
}
