import axios from 'axios';
import React, { useState } from 'react'
import { GetPropertyInfo, SearchPropertyInfo } from '../Services/PropertyServices';

export default function SearchUtility() {
    const [searchProperty, setSearchProperty] = useState([]);

    const [search, setSearch] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setSearch(value);
    };
    const getForeignKeyData = async () => {
        var result = await GetPropertyInfo();
        alert(JSON.stringify(result.data))
        console.log(result);
        console.log(result.data);
        setSearchProperty(result.data);
    }
    const handleSubmit = async () => {
        alert("Submit");

        var result = await SearchPropertyInfo(search);
        setSearchProperty(result.data)
        // axios.get(`http://localhost:5167/api/propertys/search?find=${search}`)
        //     .then((res) => setSearchProperty(res.data))
        //     .catch();
    };

    return {searchProperty, handleChange, handleSubmit, search, getForeignKeyData}
}
