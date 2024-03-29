import React, { useState } from "react";
import { AdvanceSearchPropertyInfo } from "../Services/PropertyServices";
import { PropertyModel } from "../Models/PropertyModel";
import AdvanceSearchUtility from "../Utilities/AdvanceSearchUtility";

export default function AdvanceSearch() {
  const {
    handleSubmit,
    handleChange,
    search,
    searchCriteria,
    propertyTypes,
    statusTypes,
  } = AdvanceSearchUtility();
  return (
    <div>
      <h2>Advanced Search</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Property Title:</label>
          <input
            type="text"
            name="propertyTitle"
            value={searchCriteria.propertyTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            name="propertyTypeId"
            value={searchCriteria.propertyTypeId}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={index + 1}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="propertyDescription"
            value={searchCriteria.propertyDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="propertyAddress"
            value={searchCriteria.propertyAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="propertyPrice"
            placeholder="Price"
            value={searchCriteria.propertyPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="number"
            name="propertySize"
            placeholder="Size"
            value={searchCriteria.propertySize}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bedrooms:</label>
          <input
            type="number"
            name="propertyBedrooms"
            value={searchCriteria.propertyBedrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="propertyStatusId"
            value={searchCriteria.propertyStatusId}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            {statusTypes.map((status, index) => (
              <option key={index} value={index + 1}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
      <div className="properties-container">
        <table className="showlist-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>PropertyTitle</th>
              <th>TypeId</th>
              <th>Description</th>
              <th>Address</th>
              <th>Price</th>
              <th>Size</th>
              <th>Bedrooms</th>
              <th>StatusId</th>
            </tr>
          </thead>
          <tbody>
            {search?.map((item: any, key: number) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.propertyTitle}</td>
                <td>{item.propertyTypeName}</td>
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
