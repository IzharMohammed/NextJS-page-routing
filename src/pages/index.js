import Image from "next/image";
import { Inter } from "next/font/google";

import luffy from '../../public/luffy.jpg'

/*   Image component in next JS  */

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Method - 1 to load images */}
      <Image
        src={luffy}
        width={500}
        height={500}
      />

      {/* Method - 2 to load images */}
      <Image
        src={'/luffy.jpg'}
        width={500}
        height={500}
      />

      {/* Method - 3 to load images */}
      <Image
        src={'https://www.google.com/imgres?q=one%20piece%20images&imgurl=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F09%2Face-and-strawhat-crew-one-piece.jpg&imgrefurl=https%3A%2F%2Fwww.cbr.com%2Fone-piece-mc-quotes%2F&docid=UJEVAu5BG2yxvM&tbnid=2rFJbUeEwGwVNM&vet=12ahUKEwidpaKt-K2HAxUR2DgGHe-_AhAQM3oECEEQAA..i&w=1400&h=700&hcb=2&ved=2ahUKEwidpaKt-K2HAxUR2DgGHe-_AhAQM3oECEEQAA'}
        width={500}
        height={500}
      />

    </>
  );
}
