import React from 'react';

class Description extends React.Component{
    
    render(){
        return (
            <p className='description'>{this.props.detail}</p>
        );
    }
}

export default Description;