import {React, useState} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { dataExIm } from '../../store/actions/FoodAction';

export default function DropDownMenu() {
  const dispatch= useDispatch()

  const [category, setcategory] = useState('')
  const options = [
    'None',
    'Karachi',
    'Punjabi',
    'Pishawari',
    'Pakistani',
    'Desi',
    'Chines',
    'Fast Food',
    'Continental',
    'Indian',
    'Dhaba Style',
    'Organic',
];
  const handleSelect=(e)=>{
    console.log('category',e);
    setcategory(e)
    dispatch(dataExIm(e))
  }
   
  return (
    <div>
      <DropdownButton
      style={{padding:"20px", paddingLeft:"0px"}}
      alignRight
      title='category'
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
           {options.map((option, index) => (
              <Dropdown.Item eventKey={option}>{option}</Dropdown.Item>
              
              ))}
      </DropdownButton>
    </div>
  )
}