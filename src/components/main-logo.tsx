import Image from 'next/image';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import textLogo from '../assets/text-logo.svg';



type LogoProps = {
  width?: string,
  height?: string
}

const LogoContainer = styled.div<LogoProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default function MainLogo({ width, height }: LogoProps) {
  return(
    <LogoContainer width={width} height={height}>
      <Image src={logo} alt="Cloudinho"/>
      <Image src={textLogo} alt="logo em texto da cloud"/>
    </LogoContainer>
  );
}

MainLogo.defaultProps  = {
  width: 'unset',
  height: 'unset'
}

