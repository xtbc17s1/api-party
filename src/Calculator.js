import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        expression: '',
        answer: ''
    }

    fetchCalculation = (ev) => {
        ev.preventDefault()
        const expression = this.state.expression
        fetch(`https://newton.now.sh/simplify/${expression}`)
            .then(response => response.json())
            .then(answer => this.setState({answer: answer.result}))
    }

    handleChange = (ev) => {
        const expression = ev.currentTarget.value
        this.setState({ expression })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fetchCalculation}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.expression} 
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Calculate Expression!</button>
                    </div>
                </form>
                <h2>{this.state.answer}</h2>
            </div>
        )
    }
}

export default Calculator