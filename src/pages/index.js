import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home-page';
import BlogsPage from './blogs-page';
import BlogsAddPage from './blogs-add-page';
import BlogsDetailPage from './blogs-detail-page';
import NotFoundPage from './not-found-page';

const pages = () => {
    return (
        <Switch>
            <Route path="/blogs/add" component={BlogsAddPage}  />
            <Route exact path="/blogs/:id" component={BlogsDetailPage} />
            <Route exact path="/blogs" component={BlogsPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}
export default pages;