import React, { FunctionComponent, HTMLAttributes } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
  card: {
    width: '20rem'
  }
});

export type IssueCardProps = {
  name: string;
  description: string;
  status: 'OPEN' | 'PENDING' | 'CLOSED';
} & HTMLAttributes<HTMLDivElement>;

export const IssueCard: FunctionComponent<IssueCardProps> = ({
  name,
  description,
  status,
  className,
  ...restParam
}) => {
  const styles = useStyles();
  return (
    <Card className={classNames(styles.card, className)} {...restParam}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {status !== 'CLOSED' ? (
          <Button size="small" color="primary">
            {status === 'OPEN' ? 'Begin' : 'Finish'}
          </Button>
        ) : null}
      </CardActions>
    </Card>
  )
};
