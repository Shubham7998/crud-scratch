import React, { useState } from 'react'
import { AdvanceSearchPropertyInfo } from '../Services/PropertyServices';
import { PropertyModel } from '../Models/PropertyModel';

export default function AdvanceSearchUtility() {

    const initialSearchCriteria: PropertyModel = {
        propertyId: 0,
        propertyTitle: '',
        propertyTypeId: 0,
        propertyDescription: '',
        propertyAddress: '',
        propertyPrice: 0,
        propertySize: 0,
        propertyBedrooms: 0,
        propertyStatusId: 0
    };

    const [searchCriteria, setSearchCriteria] = useState<PropertyModel>(initialSearchCriteria);
    const [search, setSearch] = useState<any[]>([]);

    const propertyTypes: string[] = ['House', 'Apartment', 'Condo']; 
    const statusTypes: string[] = ['Available', 'Sold', 'Future']; 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchCriteria({ ...searchCriteria, [name]: isNaN(Number(value)) ? value : Number(value) });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        alert("Done")
        e.preventDefault();
        const result = await AdvanceSearchPropertyInfo(searchCriteria);
        console.log(result);
        setSearch(result.data);
    };

    return {handleSubmit, handleChange, search, searchCriteria, initialSearchCriteria, propertyTypes, statusTypes}
}
