import React from 'react';

class Adicao extends React.Component {
    render(){
        return <h1>O resultado de {this.props.x} + {this.props.y} = {this.props.x + this.props.y}</h1>
    }
}

export default Adicao;