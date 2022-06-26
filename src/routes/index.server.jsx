import {styled, getCssText} from '../../stitches.config';
import {Head} from '@shopify/hydrogen';

const Heading = styled('p', {
  backgroundColor: 'gainsboro',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export default function Home() {
  return (
    <>
      <Heading>Hello Worlds</Heading>
    </>
  );
}
