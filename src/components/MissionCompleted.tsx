import React, { useContext } from 'react';
import DeploymentContext from '../context/DeploymentContext';

const MissionCompleted: React.FC = () => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;
    const allComplete = Object.values(units).every(status => status === "Complete");

    return (
        <div>
            {allComplete && <h2>All units have successfully completed their mission!</h2>}
        </div>
    );
};

export default MissionCompleted;
