import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * RENDER SERACH BAR
 */

export class Search extends Component {

    state = {
        text : ''
    }

    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired,
        setAlert : PropTypes.func.isRequired
    }


    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.text.trim()=== ''){
            this.props.setAlert("Please enter a name",'light');
        }
        else{
            this.props.searchUsers(this.state.text);
            this.setState({
                text : ''
            });
        }

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

                {this.props.showClear ? (
                    <button 
                    className="btn btn-light btn-block" 
                    onClick={this.props.clearUsers}>
                    Clear Users</button>
                ):null}

            </div>
        )
    }
}

export default Search
