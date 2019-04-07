import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';


class GachaModal extends React.Component {

  render() {
    return ( 
        <div >
          <Dialog 
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{textAlign:'center'}}>
          {this.props.title}
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
            
              <div style={{width:"100%"}}>
              <img alt='' src={this.props.gachaSummonsImg } 
                   style={{width:"100%",height:"100%",borderRadius:"5px",border:"1px solid black"}}/>
              </div>
            </DialogContentText>
          </DialogContent>

          <DialogActions style={{padding:"20px"}}>
          <Button className='gacha_button_modal'
          onClick={this.props.handleClose} variant="contained" color="ternary">Close</Button>
          </DialogActions>

        </Dialog>
        </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    gacha : state.gacha
  }
}

export default connect(mapStateToProps)(withMobileDialog()(GachaModal));