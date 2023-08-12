import React from 'react'
import { connect } from 'react-redux'
import { buyChocolate } from '../redux'

function ChocolateContainer(props) {
    return (
        <div>
            <h2>Number of Chocolates - {props.numOfChocolates} </h2>
            <button onClick={props.buyChocolate}>Buy Chocolate</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfChocolates: state.chocolate.numOfChocolates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: () => dispatch(buyChocolate())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer)