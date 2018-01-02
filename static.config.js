import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'https://cityviewreceptions.com',
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta
              name="google-site-verification"
              content="kJeojbTy8TXqKdgfOQh7vcMR4hxawvw95D7_50Dlrmg"
            />
            <title>City View Receptions - Salt Lake City's premiere reception center</title>
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
