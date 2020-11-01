import React, { Component } from 'react';

/**
 * RENDER SERACH BAR
 */

export class Search extends Component {

    state = {
        text : ''
    }


    onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({
            text : ''
        });
    }

    onChange =(event) =>{
        this.setState({
            text : event.target.value
        });
        //console.log(this.state.text)
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..." 
                        value={this.state.text}
                        onChange={this.onChange}>
                    </input>
                    
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block">
                    </input>
                </form>
            </div>
        )
    }
}

export default Search
