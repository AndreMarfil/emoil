import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOilService from '../service/CreateOilService';

export default class OilsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, expirationInMonth } = request.body;

    const createOil = container.resolve(CreateOilService);

    const oil = await createOil.execute({ name, expirationInMonth });

    return response.json(oil);
  }
}
