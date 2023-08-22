import { IInfoText } from "../InfoText/IInfoText";
/**
 * interface that contains:
 * @param header: string or JSX.element
 * @param content: array of IInfoText interface
 * @interface IInfoText - {describe: string, value: string| number| null})
 */
export interface IInformationBoxWithHeader {
    header: string | JSX.Element;
    content: IInfoText[]
}
