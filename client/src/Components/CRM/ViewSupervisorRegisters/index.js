import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import BookIcon from '@mui/icons-material/Book';
import PRS from './prs';
import UTS from './uts';
import { decodeSessionStorage } from '../../../helpers/auth.helpers';

const useStyles = makeStyles({
  root: {
    width: "90%",
    display: "flex",
    justifyContent: "space-around",
   
    
  },
});


function ViewSupervisorRegisters() {
    const userData=decodeSessionStorage().payload;
    const oname=userData.oname;
  
 
    return (
      <>

          
          { oname==="PRS" ? <PRS  /> : <></>  }
          
          { oname==="UTS" ? <UTS  /> : <></> }
  
      </>
    )
 
}

export default ViewSupervisorRegisters;
