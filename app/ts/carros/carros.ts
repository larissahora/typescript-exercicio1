export class Carro {
  private modelo: String;
  private anoFabricacao: String;
  private placa: String;
  private renavan: String;
  private marca: String;
  private dataAquisicao: Date;
  private pago: Boolean;
  private roda: String;
  private cor: String;
  private preco: String;

  constructor(modelo: String, anoFabricacao: String, placa: String, renavan: String, marca: String, dataAquisicao: Date, pago: Boolean, roda: String, cor: String, preco: Number){
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