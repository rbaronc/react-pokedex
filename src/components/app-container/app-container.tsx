import React from 'react'

interface IAppContainerProps {
    children: JSX.Element | JSX.Element[];
}

const AppContainer: React.FC<IAppContainerProps> = (props) => {
    return( 
        <div className="container">
            <div className="row">
                { props.children }
            </div>      
        </div>
    );
};

export default AppContainer;
