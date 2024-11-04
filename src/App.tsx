import React from 'react';
import { DeploymentProvider } from './context/DeploymentContext';
// Import UnitList and MissionCompleted components here when they're created

const App: React.FC = () => {
    return (
        <DeploymentProvider>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>IDF Deployment Tracker</h1>
                {/* Render UnitList component here */}
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
