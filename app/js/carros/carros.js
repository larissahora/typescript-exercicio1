"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, anoFabricacao, placa, renavan, marca, dataAquisicao, pago, roda, cor, preco) {
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.placa = placa;
        this.renavan = renavan;
        this.marca = marca;
        this.dataAquisicao = dataAquisicao;
        this.pago = pago;
        this.roda = roda;
        this.cor = cor;
        this.preco = `R$ ${preco}`;
    }
}
exports.Carro = Carro;
