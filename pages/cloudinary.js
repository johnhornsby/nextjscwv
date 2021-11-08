import Head from 'next/head'
import styled from 'styled-components'

import Picture from '../components/Picture';

const Main = styled.main``;

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 70vh;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const url =
  'https://res.cloudinary.com/john-hornsby-me/image/upload/{TRANSFORMATION},q_75/v1628446302/agencyheadless/Safari.webp 360w';

const getImageUrl = (transformString) => url.replace('{TRANSFORMATION}', transformString);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Core Web Vitals Poc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <Picture options={{
            image: {
              basePath: 'https://res.cloudinary.com/john-hornsby-me/image/upload',
              filename: 'v1/agencyheadless/Safari.webp'
            },
            eager: true,
            sizes: [
              [0.78, 100],
              [0.78, 100],
              [1.18, 100],
              [2.66, 100],
              [2.66, 100],
              [2.66, 100],
            ]}}
          />
        </Wrapper>
      </Main>
    </div>
  )
}
