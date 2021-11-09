import styled from 'styled-components'

import Picture from '../components/Picture';

const Main = styled.main``;

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 70vh;
`;

export default function Home() {
  return (
    <div>
      <Main>
        <Wrapper>
          <Picture options={{
            image: {
              basePath: 'https://res.cloudinary.com/john-hornsby-me/image/upload',
              filename: 'v1/agencyheadless/Safari.webp',
              alt: 'Safari',
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
