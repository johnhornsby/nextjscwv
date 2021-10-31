import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image';

import pic from '../public/Safari.webp'

const Main = styled.main``;

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 70vh;
`;

const NextImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Core Web Vitals Poc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <NextImage src={pic} priority layout="fill" />
        </Wrapper>
      </Main>
    </div>
  )
}
