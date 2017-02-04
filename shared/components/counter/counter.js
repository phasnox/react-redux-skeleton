import React, { Component } from 'react';
import { Icon } from 'components/icon'

import styles from './counter.scss';

export class Counter extends Component {
  render() {
    const { count, onIncrement, onDecrement } = this.props;

    return (
      <div className={ styles.default }>
        <button onClick={ onDecrement }>
          <Icon className='minus' />
        </button>
        { count }
        <button onClick={ onIncrement }>
          <Icon className='plus' />
        </button>
      </div>
    );
  }
}
