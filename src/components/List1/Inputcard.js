import { Button } from '@material-ui/core';
import React from 'react'
import '../ALLstyles/Inputcard.css';
class  Inputcard extends React.Component {
    state = {
        newcard : [],
    }

    handleclick=e=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlesubmit=e=>{
        this.props.onaddoredit(this.state)

    }
    

    render(){
        
        return(
            <div className="card">
                <form className="confirm" onSubmit={this.handlesubmit}>
                    <input name="newcard" placeholder="enter a title for this card" value={this.state.newcard} onChange={this.handleclick}/>
                    <Button variant="outlined" type='submit'>Add Task</Button>
                </form>
            </div>
        )
    }
}

export default Inputcard
