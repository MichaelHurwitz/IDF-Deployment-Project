import React, { useContext } from 'react';
import DeploymentContext from '../context/DeploymentContext';

type ChangeStatusProps = {
    unitName: string;
};

const ChangeStatus: React.FC<ChangeStatusProps> = ({ unitName }) => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("ChangeStatus must be used within a DeploymentProvider");
    }

    const { setUnitStatus } = deploymentContext;

    return (
        <button onClick={() => setUnitStatus(unitName, "Deployed")}>
            Deploy {unitName}
        </button>
    );
};

export default ChangeStatus;
