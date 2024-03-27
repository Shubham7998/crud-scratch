import React, { useEffect, useState } from 'react'
import { PropertyModel } from '../Models/PropertyModel'
import { CreatePropertyInfo, GetPropertyInfoById, UpdatePropertyInfo } from '../Services/PropertyServices';
import { useNavigate } from 'react-router-dom';

export default function PropertyUtility(id: number) {

    const navigate = useNavigate();

    const initialValue: PropertyModel = {
        propertyId: id,
        propertyTitle: "",
        propertyTypeId: 0,
        propertyDescription: "",
        propertyAddress: "",
        propertyPrice: 0,
        propertySize: 0,
        propertyBedrooms: 0,
        propertyStatusId: 0
    }

    const navigateShowList = () => {
        navigate(`/showlist`);
    }
    useEffect(() => {
        async function fetchData() {
            try {
                if (id > 0) {
                    const result = await GetPropertyInfoById(id);
                    alert(JSON.stringify(result));
                    setPropertyInfo(result.data);
                }
            } catch (error) {
                alert(error)
            }
        }
        fetchData();
    }, [id])
    const [propertyInfo, setPropertyInfo] = useState<PropertyModel>(initialValue);

    const handleSubmit = async () => {
        alert("propertyInfo.propertyId" + propertyInfo.propertyId)
        if (propertyInfo.propertyId > 0) {
            UpdatePropertyInfo(id, propertyInfo);
        } else {
            alert("Handle submit");
            await CreatePropertyInfo(propertyInfo);
            console.log("New user data created successfully.");
        }
        navigateShowList();
    }

    const onTextChangeProperty = (event: React.ChangeEvent<HTMLInputElement>) => {
        var name = event.currentTarget.name;
        var newValue = event.currentTarget.value;

        setPropertyInfo((prev) => ({ ...prev, [name]: newValue }));
    }

    const onSelectFieldChangeProperty = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;

        setPropertyInfo((prevState) => ({ ...prevState, [name]: newValue }));

    };
    const onTextAreaChangeAddress = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        var name = event.currentTarget.name;
        var newValue = event.currentTarget.value;
        setPropertyInfo((prev) => ({ ...prev, [name]: newValue }));
    }

    return { propertyInfo, setPropertyInfo, onTextChangeProperty, onSelectFieldChangeProperty, onTextAreaChangeAddress, handleSubmit }

}
