import * as React from 'react';

import IProfileProperties from './ISampleProfile';

import { ServiceKey, ServiceScope } from '@microsoft/sp-core-library';

import {HttpClient, SPHttpClient ,SPHttpClientResponse,ISPHttpClientOptions} from '@microsoft/sp-http';

import {SPHttpClientBatch} from '@microsoft/sp-http';
import { PageContext } from '@microsoft/sp-page-context';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  IPropertyPaneField,
  PropertyPaneLabel,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-webpart-base';

import {defer,IDeferred} from './DeferPromise';



export class FetchAllUserProfiles implements IProfileProperties
{
      public static readonly serviceKey: ServiceKey<IProfileProperties> = ServiceKey.create<IProfileProperties>('vrd:UserProfileService', FetchAllUserProfiles);
    itemDropDownOptions: IPropertyPaneDropdownOption[];

    ProfileName :string;
    ProfileId:number;

    profArray:IProfileProperties[];  
    
    URL:string="https://akarsh.sharepoint.com/sites/akarshApp/_api/SP.UserProfiles.PeopleManager/GetMyProperties";

  private _spHttpClient: SPHttpClient;
  private _pageContext: PageContext;
  private _currentWebUrl: string;

  constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
      this._spHttpClient = serviceScope.consume(SPHttpClient.serviceKey);
      this._pageContext = serviceScope.consume(PageContext.serviceKey);
      this._currentWebUrl = this._pageContext.web.absoluteUrl;
      this.profArray=[];
    });
  }


  

    getAllUserProfiles():Promise<any>{
        var vm=this;
        var deferred=defer();
         this._spHttpClient.get(this.URL,SPHttpClient.configurations.v1, {
            headers: {
              'Accept': 'application/json;odata=verbose',
              'odata-version': ''
            }
          }).then(function(response2:SPHttpClientResponse) {
              var data=response2.json();
         
           return data;
             
         }).then(function(response1) {
             
             vm.profArray.push({ProfileName:response1.d["UserProfileProperties"].results[8].Value,ProfileId:Number(response1.d["UserProfileProperties"].results[50].Value)});
              deferred.resolve(vm.profArray);
         });
         
        return deferred.promise;
  }
  

}

