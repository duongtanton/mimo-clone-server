import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class DemoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log("DemoPipe");
        return value;
    }
}