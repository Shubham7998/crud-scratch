import React, { useState } from 'react';
import '../Styles/Search.css'; // Import CSS file
import axios from 'axios';
import SearchUtility from '../Utilities/SearchUtility';
import { get } from 'http';
import PropertyUtility from '../Utilities/PropertyUtility';

export default function Search() {
    
    const {searchProperty, handleChange, handleSubmit, search, getForeignKeyData} = SearchUtility();

    

    

    return (
        <div className="search-container">
            <div className="search-input">
                <input type='search' placeholder="Enter your search term" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => handleSubmit()}>Search</button>
                <button onClick={(e) => getForeignKeyData()}>Get Data</button>
                
            </div>
            
            <div className='properties-container'>
            <table className="showlist-table">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>
                            PropertyTitle
                        </th>
                        <th>
                            TypeId
                        </th>
                        <th>Description</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Bedrooms</th>
                        <th>StatusId</th>
                    </tr>
                </thead>
                <tbody>
                    {searchProperty?.map((item: any, key: any) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.propertyTitle}</td>
                            <td>{item.propertyTypeName} </td>
                            <td>{item.propertyDescription}</td>
                            <td>{item.propertyAddress}</td>
                            <td>{item.propertyPrice}</td>
                            <td>{item.propertySize}</td>
                            <td>{item.propertyBedrooms}</td>
                            <td>{item.propertyStatuseName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}
