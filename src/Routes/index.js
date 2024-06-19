import { useRoutes } from "react-router-dom";
import { ROUTES } from "../Constants/routes";
import News from "../Components/NewsItem/News";

function AppRoutes() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  return useRoutes([
    {
      path: ROUTES.HOME,
      element: <News pageSize={5} country="in" category="general" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.BUSINESS,
      element: <News pageSize={5} country="in" category="business" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.ENTERTAINMENT,
      element: <News pageSize={5} country="in" category="entertainment" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.HEALTH,
      element: <News pageSize={5} country="in" category="health" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.SCIENCE,
      element: <News pageSize={5} country="in" category="science" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.SPORTS,
      element: <News pageSize={5} country="in" category="sports" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.TECHNOLOGY,
      element: <News pageSize={5} country="in" category="technology" apiKey={apiKey}/>,
    },
    {
      path: ROUTES.GENERAL,
      element: <News pageSize={5} country="in" category="general" apiKey={apiKey}/>,
    },
  ]);
}

export default AppRoutes;
