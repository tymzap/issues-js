import React, { FunctionComponent, HTMLAttributes } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Issue } from '../../interfaces/issue';

const useStyles = makeStyles({
  card: {
    width: '20rem'
  }
});

export type IssueCardProps = {
  issue: Issue,
  onActionButtonClick: (issue: Issue) => void;
} & HTMLAttributes<HTMLDivElement>;

export const IssueCard: FunctionComponent<IssueCardProps> = ({
  issue,
  onActionButtonClick,
  className,
  ...restParam
}) => {
  const styles = useStyles();
  return (
    <Card className={classNames(styles.card, className)} {...restParam}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {issue.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {issue.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        justifyContent: 'flex-end'
      }}>
        {issue.status !== 'CLOSED' ? (
          <Button
            onClick={() => {
              onActionButtonClick(issue);
            }}
            endIcon={issue.status === 'OPEN' ? (
              <TrendingFlatIcon>Begin</TrendingFlatIcon>
            ) : (
              <DoneIcon>Finish</DoneIcon>
            )}
            size={'small'}
            color={'primary'}
          >
            {issue.status === 'OPEN' ? 'Begin' : 'Finish'}
          </Button>
        ) : null}
      </CardActions>
    </Card>
  )
};
