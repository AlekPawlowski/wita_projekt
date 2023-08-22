import { IInformationText } from "../IInformationText/IInformationText";

/**
 * interface that contains:
 * @param header: string or JSX.element
 * @param content: array of InformationText interface
 * @interface InformationText - {describe: string, value: string| number| null})
 */
export interface IInformationBoxWithHeader {
    header: string | JSX.Element;
    content: IInformationText[]
}
