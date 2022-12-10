import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';
function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy iceCream</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}//get redux state as parameter and return obj  step1
//whatever props this recives this numofcakes will salso be added to nprops and we can acces as props.numOfCakes

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}//getes redux dispatch method as a parameter and return obj step2
//whatever props this recives this numofcakes will salso be added to nprops and we can acces as props.buycake


//step3 connect step1 and step2 with react component connect functino


export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer);





///withconnect also we can connet by using redux hooks like useselctore a