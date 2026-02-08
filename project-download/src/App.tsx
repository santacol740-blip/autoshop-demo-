import { SplineSceneBasic } from './components/spline-demo';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8 flex items-center justify-center">
      <div className=" w-full">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Spline 3D Integration
          </h1>
          <p className="text-neutral-400 text-lg">
            Interactive 3D scenes powered by Spline and React
          </p>
        </div>
        <SplineSceneBasic />
      </div>
    </div>
  );
}

export default App;
