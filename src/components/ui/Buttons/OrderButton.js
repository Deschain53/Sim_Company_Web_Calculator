import React from 'react'
import { useSelector } from 'react-redux'
import { IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export const OrderButton = ({up, setUp, action, value}) => {
    const {mode} = useSelector(state => state.conf);

    return (
        <IconButton 
            aria-label="expand row" 
            size="small" 
            onClick={() => {
                setUp(!up);
                action(value);
            }} 
            color={ mode === 'dark' ? "primary" : "inherit"  }
        >
        {up ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    )
}
