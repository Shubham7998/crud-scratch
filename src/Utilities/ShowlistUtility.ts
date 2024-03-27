import React, { useEffect, useState } from 'react'
import { PropertyModel } from '../Models/PropertyModel';
import { GetPropertyInfo } from '../Services/PropertyServices';

export default function ShowlistUtility() {
   
    
    const [propertyInfo, setPropertyInfo] = useState<PropertyModel[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await GetPropertyInfo();
                alert(JSON.stringify(response.data));
                setPropertyInfo(response.data);
            }catch(error){
                console.error("Error fetching data : " ,error )
            }
        }
        fetchData();
    }, [])

    const handleEdit = (Id : number) => {

    }
    const handleDelete = (Id : number) => {
        const confirmation = window.confirm("Are you sure ?");
        if(confirmation){
            alert("Data deleted");
        }
    }

    return {propertyInfo, setPropertyInfo,handleEdit,handleDelete}
}
