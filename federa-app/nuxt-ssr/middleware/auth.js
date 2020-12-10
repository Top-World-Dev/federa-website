export default function (context) {
  const { route, store, redirect } = context;
  const loginRoute = '/admin/login';
  const routePath = route.fullPath.toLowerCase();
  if (store.state.user.token) {
    if (routePath == loginRoute) {
      return redirect('/admin/report')
    }
  } else {
    if (routePath.startsWith('/admin') && routePath != loginRoute) {
      return redirect(loginRoute)
    }
  }
}
