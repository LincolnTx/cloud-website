import Image from 'next/image';
import logo from '../assets/logo.svg';
import textLogo from '../assets/text-logo.svg';


export default function MainLogo() {
  return(
    <div>
      <Image src={logo} alt="Cloudinho"/>
      <Image src={textLogo} alt="logo em texto da cloud"/>
    </div>
  );
}


