import styled from 'styled-components';
import media from './../../styled-components/media';
import Button, { Group } from '../Button/styled';

export default styled.div`
  margin-bottom: 70px;
  ${media.desktop`
    margin-bottom: 140px;
  `}

  h2 > span {
    ${props => props.theme.colored.gradient};
    white-space: nowrap;
  }

  p {
    margin-bottom: 20px;
    ${media.desktop`
      margin-bottom: 40px;
    `}
  }
`;

export const Slides = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 720px;
  height: 340px;

  ${media.desktop`
    height: 260px;
  `}

  ${Group} {
    white-space: nowrap;
    display: none;
    ${media.desktop`
      display: block;
    `}
  }
`;

export const Slide = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  background: ${props => props.theme.colors.side};
  border-radius: 5px;
  box-shadow: 0px 10px 30px rgba(21, 17, 97, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.1);
  z-index: 3;
  top: 200px;
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.graphik.medium}, sans-serif;
  ${media.tablet`
    top: 150px;
    ${props => props.backward && `
      top: 0;
    `}
    ${props => props.center && `
      top: 45px;
    `}
  `}
  ${props => props.center && `
    z-index: 2;

    width: 88%;
    max-width: 640px;
    margin: 0 6%;
    top: 15px;
    h5 {
      opacity: 0.7;
    }
  `}

  ${props => props.backward && `
    font-size: ${props.theme.fontSize.small};
    padding: 20px 30px;
    z-index: 1;
    width: 75%;
    max-width: 540px;
    margin: 0 13%;
    top: 0;
    h6 {
      opacity: 0.5;
    }
  `}

  > ${Button} {
    ${media.desktop`
      display: none;
    `}
  }
`;

export const Inner = styled.div`
  padding: 30px;
`;