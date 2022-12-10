import React,{useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';
function NewCakeContainer(props) {
    const [number,setNumber]= useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numOfCakes:state.cake.numOfCakes
    }
}//get redux state as parameter and return obj  step1
//whatever props this recives this numofcakes will salso be added to nprops and we can acces as props.numOfCakes

const mapDispatchToProps = dispatch => {
    return{
        buyCake:number=>dispatch(buyCake(number))
    }
}//getes redux dispatch method as a parameter and return obj step2
//whatever props this recives this numofcakes will salso be added to nprops and we can acces as props.buycake


//step3 connect step1 and step2 with react component connect functino


export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);





///withconnect also we can connet by using redux hooks like useselctore a