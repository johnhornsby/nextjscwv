import React from 'react';
import Head from 'next/head';

import Breakpoints from '../config/breakpoints';


const getImageAttributes = (key, index, breakpoints, pictureSizes, image) => {
  const keys =  Object.keys(breakpoints);
  const isFirst = breakpoints[key] === 0;
  const breakpointSize = isFirst ? breakpoints[keys[index + 1]] -1  : breakpoints[key];
  const maxImageSize = breakpoints[keys[index + 1]];
  const mediaQuery = isFirst ? 'max-width' : 'min-width';
  const [aspectRatio, responsiveWidth] = pictureSizes[index];
  const widthOfImage = responsiveWidth / 100 * maxImageSize;
  const aspectRatioHeight = Math.ceil(widthOfImage / aspectRatio);
  const url = `${image.basePath}/w_${widthOfImage},ar_${widthOfImage}:${aspectRatioHeight},c_fill,q_75/${image.filename}`;
  const url2x = `${image.basePath}/w_${widthOfImage * 2},ar_${widthOfImage * 2}:${aspectRatioHeight * 2},c_fill,q_75/${image.filename}`;

  return {
    url,
    srcSet: `${url} ${widthOfImage}w, ${url2x} ${widthOfImage * 2}w`,
    media: `(${mediaQuery}: ${breakpointSize}px)`,
    sizes:`${responsiveWidth}vw`,
  }
}

const getSource = (key, index, breakpoints, pictureSizes, image) => {
  const {url, ...attributes} = getImageAttributes(key, index, breakpoints, pictureSizes, image);

  return (
    <source key={key} {...attributes} />
  )
}

const Picture = ({ options }) => {
  const breakpointsKeys = Object.keys(Breakpoints);
  breakpointsKeys.splice(-1, 1);
  const pictureSizes = [...options.sizes];
  const desktopBreakpointIndex = breakpointsKeys.findIndex(key => key === 'DESKTOP');
  const mobileBreakpointIndex = breakpointsKeys.findIndex(key => key === 'MOBILE');
  const { url } = getImageAttributes('DESKTOP', desktopBreakpointIndex, Breakpoints, pictureSizes, options.image);
  const { srcSet } = getImageAttributes('MOBILE', mobileBreakpointIndex, Breakpoints, pictureSizes, options.image);

  return (
    <>
      {options.eager &&
        <Head>
          <link as="image" preload imageSrcSet={srcSet}></link>
        </Head>
      }
      <picture>
        {breakpointsKeys.map((key, breakpointIndex) => getSource(key, breakpointIndex, Breakpoints, pictureSizes, options.image)).reverse()}
        <img src={url} alt={options.image.alt} />
      </picture>
    </>
  )
};

export default Picture;
