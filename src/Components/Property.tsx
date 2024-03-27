import React from "react";
import PropertyUtility from "../Utilities/PropertyUtility";
import "../Styles/Property.css"

export default function Property() {
  const { propertyInfo, setPropertyInfo,handleSubmit, onTextChangeProperty,onSelectFieldChangeProperty ,onTextAreaChangeAddress} = PropertyUtility(0);

  return (
    <div className="property-container">
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
      <div className="property-input">
        <label htmlFor="propertyTypeId" className="property-label">Property Type</label>
        <select
          name="propertyTypeId"
          id="propertyTypeId"
          value={propertyInfo.propertyTypeId}
          onChange={onSelectFieldChangeProperty}>
          <option value="">Select Property Type</option>
          <option value="1">Block </option>
          <option value="2">Bungalow</option>
          <option value="3">Haveli</option>
          <option value="3">Row House</option>
        </select>
      </div>
      <div className="property-input">
        <label htmlFor="propertyDescription" className="property-label">Property Description</label>
        <textarea
          name="propertyDescription"
          id="propertyDescription"
          placeholder="Property Description"
          value={propertyInfo.propertyDescription}
          onChange={onTextAreaChangeAddress} />
      </div>
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
      <div className="property-input">
        <label htmlFor="propertyStatusId" className="property-label">Property Status</label>
        <select
          name="propertyStatusId"
          id="propertyStatusId"
          value={propertyInfo.propertyStatusId}
          onChange={onSelectFieldChangeProperty}>
          <option value="">Select Property Status</option>
          <option value="1">Process</option>
          <option value="2">Sold</option>
        </select>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
