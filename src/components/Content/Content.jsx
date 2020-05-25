import React from 'react';
import LearnToPlay from '../../pages/LearnToPlay/LearnToPlay';
import { Switch, Route } from 'react-router-dom';
import classes from './Content.module.scss';

function Content() {
  return (
    <div className={classes.Content}>
      <Switch>
        <Route path="/" exact>
          <LearnToPlay />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
