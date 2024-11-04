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

    const { units, setUnitStatus } = deploymentContext;
    const currentStatus = units[unitName];

    const handleClick = () => {
        let newStatus;
        if (currentStatus === "Idle") {
            newStatus = "Deployed";
        } else if (currentStatus === "Deployed") {
            newStatus = "Complete";
        } else {
            newStatus = "Idle"; // Reset to the initial state
        }
        setUnitStatus(unitName, newStatus);
    };

    return (
        <button onClick={handleClick}>
            {currentStatus === "Idle" && `Deploy ${unitName}`}
            {currentStatus === "Deployed" && "Complete"}
            {currentStatus === "Complete" && `Reset ${unitName}`}
        </button>
    );
};

export default ChangeStatus;
