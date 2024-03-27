import axios from "axios";
import { PropertyModel } from "../Models/PropertyModel";
import ResponseModel from "../Models/ResponseModel";

export const CreatePropertyInfo = async (
    propertyInfo : PropertyModel
) : Promise<ResponseModel> => {
    let result : ResponseModel = {
        error: "",
        data: null,
        message: "",
        errorCode: ""
    }
    alert("Create Property Info"); 

    await axios
    .post("http://localhost:5167/api/propertys", propertyInfo)
    .then(function (response) {
        alert("Response" + JSON.stringify(response.data));
        result.data = response.data;
        result.errorCode = response.status + "";
    })
    .catch(function (error) {
        alert("axios error catch" + JSON.stringify(error));

    })
    return result;
}

export const GetPropertyInfo = async (
    
) : Promise<ResponseModel> => {
    let result : ResponseModel = {
        error: "",
        data: null,
        message: "",
        errorCode: ""
    }
    alert("Create Property Info"); 

    await axios
    .get("http://localhost:5167/api/propertys")
    .then(function (response) {
        alert("Response" + JSON.stringify(response.data));
        result.data = response.data;
        result.errorCode = response.status + "";
    })
    .catch(function (error) {
        alert("axios error catch" + JSON.stringify(error));
    })
    return result;
}