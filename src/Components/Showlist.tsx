import React, { useState } from 'react'
import { PropertyModel } from '../Models/PropertyModel'
import ShowlistUtility from '../Utilities/ShowlistUtility'
import "../Styles/Showlist.css";

export default function Showlist() {

  const { propertyInfo, setPropertyInfo, handleEdit, handleDelete } = ShowlistUtility();

  return (
    <div className="showlist-container">
      <table className="showlist-table">
        <thead>
          <tr>

            <th>Sr No.</th>
            <th>Title</th>
            <th>Type</th>
            <th>Description</th>
            <th>Address</th>
            <th>Price</th>
            <th>Size</th>
            <th>Bedrooms</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {propertyInfo?.map((data: any, key: any) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{data.propertyTitle}</td>
              <td>{data.propertyTypeName} </td>
              <td>{data.propertyDescription}</td>
              <td>{data.propertyAddress}</td>
              <td>{data.propertyPrice}</td>
              <td>{data.propertySize}</td>
              <td>{data.propertyBedrooms}</td>
              <td>{data.propertyStatuseName}</td>
              <td><button onClick={() => handleEdit(data.propertyId)}>Edit</button></td>
              <td><button onClick={() => handleDelete(data.propertyId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
