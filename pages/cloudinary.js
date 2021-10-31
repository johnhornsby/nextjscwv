import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main``;

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 70vh;
`;

const Picture = styled.picture`
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const url =
  'https://res.cloudinary.com/john-hornsby-me/image/upload/{TRANSFORMATION}/v1628446302/agencyheadless/Safari.webp 360w';

const getImageUrl = (transformString) => url.replace('{TRANSFORMATION}', transformString);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Core Web Vitals Poc</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/john-hornsby-me/image/upload/w_360,ar_375:480,c_fill,g_xy_center,x_1550,y_800/v1628446302/agencyheadless/Safari.webp"
        />
      </Head>

      <Main>
        <Wrapper>
          <Picture>
            <source
              media="(max-width: 510px)"
              srcSet={getImageUrl(`w_360,ar_375:480,c_fill,g_xy_center,x_1550,y_800`)}
              sizes="100vw"
            />
            <source
              media="(max-width: 768px)"
              srcSet={getImageUrl(`w_768,ar_768:${650 + 200},c_fill,g_xy_center,x_1300,y_800`)}
            />
            <source
              media="(min-width: 769px)"
              srcSet={getImageUrl(`w_1920,ar_1920:${720 + 300},c_fill,g_xy_center,x_1550,y_800`)}
            />
            <Image
              src={getImageUrl(`w_1920,ar_1920:${720 + 300},c_fill,g_xy_center,x_1550,y_800`)}
              loading="eager"
              alt="test"
            />
          </Picture>
        </Wrapper>
      </Main>
    </div>
  )
}
