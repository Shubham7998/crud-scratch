import React, { useState } from 'react'
import { PropertyModel } from '../Models/PropertyModel'
import ShowlistUtility from '../Utilities/ShowlistUtility'

export default function Showlist() {

  const {propertyInfo, setPropertyInfo,handleEdit,handleDelete} = ShowlistUtility();

  return (
    <div>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {propertyInfo?.map((data, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{data.propertyTitle}</td>
              <td>{data.propertyTypeId}</td>
              <td>{data.propertyDescription}</td>
              <td>{data.propertyAddress}</td>
              <td>{data.propertyPrice}</td>
              <td>{data.propertySize}</td>
              <td>{data.propertyBedrooms}</td>
              <td>{data.propertyStatusId}</td>
              <td><button onClick={() => handleEdit(data.propertyId)}>Edit</button></td>
              <td><button onClick={() => handleDelete(data.propertyId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
