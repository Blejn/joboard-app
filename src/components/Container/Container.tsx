import React from 'react';
import * as styles from './Container.module.scss';

export const Container = (props: any) => <div className={styles.container}>{props.children}</div>;
