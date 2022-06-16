import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material'
import { DialogProps } from '@mui/material/Dialog'
import React from 'react'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
// import { SlideDown, SlideUp, SlideLeft, SlideRight } from '..'

interface BootStrapDialogProps extends DialogProps {
  maxDialogWidth?: string
}

const BootstrapDialog = styled(Dialog, {
  shouldForwardProp: (prop) => prop !== 'maxDialogWidth',
})<BootStrapDialogProps>(({ theme, maxDialogWidth }) => ({
  '& .MuiPaper-root': {
    borderRadius: '16px',
    // maxWidth: '800px',
    maxWidth: maxDialogWidth ?? '800px',
    '@media screen and (max-width: 600px)': {
      width: '100%',
      margin: '10px',
    },
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps): JSX.Element => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} {...other}>
      {children}
      {onClose !== undefined && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  )
}

interface DialogModalProps {
  open: boolean
  closeHandler: () => void
  title: string | React.ReactNode
  children: React.ReactNode
  footerActions?: React.ReactNode
  // slideDirection?: SlideDirection
  maxDialogWidth?: string
}

// type SlideDirection = 'up' | 'down' | 'left' | 'right'

const DialogModal: React.FC<DialogModalProps> = ({
  open,
  closeHandler,
  title,
  children,
  footerActions,
  maxDialogWidth = '800px' /* , slideDirection = 'up'  */,
}) => {
  // const TransitionComponent = (slideDirection: SlideDirection): any => {
  //   switch (slideDirection) {
  //     case 'down':
  //       return SlideDown
  //     case 'left':
  //       return SlideLeft
  //     case 'right':
  //       return SlideRight
  //     default:
  //       return SlideUp
  //   }
  // }
  return (
    <div>
      <BootstrapDialog
        onClose={closeHandler}
        aria-labelledby="customized-dialog-title"
        open={open}
        /* TransitionComponent={TransitionComponent(slideDirection)}  */ maxDialogWidth={
          maxDialogWidth ?? 800
        }
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={closeHandler}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        {footerActions !== null && footerActions !== undefined && (
          <DialogActions sx={{ padding: '15px !important' }}>
            {footerActions}
          </DialogActions>
        )}
      </BootstrapDialog>
    </div>
  )
}

export default DialogModal
