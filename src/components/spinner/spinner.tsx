import { Component, CSSProperties } from 'react';
import styles from './spinner.module.css';
import { Nothing } from '../../types/types';

interface SpinnerProps {
  size?: number;
  color?: string;
}

export default class Spinner extends Component<SpinnerProps, Nothing> {
  static defaultProps: SpinnerProps = {
    size: 50,
    color: 'rgb(212, 200, 170)',
  };

  render() {
    const { size, color } = this.props;
    const spinnerStyle: CSSProperties = {
      width: size,
      height: size,
      border: `${size! / 8}px solid ${color}`,
      borderTop: `${size! / 8}px solid transparent`,
    };

    return <div className={styles.spinner} style={spinnerStyle}></div>;
  }
}
