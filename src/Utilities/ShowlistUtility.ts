import React, { useEffect, useState } from 'react'
import { PropertyModel } from '../Models/PropertyModel';
import { DeletePropertyInfoById, GetPropertyInfo, GetPropertyInfoById } from '../Services/PropertyServices';
import { useNavigate } from 'react-router-dom';

export default function ShowlistUtility() {
   
    const navigate = useNavigate();
    
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

    

    const handleEdit =async (Id : number) => {
        alert(Id);
        navigate(`/property/${Id}`);
    }
    const handleDelete = (Id : number) => {
        const confirmation = window.confirm("Are you sure ?");
        if(confirmation){
            alert("Data deleted");
            DeletePropertyInfoById(Id);
            alert("Data deleted");
        }
    }

    return {propertyInfo, setPropertyInfo,handleEdit,handleDelete}
}
