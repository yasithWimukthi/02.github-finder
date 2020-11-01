import React, {Fragment} from 'react';
import spinner from './spinner.gif';

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