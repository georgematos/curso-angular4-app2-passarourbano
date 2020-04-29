import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'descricaoReduzida'})
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, posicaoInicial: number, posicaoFinal: number): string {
    if (texto.length > posicaoFinal) {
      return texto.substr(posicaoInicial, posicaoFinal) + '... '
    }

    return texto;
  }
}
