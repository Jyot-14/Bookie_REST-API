import { ValidationArguments, ValidatorConstraintInterface, ValidatorOptions } from 'class-validator';
export declare class isUniqueConstraint implements ValidatorConstraintInterface {
    defaultMessage(): string;
    validate(value: any, args: ValidationArguments): Promise<boolean>;
}
export declare function IsUnique(entity: any, field: string, validationOptions?: ValidatorOptions): (object: Object, propertyName: string) => void;
