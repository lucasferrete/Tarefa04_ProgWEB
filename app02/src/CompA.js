import React from 'react';

class CompA extends React.Component {
    render(){
        return <h1>Olá, {this.props.nome} {this.props.sobreNome}</h1>;
    }
}

export default CompA;