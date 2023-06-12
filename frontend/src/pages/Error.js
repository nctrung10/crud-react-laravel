import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = 'An Error Occured!';
  let message = 'Something went wrong.';

  if (error.status === 500) {
    if (isRouteErrorResponse(error)) {
      message = error.data.message;
    }
    message = error?.statusText || 'Could not fetch data.';
  }

  if (error.status === 404) {
    title = '404 Not Found';
    message = 'Could not find resources of the page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;