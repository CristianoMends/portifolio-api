import { Length } from "class-validator";

export class CreateAboutDto {
    
    @Length(255)
    description:string;
}
