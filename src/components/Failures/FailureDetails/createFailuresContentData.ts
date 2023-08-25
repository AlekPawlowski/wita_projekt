import { IInformationText } from "../../../interfaces/IInformationText/IInformationText";
import { IEstateFailData } from "../../../interfaces/Iestate";
import { IFailures } from "../../../interfaces/Ifailures";

export const createFailuresContentData = (failure: IFailures, estate: IEstateFailData):IInformationText[] => {
    const { name } = estate;
    const { failure_description, failure_title, status } = failure;
    const contentData: IInformationText[] = [
        {
            describe: "Estate name",
            value: name,
        },
        {
            describe: "Failure title",
            value: failure_title,
        },
        {
            describe: "Status",
            value: status ? "Resolved" : "Unresolved"
        },
        {
            describe: "Failure description",
            value: failure_description,
        }
    ]

    return contentData;
}