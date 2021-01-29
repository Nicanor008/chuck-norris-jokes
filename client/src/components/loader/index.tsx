import React from 'react'
import styled from 'styled-components'
import './loader.css'

const CenterLoader = styled.div`
    padding-left: 50%
`

// loader
export const Loader = () => {
    return (
        <div className="loaderWrapper">
            <CenterLoader>
                <div className="loader"></div>
                <br />
                Loading ...
            </CenterLoader>
        </div>
    )
}
