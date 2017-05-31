import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        answer: ''
    }

    constructor(props){
        super(props)
        this.fetchCalculation()
    }

    fetchCalculation() {
        fetch('https://newton.now.sh/simplify/2+2')
            .then(response => response.json())
            .then(answer => this.setState({answer: answer.result}))
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text"/>
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