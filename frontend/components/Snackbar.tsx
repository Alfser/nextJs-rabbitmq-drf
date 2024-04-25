import { Snackbar, IconButton } from '@mui/material'
import { Fragment } from 'react'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SnackbarProps {
    open: boolean
    handleClose: () => void
}

export function SnackbarSavePerson({ open, handleClose: handleOpen }: SnackbarProps){
    const action = (
        <Fragment>
            <IconButton
                size='small'
                aria-label="close"
                color='inherit'
                onClick={handleOpen}
            >
                <FontAwesomeIcon fontSize='small' icon={faClose}/>
            </IconButton>
        </Fragment>
    )
    return (
        <Snackbar
            open={open}
            onClose={handleOpen}
            autoHideDuration={6000}
            message="Person registered successfully!"
            anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
        />
    )
}