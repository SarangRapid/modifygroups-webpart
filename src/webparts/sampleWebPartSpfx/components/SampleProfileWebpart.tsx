import * as React from 'react';
import styles from './SampleWebPartSpfx.module.scss';
import { ISampleWebPartSpfxProps } from './ISampleWebPartSpfxProps';
import {ISampleProfile} from './ISampleProfile';
import IProfileProperties from './ISampleProfile';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SampleProfileProperties extends React.Component<IProfileProperties,{}>
{
  
//  ProfileList(options) {
  
//   const listItems = options.map((item,i) =>
//     <li id={i}>{item}</li>
//   );
//   return (
//     <select>{listItems}</select>
//   );
// }

   public render(): React.ReactElement<IProfileProperties>{
       return(
           <div>
             <div>{this.props.ProfileId}</div>
             <div>{this.props.ProfileName}</div>
             </div>

       );

   }
  
}
