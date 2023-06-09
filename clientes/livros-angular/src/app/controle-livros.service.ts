import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
providedIn: 'root',
})
export class ControleLivrosService {
livros: Livro[] = [
{
codigo: 1,
codEditora: 1,
titulo: 'O Demonologista',
resumo:
'O Demonologista é um livro de terror escrito por Andrew Pyper, que conta a história de um professor universitário especializado em literatura demonológica.',
autores: ['Andrew Pyper'],
},
{
codigo: 2,
codEditora: 2,
titulo: 'O Rastro',
resumo:
'O Rastro é um livro de terror escrito por Guilherme Del Toro e Chuck Hogan, que se passa em uma cidade assombrada por uma estranha epidemia que transforma as pessoas em monstros.',
autores: ['Guilherme Del Toro', 'Chuck Hogan'],
},
{
codigo: 3,
codEditora: 3,
titulo: 'Alice',
resumo:
'Alice é um livro de terror psicológico escrito por Christina Henry, que reimagina a história de Alice no País das Maravilhas como um conto sombrio e perturbador.',
autores: ['Christina Henry'],
},
];

constructor() {}

obterLivros(): Livro[] {
return this.livros;
}

incluir(livro: Livro): void {
const novoCodigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
livro.codigo = novoCodigo;
this.livros.push(livro);
}

excluir(codigo: number): void {
const index = this.livros.findIndex((l) => l.codigo === codigo);
if (index !== -1) {
this.livros.splice(index, 1);
}
}
}