import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ObjectId } from 'bson';
import { Model } from 'mongoose';

import { RecipeDto } from './dto/recipe.dto';
import { IRecipe } from './interfaces/recipe.interface';

@Injectable()
export class RecipeService {

    constructor(@Inject('RECIPE_MODEL') private readonly recipeModel: Model<IRecipe>) { }

    /**
     * Recupera todas as receitas cadastradas
     */
    async findAll(): Promise<IRecipe[]> {
        return await this.recipeModel.find().exec();
    }

    /**
     * Busca a receita do id informado
     * @param id Identificador da receita
     */
    async find(id: any): Promise<IRecipe> {

        if (!ObjectId.isValid(id)) {
            throw new BadRequestException('Id inválido!');
        }

        return await this.recipeModel.findById(id).exec();
    }

    /**
     * Cria uma nova receita
     * @param recipe Receita
     */
    async create(recipe: RecipeDto): Promise<IRecipe> {
        return await new this.recipeModel(recipe).save();
    }

    /**
     * Atualiza a receita informada
     * @param id Identificador da receita
     * @param receipe Receita
     */
    async update(id: any, receipe: RecipeDto): Promise<IRecipe> {

        if (!ObjectId.isValid(id)) {
            throw new BadRequestException('Id inválido!');
        }

        return await this.recipeModel.findByIdAndUpdate(id, receipe, { new: true});
    }

    /**
     * Deleta a receita informada
     * @param id Identificador da receita
     */
    async delete(id: any): Promise<IRecipe> {

        if (!ObjectId.isValid(id)) {
            throw new BadRequestException('Id inválido!');
        }

        return await this.recipeModel.findByIdAndDelete(id);
    }
}
