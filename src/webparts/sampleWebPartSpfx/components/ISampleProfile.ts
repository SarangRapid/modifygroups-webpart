import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  IPropertyPaneField,
  PropertyPaneLabel,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-webpart-base';

export interface ISampleProfile{
     itemDropDownOptions: IPropertyPaneDropdownOption[];
   
}

export default interface IProfileProperties{
   ProfileName : string;
   ProfileId : number;

}