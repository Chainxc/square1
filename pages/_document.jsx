import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name='description'
          content='MWIT Square 15th • การสอบแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระหว่างโรงเรียนระดับมัธยมศึกษาตอนต้นประจำปี พ.ศ. 2566 | MWIT Open House 2023'
        />
        <meta property='og:title' content='MWIT Square 15th' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://square.mwit.ac.th' />
        <meta
          property='og:description'
          content='MWIT Square 15th • การสอบแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระหว่างโรงเรียนระดับมัธยมศึกษาตอนต้นประจำปี พ.ศ. 2566 | MWIT Open House 2023'
        ></meta>
        <meta 
          property='og:image'
          content='https://square.mwit.ac.th/img/thumb2023.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='square.mwit.ac.th' />
        <meta property='twitter:url' content='https://square.mwit.ac.th' />
        <meta name='twitter:title' content='MWIT Square 15th' />
        <meta
          name='twitter:description'
          content='MWIT Square 15th • การสอบแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระหว่างโรงเรียนระดับมัธยมศึกษาตอนต้นประจำปี พ.ศ. 2566 | MWIT Open House 2023'
        />
        <meta
          name='twitter:image'
          content='https://square.mwit.ac.th/img/thumb2023.png'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
