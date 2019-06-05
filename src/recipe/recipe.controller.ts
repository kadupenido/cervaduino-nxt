import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post, Put, BadRequestException, Delete } from '@nestjs/common';

import { RecipeDto } from './dto/recipe.dto';
import { IRecipe } from './interfaces/recipe.interface';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {

    constructor(private readonly recipeService: RecipeService) { }

    /**
     * Busca as receitas cadastradas
     */
    @Get()
    async findAll(): Promise<IRecipe[]> {
        return await this.recipeService.findAll();
    }

    /**
     * Busca a receita do id informado
     * @param params parametros
     */
    @Get(':id')
    async find(@Param() params): Promise<IRecipe> {
        try {

            const recipe = await this.recipeService.find(params.id);

            if (!recipe) {
                throw new NotFoundException('Receita não encontrada');
            }

            return recipe;

        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * Salva uma nova receita
     * @param recipeDto Receita
     */
    @Post()
    async create(@Body() recipeDto: RecipeDto): Promise<IRecipe> {
        try {
            return await this.recipeService.create(recipeDto);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    /**
     * Atualiza uma receita
     * @param params Parametros
     * @param recipeDto Receita
     */
    @Put(':id')
    async save(@Param() params, @Body() recipeDto: RecipeDto): Promise<IRecipe> {
        try {
            return await this.recipeService.update(params.id, recipeDto);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    /**
     * Remove a receira informada
     * @param params Parametros
     */
    @Delete(':id')
    async delete(@Param() params): Promise<void> {
        try {
            const recipe = await this.recipeService.delete(params.id);

            if (!recipe) {
                throw new BadRequestException('Receita não encontrada');
            }

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
