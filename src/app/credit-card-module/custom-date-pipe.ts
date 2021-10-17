import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Pipe({
    name: 'datePipe'
})

export class CustomDatePipe extends DatePipe implements PipeTransform {
    transform(value: any, arg1: any, arg2: any): any {
        if(arg1){
            var month = arg1;
            var year = arg2;
            var output = new Date(year, month);
            return super.transform(output, "MM/YY")
        }
    }

}