import React, {useRef, useState, useEffect, FunctionComponent} from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { readIssues, createIssue, updateIssue } from '../../api/issue';
import { Issue } from '../../interfaces/issue';
import { nextIssueStatus } from '../../utils/next-issue-status';
import IssuesBoard from '../../components/IssuesBoard';
import IssueCard from '../../components/IssueCard';
import CreateIssueForm from '../../components/forms/CreateIssueForm';

const useStyles = makeStyles({
  container: {
    height: '100%'
  },
  heading: {
    marginTop: '2rem'
  },
  card: {
    marginTop: '1rem'
  }
})

const useIssues = (): [Issue[], () => void]  => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const update = () => {
    readIssues().then((issues) => setIssues(issues));
  }

  useEffect(() => {
    update();
  }, [])

  return [issues, update];
}

export const IssuesBoardContainer: FunctionComponent = () => {
  const [createIssueDialogOpened, setCreateIssueDialogOpened] = useState(false);
  const [issues, updateIssues] = useIssues();

  const styles = useStyles();
  const ref = useRef<typeof CreateIssueForm>(null);
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant={'h4'} component={'h2'} className={styles.heading}>
        Your issues
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CreateIcon>send</CreateIcon>}
        onClick={() => {
          setCreateIssueDialogOpened(true);
        }}
      >
        Create
      </Button>
      <Dialog open={createIssueDialogOpened}>
        <DialogTitle>Create an issue</DialogTitle>
        <DialogContent>
          <CreateIssueForm
            onSubmit={(values) => {
              createIssue(values).then(() => {
                setCreateIssueDialogOpened(false);
                updateIssues();
              });
            }}
            ref={ref}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => {
            setCreateIssueDialogOpened(false);
          }}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => {
            // todo Add typings for forwarded refs
            //@ts-ignore
            ref.current.submit();
          }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <IssuesBoard
        issues={
          issues.map((issue, index) => (
            <IssueCard
              issue={issue}
              onActionButtonClick={(issue) => {
                const status = nextIssueStatus(issue.status);
                updateIssue(issue.id, {
                  status
                }).then(() => {
                  updateIssues();
                })
              }}
              className={styles.card}
              key={index}
            />
          ))}
      />
    </div>
  );
};
