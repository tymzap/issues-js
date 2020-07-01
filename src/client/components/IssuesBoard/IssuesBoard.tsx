import React, { FunctionComponent, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { IssueCardProps } from '../IssueCard';

const useStyles = makeStyles({
  column: {
    background: '',
    padding: '16px'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: '1024px',
  }
});

export type IssuesBoardProps = {
  issues: ReactElement<IssueCardProps>[]
};

export const IssuesBoard: FunctionComponent<IssuesBoardProps> = ({ issues, children }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {issues.filter((issue) => issue.props.status === 'OPEN')}
      </div>
      <div className={styles.column}>
        {issues.filter((issue) => issue.props.status === 'PENDING')}
      </div>
      <div className={styles.column}>
        {issues.filter((issue) => issue.props.status === 'CLOSED')}
      </div>
      {children}
    </div>
  );
};
