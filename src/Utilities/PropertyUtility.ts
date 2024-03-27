import React, { useState } from 'react'
import { PropertyModel } from '../Models/PropertyModel'
import { CreatePropertyInfo } from '../Services/PropertyServices';

export default function PropertyUtility(id : number) {
  
    const initialValue : PropertyModel = {
        propertyId : id,
        propertyTitle : "",
        propertyTypeId : 0,
        propertyDescription : "",
        propertyAddress : "",
        propertyPrice : 0,
        propertySize : 0,
        propertyBedrooms : 0,
        propertyStatusId : 0
    }

    const [propertyInfo, setPropertyInfo] = useState<PropertyModel>(initialValue);

    const handleSubmit = async () => {
        alert("Handle submit");
        await CreatePropertyInfo(propertyInfo);
        console.log("New user data created successfully.");
    } 

    const onTextChangeProperty = (event : React.ChangeEvent<HTMLInputElement>) => {
        var name = event.currentTarget.name;
        var newValue = event.currentTarget.value;

        setPropertyInfo((prev) => ({...prev , [name] : newValue}));
    }

    const onSelectFieldChangeProperty = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
    
        setPropertyInfo((prevState) => ({ ...prevState, [name]: newValue }));
       
    };
    const onTextAreaChangeAddress = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setPropertyInfo((prev)=> ({...prev , [name]: newValue}));
    }

    return {propertyInfo, setPropertyInfo, onTextChangeProperty,onSelectFieldChangeProperty,onTextAreaChangeAddress, handleSubmit}

}
