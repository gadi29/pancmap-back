import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      console.log(error.details.map((detail: any) => detail.message));
      return res
        .status(422)
        .send(error.details.map((detail: any) => detail.message));
    }

    next();
  };
}
