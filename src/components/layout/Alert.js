import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert !== null ? (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" /> {alert.message}
            </div>
        ) :null
    )
}

export default Alert;