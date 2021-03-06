import React from 'react'
import {connect} from 'react-redux'

import './Sidebar.modules.scss'
import DriveInfo from '../../DriveInfo/DriveInfo'
import { StorageIcon, ZeonlabsIcon } from '../../icons/icons'
import { Label } from '../../utility'
import { getPlanTitle } from '../../../common/common.utils'

const Sidebar = props => {
    return(
        <div className='sidebar-container' >
            <div className='sb-title-div g-flex-ac' >
                <div className='g-flex-ac' >
                    {/* <CloudIcon style={{opacity: 0.5, marginRight: 10}} /> */}
                    <StorageIcon style={{opacity: 0.5, marginRight: 10}} />
                    <h3 className='g-roboto' >My drive</h3>
                </div>
                {
                    props.user.storage ?
                        <Label.RoundSides title={getPlanTitle(props.user.plan)} color='#b52e2e70' />
                        : <div className='accnt-type-sclton g-sklton-line' />
                }
            </div>
            <div className='g-flex sb-contents-div' style={{height: `calc(${window.innerHeight}px - 148px)`}} >
                <div className='sb-inner' >
                    <DriveInfo />
                </div>
                <ZeonlabsIcon />
            </div>
        </div>
    )
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps)(Sidebar)