import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './routeComponents/Layout';
import { Home } from './routeComponents/Home';
import { Todo } from './routeComponents/Todo';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/todo' component={Todo} />
</Layout>;