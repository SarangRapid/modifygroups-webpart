import * as React from 'react';
import styles from './SampleWebPartSpfx.module.scss';
import { ISampleWebPartSpfxProps } from './ISampleWebPartSpfxProps';
import {ISampleProfile}  from './ISampleProfile';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SampleWebPartSpfx extends React.Component<ISampleWebPartSpfxProps, {}> {
  public render(): React.ReactElement<ISampleWebPartSpfxProps> {
    return (
      
      <div className={styles.sampleWebPartSpfx}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <p className="ms-font-l ms-fontColor-white">{(this.props.ID)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more and visit spfx react templates do dive deep inside the code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



