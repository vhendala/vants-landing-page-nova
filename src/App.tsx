import VantsLandingPage from './Component';
import { LoaderDemo } from './components/LoaderDemo';

export default function App() {
  // Simple route handling - check if URL contains ?demo=loader
  const isLoaderDemo = window.location.search.includes('demo=loader');

  return isLoaderDemo ? <LoaderDemo /> : <VantsLandingPage />;
}
