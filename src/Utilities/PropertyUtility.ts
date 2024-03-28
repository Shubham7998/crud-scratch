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

    const [error, setErrors] = useState<Partial<Record<string, string>>>({});

    useEffect(() => {
        async function fetchData() {
            try {
                if (id > 0) {
                    const result = await GetPropertyInfoById(id);
                    console.log(result);
                    alert(JSON.stringify(result));
                    setPropertyInfo(result.data);
                }
            } catch (error) {
                alert(error)
            }
        }
        fetchData();
    }, [id]);

    const validatePropertyFields = (propertyInfo: PropertyModel) => {
        alert("validations")
        const {
            propertyTitle,
            propertyTypeId,
            propertyDescription,
            propertyAddress,
            propertyPrice,
            propertySize,
            propertyBedrooms,
            propertyStatusId
        } = propertyInfo;
        const newErrors: Partial<Record<string, string>> = {};

        if (!propertyTitle.trim()) {
            newErrors.propertyTitle = "Property title is required";
        } else if (propertyTitle.length > 40) {
            newErrors.propertyTitle = "Property title must be less than 40 characters";
        }

        if (propertyTypeId === 0) {
            newErrors.propertyTypeId = "Please select a property type";
        }

        if (!propertyDescription.trim()) {
            newErrors.propertyDescription = "Property description is required";
        } else if (propertyDescription.length > 40) {
            newErrors.propertyDescription = "Property description must be less than 40 characters";
        }

        if (!propertyAddress.trim()) {
            newErrors.propertyAddress = "Property address is required";
        } else if (propertyAddress.length > 40) {
            newErrors.propertyAddress = "Property address must be less than 40 characters";
        }

        if (!propertyPrice || isNaN(propertyPrice) || propertyPrice <= 0) {
            newErrors.propertyPrice = "Property price must be a positive number";
        }

        if (!propertySize || isNaN(propertySize) || propertySize <= 0) {
            newErrors.propertySize = "Property size must be a positive number";
        }

        if (!propertyBedrooms || isNaN(propertyBedrooms) || propertyBedrooms <= 0 || propertyBedrooms >= 6) {
            newErrors.propertyBedrooms = "Number of bedrooms must be a positive number and less than 6";
        }

        if (propertyStatusId === 0) {
            newErrors.propertyStatusId = "Please select a property status";
        }
        return newErrors;
    };

    const [propertyInfo, setPropertyInfo] = useState<PropertyModel>(initialValue);

    const handleSubmit = async () => {

        const newErrors = validatePropertyFields(propertyInfo);
        if (Object.keys(newErrors).length > 0) {

            setErrors(newErrors);
            return;
        } else {
            try {
                alert("propertyInfo.propertyId" + propertyInfo.propertyId)
                if (propertyInfo.propertyId > 0) {
                    await UpdatePropertyInfo(id, propertyInfo);
                } else {
                    alert("Handle submit");
                    await CreatePropertyInfo(propertyInfo);
                    console.log("New user data created successfully.");
                }
                navigateShowList();
            } catch (error) {
                console.error("Error adding property:", error);
                alert("Failed to add property. Please try again later.");
            }
        }


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

    return { propertyInfo, setPropertyInfo, onTextChangeProperty, onSelectFieldChangeProperty, onTextAreaChangeAddress, handleSubmit, error }

}
