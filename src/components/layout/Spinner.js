import React, {Fragment} from 'react';
import spinner from './spinner.gif';

/**
 * RENDER SPINNER WHEN USERS' DATA ARE LOADING
 */

export const Spinner = () => {
    const styles = {
        width : '200px',
        margin : 'auto',
        display : 'block'
    }
   
    return (
        <Fragment>
            <img src={spinner} alt="loading..." style={styles} />
        </Fragment>
    )

}

export default Spinner;