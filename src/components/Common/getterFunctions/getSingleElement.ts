import { IError } from "../../../interfaces/IError";

interface IGetSingleElementFromArr {
    id: string | number | undefined;
}
export function getSingleElement<T extends IGetSingleElementFromArr>(id: number | string, arr: T[]): T | IError {
    if (typeof id === 'undefined') {
        return {
            error: true,
            errorMessage: "Provided id is undefined"
        };
    }
    const singleElement = arr.filter(element => String(element.id) === String(id))[0];
    if (singleElement) {
        return singleElement
    }
    return {
        error: true,
        errorMessage: "There is no client with provided id"
    };
}