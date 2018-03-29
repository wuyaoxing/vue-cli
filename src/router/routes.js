const AsyncComp = pagePath => () => import(`views/${pagePath}`)

const projectRoutes = [
    { path: '/', redirect: 'project' },
    {
        path: 'project',
        component: AsyncComp('project')
    }
]

const layout = {
    path: '/layout',
    component: AsyncComp('layout/appContainer'),
    children: projectRoutes
}

const routes = [
    {
        path: '/',
        redirect: 'layout'
    },
    layout
]

export default routes
