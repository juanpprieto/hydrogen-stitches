import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {getCssText} from '../stitches.config';

function App() {
  return (
    <>
      <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
      <Suspense fallback={null}>
        <ShopifyProvider>
          <Router>
            <FileRoutes />
          </Router>
        </ShopifyProvider>
      </Suspense>
    </>
  );
}

export default renderHydrogen(App);
