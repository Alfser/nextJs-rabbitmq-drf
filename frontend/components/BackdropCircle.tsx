'use client';

import { Backdrop, CircularProgress } from '@mui/material'

interface BackdropCircleProps {
    open: boolean
}
export function BackdropCricle({ open }: BackdropCircleProps){
    return (
        <Backdrop 
            sx={{
                color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1
            }}
            open={open}>
            <CircularProgress color='inherit'/>
        </Backdrop>
    )
}