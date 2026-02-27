import { Pipe, PipeTransform } from '@angular/core';
import { COLOR_NAME, colors } from '../constants/colors';

@Pipe({
  name: 'colorize',
})
export class ColorizePipe implements PipeTransform {
  transform(userText: string, color?: COLOR_NAME | 'random' | null): string {
    if (userText === '') return userText;

    let result: string = `hmmm, you say '${userText}'?.. `;

    if (!color || color === 'random') {
      const keys = Object.keys(colors) as Array<keyof object>;
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      const randomColor = colors[randomKey];

      return result + `i know! you can colorize it with ${randomKey} color! (${randomColor})`;
    }

    const userColor = colors[color];

    return (
      result + `You want it to be ${color} color? Try this ${userColor}, i'm sure - you'll like it!`
    );
  }
}
