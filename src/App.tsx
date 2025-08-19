import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

// Education pages
import { PrimarschuleTherwil } from './pages/education/PrimarschuleTherwil';
import { SekundarschuleTherwil } from './pages/education/SekundarschuleTherwil';
import { GymnasiumOberwil } from './pages/education/GymnasiumOberwil';
import { NaylandCollege } from './pages/education/NaylandCollege';

// Competition pages
import { NewZealandMathematicalOlympiad } from './pages/competitions/NewZealandMathematicalOlympiad';
import { AustralianMathematicsCompetition } from './pages/competitions/AustralianMathematicsCompetition';
import { UniversityOfCanterburyEngineeringChallenge } from './pages/competitions/UniversityOfCanterburyEngineeringChallenge';

// Project pages
import { TeReoMaoriRevitalizationGame } from './pages/projects/TeReoMaoriRevitalizationGame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  // Education routes
  {
    path: "/edu/primtherwil",
    element: <PrimarschuleTherwil />
  },
  {
    path: "/edu/sektherwil",
    element: <SekundarschuleTherwil />
  },
  {
    path: "/edu/gymoberwil",
    element: <GymnasiumOberwil />
  },
  {
    path: "/edu/naycol",
    element: <NaylandCollege />
  },
  // Competition routes
  {
    path: "/comp/nzmo",
    element: <NewZealandMathematicalOlympiad />
  },
  {
    path: "/comp/amc",
    element: <AustralianMathematicsCompetition />
  },
  {
    path: "/comp/uceng",
    element: <UniversityOfCanterburyEngineeringChallenge />
  },
  // Project routes
  {
    path: "/proj/tereo",
    element: <TeReoMaoriRevitalizationGame />
  }
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;