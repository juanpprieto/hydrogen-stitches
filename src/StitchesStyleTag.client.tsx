import React from 'react';
import {getCssText} from '../stitches.config';

export default function StitchesStyleTag() {
  return (
    <style
      id="stitches"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{__html: getCssText()}}
    />
  );
}
