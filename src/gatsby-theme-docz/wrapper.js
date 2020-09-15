// src/gatsby-theme-docz/wrapper.js
import React, { Fragment } from 'react'
import { Global } from '@emotion/core'
import { globalStyles } from 'components/global/globalStyles'

export default ({ children }) => (
  <Fragment>
    <Global styles={globalStyles} />
    {children}
  </Fragment>
)
