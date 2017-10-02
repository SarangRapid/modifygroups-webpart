import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { ServiceKey, ServiceScope } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import {
  PropertyPaneDropdown,
  IPropertyPaneField,
  PropertyPaneLabel,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-webpart-base';

import SampleWebPartSpfx from './components/SampleWebPartSpfx';
import SampleProfileProperties from './components/SampleProfileWebpart';
import {FetchAllUserProfiles} from './components/APICalls';
import  {ISampleProfile}  from './components/ISampleProfile';
import  IProfileProperties  from './components/ISampleProfile';
import { ISampleWebPartSpfxProps } from './components/ISampleWebPartSpfxProps';
import { ISampleWebPartSpfxWebPartProps } from './ISampleWebPartSpfxWebPartProps';
import { ISampleProfileWebpartProps } from './ISampleProfileWebpartProps'



export default class SampleProfilesWebPart extends BaseClientSideWebPart<ISampleProfileWebpartProps>
{
  itemsDropDown:IPropertyPaneDropdownOption[];
 
     public render():void{
          const profileElement : React.ReactElement<IProfileProperties>=React.createElement(SampleProfileProperties,{ProfileName:"sara",ProfileId:1}  );
             
            ReactDom.render(profileElement,this.domElement);
     }


     protected get dataVersion():Version
     {
        return Version.parse('1.0');

     }


   /*  protected get propertyPaneSettings():IPropertyPaneSettings
     {
    return {  
    pages: [  
      {  
        header: {  
          description: strings.PropertyPaneDescription,  
        },  
        groups: [  
          {  
            groupName:"Lists",  
            groupFields:[  
              PropertyPaneDropdown('listDropDown',{  
                label: "Select List To Display on the page",  
                options:this.listDropDownOptions,  
                isDisabled: false  
              }),  
              PropertyPaneDropdown('ItemsDropDown',{  
                label: "Select Item to display",  
                options: this.itemDropDownOptions,  
                isDisabled: false  
  
              })  
            ]  
          }  
        ]  
      }  
    ]  
  };  

     }*/
    

    private getAllProfiles():IPropertyPaneDropdownOption[]
    {
      var vm=this;
      
     this.itemsDropDown=[];
     var profArray = new FetchAllUserProfiles(this.context.serviceScope).getAllUserProfiles();
     if(profArray!==undefined)
     {
       profArray.then(function(data){data.map((item,i) =>
        vm.itemsDropDown.push({key:item.ProfileId.toString(),text:item.ProfileName}));
        vm.onDispose();
     });
     }
    //  else
    //  {
    //      this.itemsDropDown.push({key:"-1",text:"No Data"});

    //  }

      return vm.itemsDropDown;
    }
     
     protected getPropertyPaneConfiguration():IPropertyPaneConfiguration
     {
    this.getAllProfiles();
       

         return {
                    pages :[
                      {
                          header:{
                            description: "Profiles properties"
                          },
                          groups:[
                                       {
                                         groupName:"Profiles",
                                         groupFields:[
                                           PropertyPaneDropdown('AllProfiles',{
                                               label: "All Profiles",
                                               options:this.itemsDropDown,
                                              disabled:false
                                              
                                              
                                           })
                                         ]

                                       }
 
                                 ]

                      }

                    ]
            
         }
       

     }
       
}




// export  class SampleWebPartSpfxWebPart extends BaseClientSideWebPart<ISampleWebPartSpfxWebPartProps> {

//   public render(): void {
//     const element: React.ReactElement<ISampleWebPartSpfxProps > = React.createElement(
//       SampleWebPartSpfx,
//       {
//         description: "David Warner",
//         ID : 1
//       }
//     );
   
//     ReactDom.render(element, this.domElement);
    
  
//   }

//   protected get dataVersion(): Version {
//     return Version.parse('1.0');
//   }

  
// }
