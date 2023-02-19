import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'fullNews'
})

export class DescriptionPipe {
    transform(value: any) {
        let about:string = value+'';

        let formattedabout:string = '';

        formattedabout = about.slice(0,12)+'...';


        console.log('pipe method '+formattedabout);
        return formattedabout;

    }
}
