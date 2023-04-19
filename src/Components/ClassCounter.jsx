import React  from "react";

class ClassCounter extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            count: 0,
         }
this.incr = this.incr.bind(this);
this.decr = this.decr.bind(this);
    }
    
     incr (){this.setState({count:this.state.count+1})};
     decr (){this.setState({count:this.state.count-1})};
    render () 
    {
    return (
        <>
        <h1>{this.state.count}</h1>
        <button onClick={this.decr}>DECR</button>
        <button onClick={this.incr}>INCR</button>
        </>
    )
    }
}

export default ClassCounter;