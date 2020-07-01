import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import IssuesBoardContainer from '../IssuesBoardContainer';

export const AppContainer: FunctionComponent = ({ children }) => (
  <>
    <CssBaseline />
    <AppBar position={'static'}>
      <Toolbar>
        <Typography variant={'h6'}>
          issues.js
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <IssuesBoardContainer />
    </Container>
  </>
);
