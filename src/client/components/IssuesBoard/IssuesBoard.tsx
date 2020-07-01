import React, { FunctionComponent, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { IssueCardProps } from '../IssueCard';

const useStyles = makeStyles({
  column: {
    background: '',
    display: 'flex',
    flexFlow: 'column',
    padding: '16px'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: '1rem',
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
        <div>
          Open
        </div>
        <div>
          {issues.filter((issue) => issue.props.issue.status === 'OPEN')}
        </div>
      </div>
      <div className={styles.column}>
        <div>
          Pending
        </div>
        <div>
          {issues.filter((issue) => issue.props.issue.status === 'PENDING')}
        </div>
      </div>
      <div className={styles.column}>
        <div>
          Closed
        </div>
        <div>
          {issues.filter((issue) => issue.props.issue.status === 'CLOSED')}
        </div>
      </div>
      {children}
    </div>
  );
};
