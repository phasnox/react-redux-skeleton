import React, { Component } from 'react';
import classNames from 'classnames'

import styles from './icon.scss';

export class Icon extends Component {
  render() {
    const { title, className } = this.props;
    const iconClassNames = className.split(' ').map((cn) =>
      styles[`fa-${cn}`]
    )

    return (
      <i className={classNames(styles.fa, iconClassNames)} title={title}></i>
    );
  }
}
