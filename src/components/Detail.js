import React from 'react'
import ExerciseDetail from '../pages/ExerciseDetail'
import { Typography , Stack , Button } from '@mui/material'
import BodyPartImage from '../assets/assets/icons/body-part.png'
import TargetImage from '../assets/assets/icons/target.png'
import EquipmentImage from '../assets/assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart , gifUrl , name , target , equipment} = exerciseDetail;
 
    return (
    <Stack gap="60px" sx={{flexDirection:{lg:"row"} , p:"20px" , alignItems:"center"}}>

    <img src={gifUrl} alt={name} loading='lazy' className='detail-img'/>




    </Stack>
  )
}

export default Detail