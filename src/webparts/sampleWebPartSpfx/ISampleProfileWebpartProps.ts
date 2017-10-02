import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  IPropertyPaneField,
  PropertyPaneLabel,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-webpart-base';

export interface ISampleProfileWebpartProps{
         ProfileName : string;
         ProfileId : number;

}