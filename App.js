/** @format */

import { View } from 'react-native';
import React, { Component } from 'react';
import { Topo, Resultado, Painel } from './src/components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', operacao: '', resultado: '' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    resultado = 0;
    if (this.state.operacao != '') {
      switch (this.state.operacao) {
        case 'soma':
          resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
          break;
        case 'subtracao':
          resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
          break;
        default:
          resultado = 0;
      }
    }

    this.setState({ resultado: resultado.toString() });

  }

  atualizaValor(nomeCampo, numero) {
    const obj = {};
    obj[nomeCampo] = numero;
    this.setState(obj);
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
}
