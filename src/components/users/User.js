import React, { Component,Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading : PropTypes.bool,
        user : PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;

        if (loading){
            return <Spinner />;
        }

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back To Search</Link>
                Hireable : {' '}

                {hireable ? (
                    <i className="fas fa-check text-success"/>
                ): (
                    <i className="fas fa-times-circle text-danger"/>
                ) }

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={style}></img>
                        <h1>{name}</h1>
                        <p>Location : {location}</p>
                    </div>

                    <div>
                        {bio ? (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        ):null}
                    </div>

                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>

                    <ul>
                        <li>
                            {login ? (
                                <Fragment>
                                    <strong>Username : </strong> {login}
                                </Fragment>
                            ):null}  
                        </li>

                        <li>
                            {blog ? (
                                <Fragment>
                                    <strong>Blog : </strong> {blog}
                                </Fragment>
                            ):null}  
                        </li>
                    </ul>
                </div>
            </Fragment>
            
        )
    }
}

const style = {
    width : "150px",
}

export default User
