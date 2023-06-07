import { Pipe, PipeTransform } from '@angular/core';
import { Empresa } from 'src/app/shared/models/empresa';

@Pipe({
  name: 'cnpjFormat'
})
export class CnpjFormatPipe implements PipeTransform {

  transform(empresas: Empresa[]): Empresa[] {
    return empresas.map(empresa => {
      const cnpjPart1 = empresa.cnpj.substring(0, 2);
      const cnpjPart2 = empresa.cnpj.substring(2, 5);
      const cnpjPart3 = empresa.cnpj.substring(5, 8);
      const cnpjPart4 = empresa.cnpj.substring(8, 12);
      const cnpjPart5 = empresa.cnpj.substring(12, 14);

      const cnpjFormatado = `${cnpjPart1}.${cnpjPart2}.${cnpjPart3}/${cnpjPart4}-${cnpjPart5}`;
      return { ...empresa, cnpj: cnpjFormatado };
    });
  }

}
