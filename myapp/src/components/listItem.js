
import BotArmy from './BotArmy';
import { useNavigate } from 'react-router-dom';

import { useRef, useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';



function ListItem({bot}){
    console.log(bot)
    let isEnlisted =useRef() 
    let navigate= useNavigate()
  
    
    
    console.log(isEnlisted)
    return <div className='botcollection' > 
       
    </div>
}
export default ListItem;