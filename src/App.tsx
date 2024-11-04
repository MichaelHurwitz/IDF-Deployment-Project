import React from 'react';
import { DeploymentProvider } from './context/DeploymentContext';
import UnitList from './components/UnitList';
import MissionCompleted from './components/MissionCompleted';
// Import UnitList and MissionCompleted components here when they're created

const App: React.FC = () => {
    return (
        <DeploymentProvider>
            <div>
                <h1>IDF Deployment Tracker</h1>
                <UnitList/>
                <MissionCompleted />
                {/* Render MissionCompleted component here */}
                <button onClick={() => {
                    // Reset all units to 'Idle' state
                }}>
                    Reset Units
                </button>
            </div>
        </DeploymentProvider>
    );
};

export default App;
