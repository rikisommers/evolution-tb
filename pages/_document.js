import { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/meta'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-900'>

        {/* <div id={'globalLoader'}>
              <div className="loader">
                <div/>
                <div/>
            </div>
        </div> */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
