import React from 'react';

import './ShowSymp.css'

function ShowSymp(props) {

    const deleteItem = key => {
        const newList = props.data.filter(itemObj => {
            return itemObj.key !== key;
        });
        props.setData(newList);
    };
    
    return(
        <div>
            <div className='symp-field'>
                    {props.data.map(dataObj => {
                        return (
                            <>
                                <div className='showinrow'>
                                    <div className='symp-name'>
                                        <h4 className='symname'>{dataObj.item}</h4>
                                    </div>
                                        <button 
                                            className='delete-button' 
                                            onClick={() => deleteItem(dataObj.key)}>
                                                X
                                        </button>
                                </div>
                            </>
                        )
                    })}
            </div>
        </div>
    )
}

export default ShowSymp;