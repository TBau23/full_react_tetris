import React from 'react';

const GridSquare = (props) => {
    // grid-square defines properties shared by all squares
    // color is dynamic

    const classes = `grid-square color-${props.color}`;
    return (
        <div className={classes}>

        </div>
    )
}

export default GridSquare