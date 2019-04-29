import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trans from './trans';



class TransBody extends Component {

    render() {
            let transList = this.props.transList;

        return (
            <div className='body'>  
                <div className='trans-list-panel'>  
                    <ul className="trans-list">
                        {transList.map(trans => {
                            return (
                                <li key={trans.id}>
                                    <Trans key={trans.id} 
                                        date={trans.date} 
                                        desc={trans.desc}
                                        merch={trans.merch}
                                        fee={trans.fee}
                                        amt={trans.amt }
                                        />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
            </div>
        );
    }
}

TransBody.propTypes = {
    transList: PropTypes.array
}

export default Body;