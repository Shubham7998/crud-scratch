import React from "react";
import PropertyUtility from "../Utilities/PropertyUtility";
import "../Styles/Property.css"
import { useParams } from "react-router-dom";

export default function Property() {

  const {id = 0} = useParams();
  
  const { propertyInfo, handleSubmit, onTextChangeProperty,onSelectFieldChangeProperty ,onTextAreaChangeAddress,error} = PropertyUtility(+id);

  return (
    <div className="property-container">
      <h1>Create Property</h1>
      <div className="property-input">
        <label htmlFor="propertyTitle" className="property-label">Property Title</label>
        <input
          type="text"
          name="propertyTitle"
          id="propertyTitle"
          placeholder="Property Title"
          value={propertyInfo.propertyTitle}
          onChange={onTextChangeProperty} />
      </div>
      {error.propertyTitle && (
            <div className="error">{error.propertyTitle}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertyTypeId" className="property-label">Property Type</label>
        <select
          name="propertyTypeId"
          id="propertyTypeId"
          value={propertyInfo.propertyTypeId}
          onChange={onSelectFieldChangeProperty}>
          <option value="">Select Property Type</option>
          <option value="1">House </option>
          <option value="2">Block</option>
          <option value="3">Bungalow</option>
          <option value="4">Villa</option>
        </select>
      </div>
      {error.propertyTypeId && (
            <div className="error">{error.propertyTypeId}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertyDescription" className="property-label">Property Description</label>
        <textarea
          name="propertyDescription"
          id="propertyDescription"
          placeholder="Property Description"
          value={propertyInfo.propertyDescription}
          onChange={onTextAreaChangeAddress} />
      </div>
      {error.propertyDescription && (
            <div className="error">{error.propertyDescription}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertyAddress" className="property-label">Property Address</label>
        <input
          type="text"
          name="propertyAddress"
          id="propertyAddress"
          placeholder="Property Address"
          value={propertyInfo.propertyAddress}
          onChange={onTextChangeProperty} />
      </div>
      {error.propertyAddress && (
            <div className="error">{error.propertyAddress}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertyPrice" className="property-label">Property Price</label>
        <input
          type="number"
          name="propertyPrice"
          id="propertyPrice"
          placeholder="Property Price"
          value={propertyInfo.propertyPrice}
          onChange={onTextChangeProperty} />
      </div>
      {error.propertyPrice && (
            <div className="error">{error.propertyPrice}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertySize" className="property-label">Property Size</label>
        <input
          type="number"
          name="propertySize"
          id="propertySize"
          placeholder="Property Size"
          value={propertyInfo.propertySize}
          onChange={onTextChangeProperty} />
      </div>
      {error.propertySize && (
            <div className="error">{error.propertySize}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertyBedrooms" className="property-label">Property Bedrooms</label>
        <input
          type="number"
          name="propertyBedrooms"
          id="propertyBedrooms"
          placeholder="Property Bedrooms"
          value={propertyInfo.propertyBedrooms}
          onChange={onTextChangeProperty} />
      </div>
      {error.propertyBedrooms && (
            <div className="error">{error.propertyBedrooms}</div>
          )}
      <div className="property-input">
        <label htmlFor="propertyStatusId" className="property-label">Property Status</label>
        <select
          name="propertyStatusId"
          id="propertyStatusId"
          value={propertyInfo.propertyStatusId}
          onChange={onSelectFieldChangeProperty}>
          <option value="">Select Property Status</option>
          <option value="1">Sold</option>
          <option value="2">Process</option>
          <option value="5">Future</option>
        </select>
      </div>
      {error.propertyStatusId && (
            <div className="error">{error.propertyStatusId}</div>
          )}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
