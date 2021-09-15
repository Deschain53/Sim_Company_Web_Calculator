import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const DarkModeButton = () => {
    return (
        <IconButton > 
            <Brightness4Icon style={{ color: "white" }}/>
        </IconButton>
    )
}
