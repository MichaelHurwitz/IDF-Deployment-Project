import React, { createContext, useState, ReactNode } from 'react';
import { DeploymentContextType } from '../types/deployment';

const DeploymentContext = createContext<DeploymentContextType | undefined>(undefined);

export const DeploymentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [units, setUnits] = useState({ Golani: 'Idle', Paratroopers: 'Idle', Givati: 'Idle' });

    const setUnitStatus = (unit: string, status: string) => {
        setUnits(prevUnits => ({
            ...prevUnits,
            [unit]: status,
        }));
    };

    return (
        <DeploymentContext.Provider value={{ units, setUnitStatus }}>
            {children}
        </DeploymentContext.Provider>
    );
};

export default DeploymentContext;
