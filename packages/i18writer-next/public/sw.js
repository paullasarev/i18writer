if (!self.define) {
  const e = e => {
    'require' !== e && (e += '.js');
    let s = Promise.resolve();
    return r[e] || (s = new Promise((async s => {
      if ('document' in self) {
        const r = document.createElement('script');
        r.src = e, document.head.appendChild(r), r.onload = s
      } else importScripts(e), s()
    }))), s.then((() => {
      if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
      return r[e]
    }))
  }, s = (s, r) => {
    Promise.all(s.map(e)).then((e => r(1 === e.length ? e[0] : e)))
  }, r = {require: Promise.resolve(s)};
  self.define = (s, a, v) => {
    r[s] || (r[s] = Promise.resolve().then((() => {
      let r = {};
      const i = {uri: location.origin + s.slice(1)};
      return Promise.all(a.map((s => {
        switch (s) {
          case'exports':
            return r;
          case'module':
            return i;
          default:
            return e(s)
        }
      }))).then((e => {
        const s = v(...e);
        return r.default || (r.default = s), r
      }))
    })))
  }
}
define('./sw.js', ['./workbox-ea903bce'], (function (e) {
  'use strict';
  importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
    url: '/_next/static/KoxskdydPfvrWN1cEDtdV/_buildManifest.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/KoxskdydPfvrWN1cEDtdV/_ssgManifest.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/12.8b75ad0e6eb2bccf22ca.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/13.0365104c70ffbf80b13f.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/14.526369c58e3e873b3b74.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/15.1679013adbfa3c298031.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/16.1b6e16bd24db6106c974.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/17.fd65b736fbcbb6ad8109.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/18.dbf82eb56561c9382272.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/19.b8530ecaac5fa0b70559.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/20.b914e5198c6e3bf89396.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/21.b1d953a969d4efb715fd.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/22.06661afd5317dbe944be.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/23.969414fd9398cb9cc0db.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/24.0b7481b8e107fb3456f6.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/25.6f7d04e12e0b323cc1a2.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/26.170d8d508473c5f1602a.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/27.bbf2937768acd986f4a3.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/28.62142840f642e34a6cf6.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/29.bfce5b506a2cca65f14c.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/30.f6bf5eeb0fd0c9b722e4.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/31.f265d71c700253bb35da.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/32.a9cae800c3afe12e1446.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/33.ace5dfc49a8a9ba0c3e3.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/34.d2d8465278b790f8f973.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/35.7a1ea26fdcedd7be217c.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/36.02fa6916d79ffba79e3d.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/37.e50fe016c86ccd2a9cca.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/38.f67ebfd14fdf28e449bc.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/39.d5f6dc23156b06c24636.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/4.d8fa3996f0232802376e.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/40.cd6660cc756d6815accd.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/41.34016c7dc6a990e79710.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/42.b90d66285f36241e7867.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/43.177a683811feb457bded.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/44.854f3fb62416e138830f.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/45.cbcc60787c9a56eeeca3.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/46.14332c694e4211b0d8bc.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/47.b48ecac3b11c55f0d64d.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/48.85016c19dca85dcd0f56.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/49.d6490e335071fb4242e1.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/50.62fce6730bf78424d503.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/51.608118fd429b8b60f7c1.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/52.f509c47f23ddbd38458c.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/53.98b3bad3425a97f877db.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/54.53844744a06ce8cd7781.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/55.d197678ea04ab49cf713.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/56.6fd4ccf35e4397776818.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/57.2b1514ba6e5072f74548.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/58.57b784540772422fc291.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/59.d92d07cb08e5202847a2.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/60.79bec9e68659f46e5ec1.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/61.10cdfcc56f84dde627c9.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/62.de85498b0d73b0ed3c16.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/63.cc679e69cfa86c738b36.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/64.3d2a1037d04e259e0e9d.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/commons.1618afaadce470921119.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.23354bda602f7a99426e.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/framework.1cddd991bfe63666dc71.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/main-7f60241179e5dba9d469.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/pages/_app-ebdb30c2d31f3e0e06db.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/pages/_error-ee0fb092848632050c73.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/pages/index-a9cc96c90e52daf69684.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/polyfills-core-js.ac2ccecb516431e87fc3.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/polyfills-dom.43dee6230071ac1feed2.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/polyfills-fa6895e93b53826501e5.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {
    url: '/_next/static/chunks/webpack-4aee6440330ca40192e6.js',
    revision: 'KoxskdydPfvrWN1cEDtdV'
  }, {url: '/_next/static/css/afe9920e49a84bc0efbc.css', revision: 'KoxskdydPfvrWN1cEDtdV'}, {
    url: '/cat.jpg',
    revision: '144343f1f6b99351a15a5ad756d19504'
  }, {url: '/favicon.ico', revision: '21b739d43fcb9bbb83d8541fe4fe88fa'}, {
    url: '/icons/android-chrome-192x192.png',
    revision: '7b0bd67f4124b377026ad0522fa7649d'
  }, {url: '/icons/apple-touch-icon.png', revision: '9ef0cd8a7a7d640b207558e8a9b254c2'}, {
    url: '/icons/favicon.ico',
    revision: '1913674859d70381b11ab1d398839359'
  }, {url: '/icons/icon-512x512.png', revision: '1715680c81be4002ee18c3458a98ba78'}, {
    url: '/manifest.json',
    revision: '31d41a2eb0412f4b8d5668a9dfdc249b'
  }, {
    url: '/svg/accessibility-outline.svg',
    revision: '1cb575cea933d559447dd7956f3d2ece'
  }, {
    url: '/svg/accessibility-sharp.svg',
    revision: '44267adefe0749dc4fc483e137659bc7'
  }, {url: '/svg/accessibility.svg', revision: '9db1b6e0d0b40886161489886cfb06fd'}, {
    url: '/svg/add-circle-outline.svg',
    revision: '387bc9acdfa48e6f1309e14b550a6e44'
  }, {url: '/svg/add-circle-sharp.svg', revision: '333195ca0247d50be5a07be9414cb454'}, {
    url: '/svg/add-circle.svg',
    revision: '996181c59a0657b1339fb31cf962ac05'
  }, {url: '/svg/add-outline.svg', revision: '325ea963d7d819927443fb14995b326b'}, {
    url: '/svg/add-sharp.svg',
    revision: 'ed79057b9e72b01fcd4af2968566927f'
  }, {url: '/svg/add.svg', revision: '325ea963d7d819927443fb14995b326b'}, {
    url: '/svg/airplane-outline.svg',
    revision: '1129fc272af2ade1cbb96f1bbbd4533d'
  }, {url: '/svg/airplane-sharp.svg', revision: '0230373724212ed10c1894b7bf432b48'}, {
    url: '/svg/airplane.svg',
    revision: '79a17fcd1a00588b133ccb44f16841bb'
  }, {url: '/svg/alarm-outline.svg', revision: '4129c84fa9c2749a278c57699e42d307'}, {
    url: '/svg/alarm-sharp.svg',
    revision: '106fb8bebad77fa8410b5993db7aff37'
  }, {url: '/svg/alarm.svg', revision: 'f2fd72b198ad84cc75922f0ce2bce6ef'}, {
    url: '/svg/albums-outline.svg',
    revision: '84de80fba84b486ef87156d0d4e85263'
  }, {url: '/svg/albums-sharp.svg', revision: 'f8d8357475f73684663f81b0e757e789'}, {
    url: '/svg/albums.svg',
    revision: '68213d0e1ba76e8aed7782a3e54fbf70'
  }, {
    url: '/svg/alert-circle-outline.svg',
    revision: '78d6d12641477634a6cc827cf411ddcf'
  }, {url: '/svg/alert-circle-sharp.svg', revision: '430ebe49eb909efc9497249744356b91'}, {
    url: '/svg/alert-circle.svg',
    revision: 'f989b4d683a2f7f331da60b0b8954ea9'
  }, {url: '/svg/alert-outline.svg', revision: '6350c7dc03fce9729b63b4d2b5e2ba55'}, {
    url: '/svg/alert-sharp.svg',
    revision: '5661dded7d16ed3f81ecfc805d3b237c'
  }, {url: '/svg/alert.svg', revision: '6350c7dc03fce9729b63b4d2b5e2ba55'}, {
    url: '/svg/american-football-outline.svg',
    revision: 'e323334c8ddf79b9f3c363978a8f900f'
  }, {
    url: '/svg/american-football-sharp.svg',
    revision: '8cd94f40c19b4dca5ec06f87390cdee6'
  }, {
    url: '/svg/american-football.svg',
    revision: '9398106c6132d10df7433194d0294aa4'
  }, {
    url: '/svg/analytics-outline.svg',
    revision: 'd2ff35d938fb2298b11fbecfef59a0d2'
  }, {url: '/svg/analytics-sharp.svg', revision: '27f55c39b066940a548dde5fa2f29c21'}, {
    url: '/svg/analytics.svg',
    revision: '81e98a5cd03b3498c743915c7f4e5d46'
  }, {url: '/svg/aperture-outline.svg', revision: 'a0b31981824b54d796dd23d4fe4799f9'}, {
    url: '/svg/aperture-sharp.svg',
    revision: '67534e4e1f849725bac9803b0892f4ff'
  }, {url: '/svg/aperture.svg', revision: '8df042ec41097559de305e6b8f4fc612'}, {
    url: '/svg/apps-outline.svg',
    revision: '0d400d804595624a1479b09eef674406'
  }, {url: '/svg/apps-sharp.svg', revision: 'a5e8ef9dd62458636ba27125541cf4d6'}, {
    url: '/svg/apps.svg',
    revision: '1d8ef87e10103ebdf4067fd45e3e9943'
  }, {url: '/svg/archive-outline.svg', revision: '0c176f3e82f15ce9b28040ebd78fc354'}, {
    url: '/svg/archive-sharp.svg',
    revision: '73aec0ef3ebd5dc124b9ab17eed73ff3'
  }, {
    url: '/svg/archive.svg',
    revision: 'e9629ee847140d008747496d844f0ffc'
  }, {
    url: '/svg/arrow-back-circle-outline.svg',
    revision: '8066020442f5c9c60b5c117bf85d0915'
  }, {
    url: '/svg/arrow-back-circle-sharp.svg',
    revision: '6d6d5eef862374941f356ec48ec7d934'
  }, {
    url: '/svg/arrow-back-circle.svg',
    revision: 'fc931ea52fc1a1b5770e3621c1cc1348'
  }, {
    url: '/svg/arrow-back-outline.svg',
    revision: 'b31dbc78f75ff0f130222ced8181eba4'
  }, {url: '/svg/arrow-back-sharp.svg', revision: '99960f59fc8e896602700dfc8813937b'}, {
    url: '/svg/arrow-back.svg',
    revision: 'b31dbc78f75ff0f130222ced8181eba4'
  }, {
    url: '/svg/arrow-down-circle-outline.svg',
    revision: 'fead8546f510eafe94a5ff5bde49bdb9'
  }, {
    url: '/svg/arrow-down-circle-sharp.svg',
    revision: 'b2056e2517160d6f0a4da8f72dadbcce'
  }, {
    url: '/svg/arrow-down-circle.svg',
    revision: 'ebd62a4675e75b2a3d3dff44c0c42b96'
  }, {
    url: '/svg/arrow-down-outline.svg',
    revision: '54607bdc411dd0c4be75a92230d4b1d1'
  }, {url: '/svg/arrow-down-sharp.svg', revision: 'b6bfd980887286bb7c608860fda201db'}, {
    url: '/svg/arrow-down.svg',
    revision: '54607bdc411dd0c4be75a92230d4b1d1'
  }, {
    url: '/svg/arrow-forward-circle-outline.svg',
    revision: 'e4fb0076e83561d75eebef71dbfdc10a'
  }, {
    url: '/svg/arrow-forward-circle-sharp.svg',
    revision: '83d4d0cc549169fd95341db3eb863ad5'
  }, {
    url: '/svg/arrow-forward-circle.svg',
    revision: '2454053e62c3eab67bbd6badc1cd02ce'
  }, {
    url: '/svg/arrow-forward-outline.svg',
    revision: '8b5565f986c05f5b87787586c195ace9'
  }, {
    url: '/svg/arrow-forward-sharp.svg',
    revision: '4100022d886ed657e98d2fcc21a07a03'
  }, {
    url: '/svg/arrow-forward.svg',
    revision: '8b5565f986c05f5b87787586c195ace9'
  }, {
    url: '/svg/arrow-redo-circle-outline.svg',
    revision: 'f68f6c153392c685b0bfbec2b1820f31'
  }, {
    url: '/svg/arrow-redo-circle-sharp.svg',
    revision: 'bf61b7f2f61e5791a7ce916ac6a105b0'
  }, {
    url: '/svg/arrow-redo-circle.svg',
    revision: 'cbb34dd99b174abc8c6f5badce1018e3'
  }, {
    url: '/svg/arrow-redo-outline.svg',
    revision: '8874007f0470131f4bb695714309c392'
  }, {url: '/svg/arrow-redo-sharp.svg', revision: '0be1743ceaf5ed3e74b9a2ac7c784eed'}, {
    url: '/svg/arrow-redo.svg',
    revision: '4044c8b00a1f861146e23c8659194c68'
  }, {
    url: '/svg/arrow-undo-circle-outline.svg',
    revision: '99692277e500c3e028712b134674af61'
  }, {
    url: '/svg/arrow-undo-circle-sharp.svg',
    revision: '34fd2a8cd06b64ba90d3c4b1cc4ab2f2'
  }, {
    url: '/svg/arrow-undo-circle.svg',
    revision: 'fe8a599a9a7cedb04e5f5cd9ea346793'
  }, {
    url: '/svg/arrow-undo-outline.svg',
    revision: '89e5ff0484c25b588732b87018adac3f'
  }, {url: '/svg/arrow-undo-sharp.svg', revision: '530c45b2b9d75e3997bf46155ea2b28b'}, {
    url: '/svg/arrow-undo.svg',
    revision: 'a6da49c322721312dec2a36ea824031c'
  }, {
    url: '/svg/arrow-up-circle-outline.svg',
    revision: '0c5163f286ee3b889c62cf705eae4225'
  }, {
    url: '/svg/arrow-up-circle-sharp.svg',
    revision: '57ec4d1e2ae030e19ac19ca35beee447'
  }, {url: '/svg/arrow-up-circle.svg', revision: '3e680b0a86ea30f46709f1b891eb339b'}, {
    url: '/svg/arrow-up-outline.svg',
    revision: 'f68c7a1e8c3dfcb620565671160ec577'
  }, {url: '/svg/arrow-up-sharp.svg', revision: 'fc0eb00fe82fd28b90a448d0f2bebee1'}, {
    url: '/svg/arrow-up.svg',
    revision: 'f68c7a1e8c3dfcb620565671160ec577'
  }, {
    url: '/svg/at-circle-outline.svg',
    revision: 'fb499db1498b0e6a821481eef786e9a4'
  }, {url: '/svg/at-circle-sharp.svg', revision: '25c22537b21d9e238bc9ab388a7787cc'}, {
    url: '/svg/at-circle.svg',
    revision: '44cb9bd18dc2d812aac92c4197676cc5'
  }, {url: '/svg/at-outline.svg', revision: 'bca0c29ce6e60d9364d217e51a233d8c'}, {
    url: '/svg/at-sharp.svg',
    revision: 'a9bda3f6a702db817009fdd348048672'
  }, {url: '/svg/at.svg', revision: 'bca0c29ce6e60d9364d217e51a233d8c'}, {
    url: '/svg/attach-outline.svg',
    revision: '561c0bd9110bc33f0e1c207cf2789cd3'
  }, {url: '/svg/attach-sharp.svg', revision: 'efb4819c299f85d81bf11dcd217129dc'}, {
    url: '/svg/attach.svg',
    revision: '561c0bd9110bc33f0e1c207cf2789cd3'
  }, {
    url: '/svg/backspace-outline.svg',
    revision: '8e6d838f47462e9b63520dce73db2488'
  }, {url: '/svg/backspace-sharp.svg', revision: '9c5a5efdc8cd3dfba4745e202a23ee90'}, {
    url: '/svg/backspace.svg',
    revision: 'a60187a7ffaeaae6e31c17f818ab005c'
  }, {url: '/svg/bag-add-outline.svg', revision: '57b5800bde752cdfdad031c8d21fb5a5'}, {
    url: '/svg/bag-add-sharp.svg',
    revision: '77698a2bb38fd633865b85cd05c06310'
  }, {url: '/svg/bag-add.svg', revision: 'ac2f3beeefc4b16e3de725fd2c7cbe86'}, {
    url: '/svg/bag-check-outline.svg',
    revision: '8459a3fe0ff1ac699774ca413eb025a2'
  }, {url: '/svg/bag-check-sharp.svg', revision: '6eed3101a90a4b47b57ecb5cc08e633a'}, {
    url: '/svg/bag-check.svg',
    revision: '41692738f58022bc12952d1c526c478b'
  }, {
    url: '/svg/bag-handle-outline.svg',
    revision: '77d8d51a02b92685c47314a0a020546d'
  }, {url: '/svg/bag-handle-sharp.svg', revision: '504537945c4c1c07831dd74b11e85e5f'}, {
    url: '/svg/bag-handle.svg',
    revision: '79bed14a026796665cd1beeb214ec47c'
  }, {url: '/svg/bag-outline.svg', revision: 'f50708e2996b60e9edc145bbaeecb6d4'}, {
    url: '/svg/bag-remove-outline.svg',
    revision: 'a0b346070d9c121437a058e152b42bee'
  }, {url: '/svg/bag-remove-sharp.svg', revision: '0e8ea8bdc74b74f01c44550a8d230ce8'}, {
    url: '/svg/bag-remove.svg',
    revision: '49f8cf787749aff7cbec4007e5794167'
  }, {url: '/svg/bag-sharp.svg', revision: '7577fcb5455d1729f6ab4a2d49dc1a21'}, {
    url: '/svg/bag.svg',
    revision: 'a7de22635eb04f939d5700a74f6bd4f3'
  }, {url: '/svg/balloon-outline.svg', revision: '6691d316e8ae9d98df0d007bb5cccfca'}, {
    url: '/svg/balloon-sharp.svg',
    revision: '331d5e453dc943c39f1e20590993b8fc'
  }, {url: '/svg/balloon.svg', revision: '5dd499149f4e273dbe1b54a66db381dc'}, {
    url: '/svg/ban-outline.svg',
    revision: '17c1ab333eb1fdad7dec7fb22b0b06fe'
  }, {url: '/svg/ban-sharp.svg', revision: 'de5a072fa5de403006560ad435604985'}, {
    url: '/svg/ban.svg',
    revision: 'd89cefe203123d52f21c23b9b5a025ec'
  }, {url: '/svg/bandage-outline.svg', revision: '78ee8704da7760cc279ee71d1222a248'}, {
    url: '/svg/bandage-sharp.svg',
    revision: 'ea5cda3cafb3cce8dc846fa50ecc56bf'
  }, {url: '/svg/bandage.svg', revision: 'cba5d2872e40dcc7508e574185c7304f'}, {
    url: '/svg/bar-chart-outline.svg',
    revision: 'c8bf1e7b8a5cc9337b907c119b3b41f6'
  }, {url: '/svg/bar-chart-sharp.svg', revision: '626cdef2b7d8efc5c2077e9b0ef60b9c'}, {
    url: '/svg/bar-chart.svg',
    revision: '8c6f59261e28db242d096ac7d2d8a540'
  }, {url: '/svg/barbell-outline.svg', revision: '93c4a98324bc62eb27d29bec94779f8e'}, {
    url: '/svg/barbell-sharp.svg',
    revision: '4ab5876cb999c241b03f81c0b2bc07b9'
  }, {url: '/svg/barbell.svg', revision: '573c391805e9d3702e2849d8a39046ed'}, {
    url: '/svg/barcode-outline.svg',
    revision: 'e96b7bd68344ed07a13e4e3bd6f55de7'
  }, {url: '/svg/barcode-sharp.svg', revision: '1c23f9425082fb327c4a4a36c16fd495'}, {
    url: '/svg/barcode.svg',
    revision: '32f4bbfe17539764b4b7358beaf7ec3a'
  }, {url: '/svg/baseball-outline.svg', revision: 'e45398338b4a3f4d968c52b63628bbfa'}, {
    url: '/svg/baseball-sharp.svg',
    revision: '300baa13997b75810b6ee61dcc84fe2e'
  }, {url: '/svg/baseball.svg', revision: 'bfa9397f3d073b646dcc85261402b2c2'}, {
    url: '/svg/basket-outline.svg',
    revision: '20501f794554f786817343f2d84e0ace'
  }, {url: '/svg/basket-sharp.svg', revision: '16adac5c6a592f06ebb53329005f5d0f'}, {
    url: '/svg/basket.svg',
    revision: '075bb1b3c91bdf297be4f71acf1d4b8c'
  }, {
    url: '/svg/basketball-outline.svg',
    revision: '7b432276b8f3221ddfa0edf06a0529a7'
  }, {url: '/svg/basketball-sharp.svg', revision: 'ef913671fe7fba650997cf505b2363ad'}, {
    url: '/svg/basketball.svg',
    revision: 'ef913671fe7fba650997cf505b2363ad'
  }, {
    url: '/svg/battery-charging-outline.svg',
    revision: '51304b3aa79c1ea91272f3e64ca6ca94'
  }, {
    url: '/svg/battery-charging-sharp.svg',
    revision: 'de815655269326d2fde8a0e3fa2b304b'
  }, {
    url: '/svg/battery-charging.svg',
    revision: '51304b3aa79c1ea91272f3e64ca6ca94'
  }, {
    url: '/svg/battery-dead-outline.svg',
    revision: 'd4d4d9e9e09dbe18df4bdcbec6e2cf31'
  }, {url: '/svg/battery-dead-sharp.svg', revision: '7417f88978786383c7beac86f1330735'}, {
    url: '/svg/battery-dead.svg',
    revision: 'd4d4d9e9e09dbe18df4bdcbec6e2cf31'
  }, {
    url: '/svg/battery-full-outline.svg',
    revision: '11515d6c790bd40c9d15e1c0f44f18bb'
  }, {url: '/svg/battery-full-sharp.svg', revision: '45c3beaaa2b6ad7ee856bd878096643c'}, {
    url: '/svg/battery-full.svg',
    revision: '11515d6c790bd40c9d15e1c0f44f18bb'
  }, {
    url: '/svg/battery-half-outline.svg',
    revision: 'b38fdc85130f03831f63cf889fbaba97'
  }, {url: '/svg/battery-half-sharp.svg', revision: '013afe4cc6b743b59e6931b9cf056dfd'}, {
    url: '/svg/battery-half.svg',
    revision: 'b38fdc85130f03831f63cf889fbaba97'
  }, {url: '/svg/beaker-outline.svg', revision: '703591d6df4dd1dc9b6a4678fa901d93'}, {
    url: '/svg/beaker-sharp.svg',
    revision: '0df5768dda7f0f19a2b14a76e9c00022'
  }, {url: '/svg/beaker.svg', revision: '0aef70c2e931a44b767df188e48d8df9'}, {
    url: '/svg/bed-outline.svg',
    revision: '9bbcad6512134d40031930fbfe9c27a7'
  }, {url: '/svg/bed-sharp.svg', revision: '3ee924dbd97993cea677f69389616a27'}, {
    url: '/svg/bed.svg',
    revision: 'd7ddd54d2b8a84c8f651aa3dcccb77a8'
  }, {url: '/svg/beer-outline.svg', revision: 'c77d06f8876829c1551aefe4fc305b02'}, {
    url: '/svg/beer-sharp.svg',
    revision: 'bbf93e48152dd103708c52d1cc857550'
  }, {url: '/svg/beer.svg', revision: '8e10147962d99f2db2e52ea2a50f9032'}, {
    url: '/svg/bicycle-outline.svg',
    revision: '2ff21e7cf1a47f7a8295e334dcdd4f6e'
  }, {url: '/svg/bicycle-sharp.svg', revision: '08fb890eab2fd846904fb4ceb3f88a54'}, {
    url: '/svg/bicycle.svg',
    revision: '30f2b54a783d7c8bc734176e740db06c'
  }, {
    url: '/svg/bluetooth-outline.svg',
    revision: '1c83ff3ecab370ec3a666d126ef775a8'
  }, {url: '/svg/bluetooth-sharp.svg', revision: '42c61f39bcefc9ee1657940763e06b77'}, {
    url: '/svg/bluetooth.svg',
    revision: 'ffeb1cd7a976ef6fddcc762383735759'
  }, {url: '/svg/boat-outline.svg', revision: '179967a850999ace12b608ead9b50871'}, {
    url: '/svg/boat-sharp.svg',
    revision: '8d2a853dd128acdfb8d48e027d008305'
  }, {url: '/svg/boat.svg', revision: 'aefa8d1623e541bfd6fcc0b7e3db2591'}, {
    url: '/svg/body-outline.svg',
    revision: '52e26169e987f90c03c02c85671d9d6a'
  }, {url: '/svg/body-sharp.svg', revision: '8941deca06a676b545af026f84a41b2f'}, {
    url: '/svg/body.svg',
    revision: '5112961143786ec1087dfe70239cacb3'
  }, {url: '/svg/bonfire-outline.svg', revision: '23aa9f93e091a28c6bbe9d473a11389c'}, {
    url: '/svg/bonfire-sharp.svg',
    revision: '2602b0b283e83008d1caadf46d183331'
  }, {url: '/svg/bonfire.svg', revision: 'f27d2aa0e6c836a88548999fb0f6eb2c'}, {
    url: '/svg/book-outline.svg',
    revision: '7cff69493881ffef19a6ef6d51aab719'
  }, {url: '/svg/book-sharp.svg', revision: '08e6a6a85f3631bf1048c79d815d6e55'}, {
    url: '/svg/book.svg',
    revision: '55abd071b6b4a23e4bf2b4dcc1717c9b'
  }, {url: '/svg/bookmark-outline.svg', revision: '7cd4e7a528192ce01717b698497d3518'}, {
    url: '/svg/bookmark-sharp.svg',
    revision: '0f2c1cd823b8205e23cb587ebbefea2c'
  }, {url: '/svg/bookmark.svg', revision: '49a1916e50daf5043271acc729fac0f4'}, {
    url: '/svg/bookmarks-outline.svg',
    revision: '2abe5cf8e19ab1a95a9a615e6e093313'
  }, {url: '/svg/bookmarks-sharp.svg', revision: 'ae7149cc6e41dc378a56a096de4723b1'}, {
    url: '/svg/bookmarks.svg',
    revision: 'ce5122e89ae8dd9b5019efb7efe2ca9d'
  }, {
    url: '/svg/bowling-ball-outline.svg',
    revision: 'c66e0d4dd45b1eb4c300110df176ef4a'
  }, {url: '/svg/bowling-ball-sharp.svg', revision: '4a663f6908c89232470c325c0e727fb7'}, {
    url: '/svg/bowling-ball.svg',
    revision: '97a5aba5339878e1cfade4fcdcceecb5'
  }, {
    url: '/svg/briefcase-outline.svg',
    revision: '3a101b3ecbeb92cc085e7f5ca10ccdc0'
  }, {url: '/svg/briefcase-sharp.svg', revision: '4c0fa1f11cb29933af8f26e7adeb82dc'}, {
    url: '/svg/briefcase.svg',
    revision: 'f3a3773d91b831c5134bc65ed72a5657'
  }, {url: '/svg/browsers-outline.svg', revision: '50160ef93f952e3c81b89b88a61f8985'}, {
    url: '/svg/browsers-sharp.svg',
    revision: '4b09c315c06cde8b62dfe6f9e389f86d'
  }, {url: '/svg/browsers.svg', revision: '36fd90c795a26b16896fab2cb945d219'}, {
    url: '/svg/brush-outline.svg',
    revision: '8fc44e71dfcfd43ea45552b6a6ec76fb'
  }, {url: '/svg/brush-sharp.svg', revision: '985154ecb77ea9491ded8a136dce42c6'}, {
    url: '/svg/brush.svg',
    revision: '0f0968c8ffa73c92aacb51e3a3052e45'
  }, {url: '/svg/bug-outline.svg', revision: '78af6c5b454e288964fa64da40bef12d'}, {
    url: '/svg/bug-sharp.svg',
    revision: 'ed0e2cef78053a0b18e92728004a70c7'
  }, {url: '/svg/bug.svg', revision: '72c8713cac1051ca9a239c8275d167dd'}, {
    url: '/svg/build-outline.svg',
    revision: 'b46433e31de7f98194b1d2fef8a67d27'
  }, {url: '/svg/build-sharp.svg', revision: '328922cace4e486c00ab1ec93b15f10b'}, {
    url: '/svg/build.svg',
    revision: 'eeeec50b5fccce305d37b54b47dba030'
  }, {url: '/svg/bulb-outline.svg', revision: '9f03e20fa90cb6ab4871fc413a623e43'}, {
    url: '/svg/bulb-sharp.svg',
    revision: 'e88783ac1d7c0db3cb37fde77eca405d'
  }, {url: '/svg/bulb.svg', revision: '58c5ed24e6f1480f60712302fda40c14'}, {
    url: '/svg/bus-outline.svg',
    revision: '2dd51a4c73017e980d6fb544f9539fca'
  }, {url: '/svg/bus-sharp.svg', revision: 'd77fab1d065c5b896fb557d9586df6b1'}, {
    url: '/svg/bus.svg',
    revision: '47f6b303abed5fb531279cc18d74c3c8'
  }, {url: '/svg/business-outline.svg', revision: '6f5a268372dd769162775ae1aa9f3212'}, {
    url: '/svg/business-sharp.svg',
    revision: '9b3320c9fa199fdf0dbaadc1aaadec93'
  }, {url: '/svg/business.svg', revision: 'c6ffa18a68cdcdf13daae8d724a56512'}, {
    url: '/svg/cafe-outline.svg',
    revision: 'ccb9e962ba3934bd14993fe7e79b593f'
  }, {url: '/svg/cafe-sharp.svg', revision: '34b157f98d84714357a977e056d55e5b'}, {
    url: '/svg/cafe.svg',
    revision: 'c224f32513bb64ac83a5bc67389c0889'
  }, {
    url: '/svg/calculator-outline.svg',
    revision: '192e2124172e9d4070f0569fc477091a'
  }, {url: '/svg/calculator-sharp.svg', revision: '386067cb25c5486c3df49481239df2db'}, {
    url: '/svg/calculator.svg',
    revision: '16d2b20a312afa9bf5a4f617238ebf8a'
  }, {
    url: '/svg/calendar-clear-outline.svg',
    revision: 'c98e407e5beef00dce3cd1e6abaf0720'
  }, {
    url: '/svg/calendar-clear-sharp.svg',
    revision: 'e9008ee58e7cf1631aa751793715376e'
  }, {
    url: '/svg/calendar-clear.svg',
    revision: '99b6a5bcf71ea020da137754bfaee621'
  }, {
    url: '/svg/calendar-number-outline.svg',
    revision: '774588a35227a550b4921b9f8bfe6772'
  }, {
    url: '/svg/calendar-number-sharp.svg',
    revision: '08f38b0b80c65695ea568be6aadde498'
  }, {url: '/svg/calendar-number.svg', revision: 'dc2ad7b526c2fe211af42a2a09e9da70'}, {
    url: '/svg/calendar-outline.svg',
    revision: 'a8650bb1bcc00374b1875f0a08c60218'
  }, {url: '/svg/calendar-sharp.svg', revision: '123fdc865c1dbe0b40df806469e3a4ed'}, {
    url: '/svg/calendar.svg',
    revision: '5784870d484339c95e51a1aa1aeea23d'
  }, {url: '/svg/call-outline.svg', revision: '6e1601e2dffc48bf546855e7b98a6c70'}, {
    url: '/svg/call-sharp.svg',
    revision: 'b7d4501f7c7af0efa80d099f290cb4ba'
  }, {url: '/svg/call.svg', revision: '2211f21a9dcff1582d43738cde91b777'}, {
    url: '/svg/camera-outline.svg',
    revision: '5f0913cceb274d1717eeb079234633a6'
  }, {
    url: '/svg/camera-reverse-outline.svg',
    revision: 'b590d0160144495828da8595148dd8d5'
  }, {
    url: '/svg/camera-reverse-sharp.svg',
    revision: '5e9c48736aee01b92a17606349b9bddf'
  }, {url: '/svg/camera-reverse.svg', revision: '5435344577ac99c5321c364a614e2291'}, {
    url: '/svg/camera-sharp.svg',
    revision: '08e8a978dae1940a9c13da8a88a30082'
  }, {url: '/svg/camera.svg', revision: 'db97ffa6c4f285d452587b6b23c58808'}, {
    url: '/svg/car-outline.svg',
    revision: '31f1822f4fcf6c76c724d0890833f8b9'
  }, {url: '/svg/car-sharp.svg', revision: '6a5e9b75ef6bf3afb5cda96535b1a00f'}, {
    url: '/svg/car-sport-outline.svg',
    revision: '5e0374d51c63c71377c76ebe965c2b8a'
  }, {url: '/svg/car-sport-sharp.svg', revision: '064d04f0fad2bd6ed43d66e93348fb8f'}, {
    url: '/svg/car-sport.svg',
    revision: 'c696b46e8e1368528ad73ce21ef6c6be'
  }, {url: '/svg/car.svg', revision: '54474efa6793c4528c7eb206095568e1'}, {
    url: '/svg/card-outline.svg',
    revision: '0a736106a6878ecc23642a3ef1c37cd8'
  }, {url: '/svg/card-sharp.svg', revision: 'fd02365739dfce937d62777d2618b422'}, {
    url: '/svg/card.svg',
    revision: '557bb9db40e0cc8c224d981a73d92f86'
  }, {
    url: '/svg/caret-back-circle-outline.svg',
    revision: 'ff50d11aeb887547a71727a44ef0545a'
  }, {
    url: '/svg/caret-back-circle-sharp.svg',
    revision: 'bf4b4cab66444c6ccb421e338bc3b6a9'
  }, {
    url: '/svg/caret-back-circle.svg',
    revision: 'c98414b60fb021bd8e0b0f0ad5282e52'
  }, {
    url: '/svg/caret-back-outline.svg',
    revision: 'a5833d5aa572125fa8f747ee1089000d'
  }, {url: '/svg/caret-back-sharp.svg', revision: '4952d48ad5f48b361163be2311412902'}, {
    url: '/svg/caret-back.svg',
    revision: 'a5833d5aa572125fa8f747ee1089000d'
  }, {
    url: '/svg/caret-down-circle-outline.svg',
    revision: '413e56b7d802cc018e02ec38b87a26e4'
  }, {
    url: '/svg/caret-down-circle-sharp.svg',
    revision: '73e7e9fccbd63c8e39e4cb06b3e6d662'
  }, {
    url: '/svg/caret-down-circle.svg',
    revision: '95fd013e86eea55c85a6da7ebc2ac7ec'
  }, {
    url: '/svg/caret-down-outline.svg',
    revision: 'ad56b6c898f70521d1833567b75fe6f7'
  }, {url: '/svg/caret-down-sharp.svg', revision: '3c1e67f83376b63b84002c40e0b76e7b'}, {
    url: '/svg/caret-down.svg',
    revision: 'ad56b6c898f70521d1833567b75fe6f7'
  }, {
    url: '/svg/caret-forward-circle-outline.svg',
    revision: '404c82dd7f06e9e6b1b785ecf2b35f66'
  }, {
    url: '/svg/caret-forward-circle-sharp.svg',
    revision: '036b423f5277a1cb766023820dce6244'
  }, {
    url: '/svg/caret-forward-circle.svg',
    revision: '6284104bb2e7a864d76cde0455327703'
  }, {
    url: '/svg/caret-forward-outline.svg',
    revision: '7b8ec4d7286573c1967320d4547d3ad4'
  }, {
    url: '/svg/caret-forward-sharp.svg',
    revision: 'ac965bc3450676b92469d06130908a40'
  }, {
    url: '/svg/caret-forward.svg',
    revision: '7b8ec4d7286573c1967320d4547d3ad4'
  }, {
    url: '/svg/caret-up-circle-outline.svg',
    revision: '573702dc205792f428abaebfebe4ed69'
  }, {
    url: '/svg/caret-up-circle-sharp.svg',
    revision: '28b00760ad62745ee2c038d040ca84b0'
  }, {url: '/svg/caret-up-circle.svg', revision: '71ee29c881433040eb8e15a0ec343307'}, {
    url: '/svg/caret-up-outline.svg',
    revision: '8407002080e519ffc0017bb78bdc281c'
  }, {url: '/svg/caret-up-sharp.svg', revision: '28284d9509a7846d9ba1b093397fc1a8'}, {
    url: '/svg/caret-up.svg',
    revision: '8407002080e519ffc0017bb78bdc281c'
  }, {url: '/svg/cart-outline.svg', revision: 'ba8a0edba77bda4d4f60e442693db152'}, {
    url: '/svg/cart-sharp.svg',
    revision: '841caac12197c8e982326a0194bcd308'
  }, {url: '/svg/cart.svg', revision: 'b6e5e710cdb631adfdcd5469ede7bfaa'}, {
    url: '/svg/cash-outline.svg',
    revision: '716953d46011999cced73ae9552916b6'
  }, {url: '/svg/cash-sharp.svg', revision: 'a3a5279e1affc174282813d5757d08fc'}, {
    url: '/svg/cash.svg',
    revision: '1cd361ccf72f9d09973926453bddc3f2'
  }, {url: '/svg/cellular-outline.svg', revision: 'bad70f895a1fef52671997ed1a2cd2e6'}, {
    url: '/svg/cellular-sharp.svg',
    revision: '4378d17a1d19d1343b6e9ddd71666fe8'
  }, {
    url: '/svg/cellular.svg',
    revision: 'a58d37f93c2e94d70339c65538dd863f'
  }, {
    url: '/svg/chatbox-ellipses-outline.svg',
    revision: '954f22a3dd63204b64a80e41808e72b9'
  }, {
    url: '/svg/chatbox-ellipses-sharp.svg',
    revision: '878fc0960d863ec1a65617a001b759ba'
  }, {url: '/svg/chatbox-ellipses.svg', revision: '2c18d0eddb6a7eb9469e95ff45c1f579'}, {
    url: '/svg/chatbox-outline.svg',
    revision: '7e4e7e0371a6a92f4f69cd73741c37a7'
  }, {url: '/svg/chatbox-sharp.svg', revision: '99248e1014baf9af39a35f6e4ae47e61'}, {
    url: '/svg/chatbox.svg',
    revision: '76c4e1d0ff0620f5b5cd806c97d2e1e3'
  }, {
    url: '/svg/chatbubble-ellipses-outline.svg',
    revision: '189f42f7fb202497f02c1ded446cbc3c'
  }, {
    url: '/svg/chatbubble-ellipses-sharp.svg',
    revision: '550851805d4c6bb4e27d0b9a48c7bd8d'
  }, {
    url: '/svg/chatbubble-ellipses.svg',
    revision: 'bf17f300da9a4cca5f64ad8d2ebe762a'
  }, {
    url: '/svg/chatbubble-outline.svg',
    revision: '1fff345a54b9d4e67a59a74276e2ba9f'
  }, {url: '/svg/chatbubble-sharp.svg', revision: 'e9aa8246f23f5e9ec61ccfc75d63269a'}, {
    url: '/svg/chatbubble.svg',
    revision: '3679e1d500e0a12c152d9aa115267818'
  }, {
    url: '/svg/chatbubbles-outline.svg',
    revision: '31a77791d60c8eb3bd2fe8ba099c8672'
  }, {url: '/svg/chatbubbles-sharp.svg', revision: 'ec60691f8948c6989132baa9401cb17f'}, {
    url: '/svg/chatbubbles.svg',
    revision: '08eb96fb6e55b1889a03c29d2d267cc8'
  }, {url: '/svg/checkbox-outline.svg', revision: '5811331fd0265c30b13decc148d63b9c'}, {
    url: '/svg/checkbox-sharp.svg',
    revision: '37f39d9794ea868428c9ab6307ee89ac'
  }, {
    url: '/svg/checkbox.svg',
    revision: '906ce52370f42ee87abfe385b7de8254'
  }, {
    url: '/svg/checkmark-circle-outline.svg',
    revision: '5cc082fb4fc5a9d99f22d025a92fee51'
  }, {
    url: '/svg/checkmark-circle-sharp.svg',
    revision: 'f11b141fcef6d5e4e9adbdb2ff4d0eb5'
  }, {
    url: '/svg/checkmark-circle.svg',
    revision: '1945dcef1d93f7587d04b78eb4bdc7fa'
  }, {
    url: '/svg/checkmark-done-circle-outline.svg',
    revision: '43e83abcc75761598f7f024c1c4f02de'
  }, {
    url: '/svg/checkmark-done-circle-sharp.svg',
    revision: '9da5a41f74c701c024e8cda182b8d50c'
  }, {
    url: '/svg/checkmark-done-circle.svg',
    revision: '2d6b144e601b66c56b549139e2b072fe'
  }, {
    url: '/svg/checkmark-done-outline.svg',
    revision: 'eb2b2409f474776192e032f740dedac9'
  }, {
    url: '/svg/checkmark-done-sharp.svg',
    revision: 'ed2a9e4423fbf9c420a9fcee996881d8'
  }, {url: '/svg/checkmark-done.svg', revision: 'eb2b2409f474776192e032f740dedac9'}, {
    url: '/svg/checkmark-outline.svg',
    revision: '9ec81412e380d03604f42c29f35bfcf3'
  }, {url: '/svg/checkmark-sharp.svg', revision: 'e5c48b2e63aff48b71564703794ae991'}, {
    url: '/svg/checkmark.svg',
    revision: '9ec81412e380d03604f42c29f35bfcf3'
  }, {
    url: '/svg/chevron-back-circle-outline.svg',
    revision: '0bd40a817f1d3683b6868f7860f6e77a'
  }, {
    url: '/svg/chevron-back-circle-sharp.svg',
    revision: '438321cd33a8e2aa8570358998d8c5dc'
  }, {
    url: '/svg/chevron-back-circle.svg',
    revision: 'ea0cd19cf7f6a9f90839a6381fe97e3c'
  }, {
    url: '/svg/chevron-back-outline.svg',
    revision: '9b983f9fb35776e75abf9e078bcf22d4'
  }, {url: '/svg/chevron-back-sharp.svg', revision: '57ae2c9d0f8742a647fd5cebb668e8bf'}, {
    url: '/svg/chevron-back.svg',
    revision: '9b983f9fb35776e75abf9e078bcf22d4'
  }, {
    url: '/svg/chevron-down-circle-outline.svg',
    revision: '86f28f92c7466ff803164871e2ea0ea9'
  }, {
    url: '/svg/chevron-down-circle-sharp.svg',
    revision: '82d78f8224c7a442a5dd0c8d66227ada'
  }, {
    url: '/svg/chevron-down-circle.svg',
    revision: 'a631d64a7ebd5d4afe3e965c9c989960'
  }, {
    url: '/svg/chevron-down-outline.svg',
    revision: 'f24608d8433ef0b6d4ee7050975880f7'
  }, {url: '/svg/chevron-down-sharp.svg', revision: 'a2c2c27d7e00664597149467a4f62cf5'}, {
    url: '/svg/chevron-down.svg',
    revision: 'f24608d8433ef0b6d4ee7050975880f7'
  }, {
    url: '/svg/chevron-forward-circle-outline.svg',
    revision: 'de5f0c3e3842292a6f28764945e69a6d'
  }, {
    url: '/svg/chevron-forward-circle-sharp.svg',
    revision: '9a882af5a35d32906b69e87f72c3bae6'
  }, {
    url: '/svg/chevron-forward-circle.svg',
    revision: 'f2510d27e2758f9ebb68ab8877bf6e2b'
  }, {
    url: '/svg/chevron-forward-outline.svg',
    revision: 'e8a89f8c5de2849244a7281a73b996f0'
  }, {
    url: '/svg/chevron-forward-sharp.svg',
    revision: 'd878afd4f97ea85d500d77b72b995dec'
  }, {
    url: '/svg/chevron-forward.svg',
    revision: 'e8a89f8c5de2849244a7281a73b996f0'
  }, {
    url: '/svg/chevron-up-circle-outline.svg',
    revision: '547dbe850b1df21e0b6a2a4cb1850969'
  }, {
    url: '/svg/chevron-up-circle-sharp.svg',
    revision: '28007aabf2c530b477be63282e56b3da'
  }, {
    url: '/svg/chevron-up-circle.svg',
    revision: '1a102168c54459b24236945b8ce125b2'
  }, {
    url: '/svg/chevron-up-outline.svg',
    revision: 'e17d8404be8d7f3bdc5397f26a51017e'
  }, {url: '/svg/chevron-up-sharp.svg', revision: 'f4e54b0469cc4a0e74f7a56d27d1a8ad'}, {
    url: '/svg/chevron-up.svg',
    revision: 'e17d8404be8d7f3bdc5397f26a51017e'
  }, {
    url: '/svg/clipboard-outline.svg',
    revision: 'aa9441d60003460289054c42babac398'
  }, {url: '/svg/clipboard-sharp.svg', revision: '8ac245b1312ae30505af9f1eecc649bc'}, {
    url: '/svg/clipboard.svg',
    revision: '9e9ad74270d7938d937185b6fbf3db76'
  }, {
    url: '/svg/close-circle-outline.svg',
    revision: '3ebb0bf2d99b7272c397c964ff67ab93'
  }, {url: '/svg/close-circle-sharp.svg', revision: '8df25995555006ddf17f9b44d6bf74ad'}, {
    url: '/svg/close-circle.svg',
    revision: '422e99f21bbe70afdeb2f479314db18f'
  }, {url: '/svg/close-outline.svg', revision: '60cc342256f3d13772952082db9351e1'}, {
    url: '/svg/close-sharp.svg',
    revision: '0207ac06203c7a67d2a0558dd97208d1'
  }, {url: '/svg/close.svg', revision: '4488e9005481e6cd3a80f5299926ce04'}, {
    url: '/svg/cloud-circle-outline.svg',
    revision: 'c1d69507d19c331c011d6da9316480a9'
  }, {url: '/svg/cloud-circle-sharp.svg', revision: '9d44e339f2de0651afa7906e1b4e0313'}, {
    url: '/svg/cloud-circle.svg',
    revision: '538ef30a3f05c8b082d12e5dcb7d75c6'
  }, {
    url: '/svg/cloud-done-outline.svg',
    revision: 'e60456fd2d60b022602fc44797f30449'
  }, {url: '/svg/cloud-done-sharp.svg', revision: '5d31af499f63c20bb379e3c2fac3f6a6'}, {
    url: '/svg/cloud-done.svg',
    revision: '49468917b5510b5403ff84ca578bf7b4'
  }, {
    url: '/svg/cloud-download-outline.svg',
    revision: '7d357911e158b48f5509797877596638'
  }, {
    url: '/svg/cloud-download-sharp.svg',
    revision: 'c0a2e8dae365eaf0fce24ce39ee4a6e5'
  }, {
    url: '/svg/cloud-download.svg',
    revision: 'e5e192217ca1cde84be1ca779f40575a'
  }, {
    url: '/svg/cloud-offline-outline.svg',
    revision: '0fc519f82c91c42ba14aa11e5a40421a'
  }, {
    url: '/svg/cloud-offline-sharp.svg',
    revision: 'c4e02172c22335e7772b27e0dbf9c24a'
  }, {url: '/svg/cloud-offline.svg', revision: '9c172b60f583338f76475cb313a1bf6b'}, {
    url: '/svg/cloud-outline.svg',
    revision: 'f7b46d95a6fdd506b6c0cda4febf34da'
  }, {url: '/svg/cloud-sharp.svg', revision: '8ca73b40cf0d9e04e188192c00c320eb'}, {
    url: '/svg/cloud-upload-outline.svg',
    revision: '402b1ac905a497ea13c2c90fccfadea2'
  }, {url: '/svg/cloud-upload-sharp.svg', revision: 'd574d9f222edc6d3d3477c0e87b5eb54'}, {
    url: '/svg/cloud-upload.svg',
    revision: '5e3e998ca4569892c8b710e565d1379b'
  }, {url: '/svg/cloud.svg', revision: '29cf89a3949c72c3b06b49d80ce18544'}, {
    url: '/svg/cloudy-night-outline.svg',
    revision: 'ce6b7f75fa55b31625f05a9ffbc02940'
  }, {url: '/svg/cloudy-night-sharp.svg', revision: '150faeb7a67fa59eefd3c48bc442324f'}, {
    url: '/svg/cloudy-night.svg',
    revision: '6a77f37e34ce0849bc29f5318e88f07d'
  }, {url: '/svg/cloudy-outline.svg', revision: '0919e7e227ec8e898e34d7cd8ea92f61'}, {
    url: '/svg/cloudy-sharp.svg',
    revision: '9ab117527202a9ab9be2b2d63deed20a'
  }, {url: '/svg/cloudy.svg', revision: '30bf24146f8c0f84bc2ff271d588692f'}, {
    url: '/svg/code-download-outline.svg',
    revision: '65224f65c0bfbdd758da333ad5a2896f'
  }, {
    url: '/svg/code-download-sharp.svg',
    revision: 'ba0c7d5b52d6b0844786bc0c6ffd713a'
  }, {url: '/svg/code-download.svg', revision: '2baeac831313ee8ca3ecec53c97578f2'}, {
    url: '/svg/code-outline.svg',
    revision: 'bcedfc5ddac9a4b4f3d2acad97961039'
  }, {url: '/svg/code-sharp.svg', revision: '6eb97f56e23abcf6ac7eed6862ee049c'}, {
    url: '/svg/code-slash-outline.svg',
    revision: 'a307b96ce0c756766c4fdebc4014052b'
  }, {url: '/svg/code-slash-sharp.svg', revision: '6133860b73cac7c1b4f88d78a34eb8c5'}, {
    url: '/svg/code-slash.svg',
    revision: '317ab0dd103a22ca4465da6423bce1e2'
  }, {
    url: '/svg/code-working-outline.svg',
    revision: '216cd76b4d62e4e70ce81c9693584bac'
  }, {url: '/svg/code-working-sharp.svg', revision: '6f7c55d37da50124029b2e9cfc2ed48d'}, {
    url: '/svg/code-working.svg',
    revision: '80258729cc48d7794a93bc69ad4f6526'
  }, {url: '/svg/code.svg', revision: 'ad1ef3900ab9d756775377325cd20664'}, {
    url: '/svg/cog-outline.svg',
    revision: 'd29acc82efa9dec3d0d9cd36cf44cd2d'
  }, {url: '/svg/cog-sharp.svg', revision: 'd1b0a73297448dfc2f728bc6acdaed8d'}, {
    url: '/svg/cog.svg',
    revision: 'f6da5fccb24052b7a52c6abd884952d9'
  }, {
    url: '/svg/color-fill-outline.svg',
    revision: '6cf6686dc7030b65950a212fecb9d5cf'
  }, {url: '/svg/color-fill-sharp.svg', revision: 'e92cf80d076ac57cd7d6cc29b71600c3'}, {
    url: '/svg/color-fill.svg',
    revision: '1da0889971fa32c415ae8f04d27c4ca4'
  }, {
    url: '/svg/color-filter-outline.svg',
    revision: '255d58f9017a95c6454642b1be2d180f'
  }, {url: '/svg/color-filter-sharp.svg', revision: '6b4ca9ad3cd505928cf6a72f205e06d1'}, {
    url: '/svg/color-filter.svg',
    revision: 'bac25e3b124891e1c24e71a9a5fa1f18'
  }, {
    url: '/svg/color-palette-outline.svg',
    revision: 'c46214664ab6498cdc8dd55e29864afc'
  }, {
    url: '/svg/color-palette-sharp.svg',
    revision: 'dec5c496da56daa58c63d22e08fbf3b9'
  }, {url: '/svg/color-palette.svg', revision: '2b54357938456416201f72b16993c968'}, {
    url: '/svg/color-wand-outline.svg',
    revision: '945363a292be94c07bd1564249362c18'
  }, {url: '/svg/color-wand-sharp.svg', revision: '4f15424c36fcf2b394d583993d776907'}, {
    url: '/svg/color-wand.svg',
    revision: '9bd93030d855f6ec45bb6e969e375614'
  }, {url: '/svg/compass-outline.svg', revision: 'cac1ed5d3d467f0888e4a79e23d0b8db'}, {
    url: '/svg/compass-sharp.svg',
    revision: 'de3073457e98a26b8a84090898d89eb2'
  }, {url: '/svg/compass.svg', revision: '638d2b4660e515adc2dc1d89875ff39e'}, {
    url: '/svg/construct-outline.svg',
    revision: 'ea3af1949dba36d015d6d380f9931453'
  }, {url: '/svg/construct-sharp.svg', revision: '28e5bd5dda5e12fce033899858f5d1d1'}, {
    url: '/svg/construct.svg',
    revision: '0217f03e080695757dd5eacc0a8d86aa'
  }, {url: '/svg/contract-outline.svg', revision: '6d01b6ab2d10efc93d8e3d0c625eb0c9'}, {
    url: '/svg/contract-sharp.svg',
    revision: 'ec67aa368d73d1704a1ef6bfbfbdf75f'
  }, {url: '/svg/contract.svg', revision: '6d01b6ab2d10efc93d8e3d0c625eb0c9'}, {
    url: '/svg/contrast-outline.svg',
    revision: '7d1daa2621706f37f34a00e1db226949'
  }, {url: '/svg/contrast-sharp.svg', revision: '525dbe1040fc2914bb05c273ac15863a'}, {
    url: '/svg/contrast.svg',
    revision: '860a6a3f053af9da9fb6aa34bdc18d82'
  }, {url: '/svg/copy-outline.svg', revision: 'ebc6e00be7fd0485e86a400515d135d3'}, {
    url: '/svg/copy-sharp.svg',
    revision: '1a73007c856d7eebf7756621d39f9c14'
  }, {url: '/svg/copy.svg', revision: '314079ae4d78a7490004823ef6734e95'}, {
    url: '/svg/create-outline.svg',
    revision: 'e1c816832e54e7ada040304c0b9c0654'
  }, {url: '/svg/create-sharp.svg', revision: 'c74313aa2c880d73cf6a4c0c45d1f2af'}, {
    url: '/svg/create.svg',
    revision: '33a29f25eb8480e1d87e232d693e9e1b'
  }, {url: '/svg/crop-outline.svg', revision: 'a41c5b8d439b70044d22eae5b6f82154'}, {
    url: '/svg/crop-sharp.svg',
    revision: '7794c430eca72794ac1765cd33cad92e'
  }, {url: '/svg/crop.svg', revision: '97ea9ef74900adb9c0de8178b38a4093'}, {
    url: '/svg/cube-outline.svg',
    revision: '6b9bd5e3d3adedd653153ff165b28da1'
  }, {url: '/svg/cube-sharp.svg', revision: '71fe56949e151762cac6216050f3ca7c'}, {
    url: '/svg/cube.svg',
    revision: 'd585b9569a61fcc4ec4c7701407c86d1'
  }, {url: '/svg/cut-outline.svg', revision: '661b255e2aad8c0c722d20e623d623fc'}, {
    url: '/svg/cut-sharp.svg',
    revision: 'd7ce965d5bb5425a78e22ce96caee93a'
  }, {url: '/svg/cut.svg', revision: '3b131e60b02f281b79a4f90d6723402b'}, {
    url: '/svg/desktop-outline.svg',
    revision: 'ec743294a87a940e11f6f2ad22b2b651'
  }, {url: '/svg/desktop-sharp.svg', revision: 'e2f9d609fb7a1502c66acbd786c630ea'}, {
    url: '/svg/desktop.svg',
    revision: '4a514cb26159a1b7e6100272cedb8a86'
  }, {url: '/svg/diamond-outline.svg', revision: '566dde2e0ec15983f0a449195b691a86'}, {
    url: '/svg/diamond-sharp.svg',
    revision: 'd7bd22dc118d5dc07d84a51fb588d673'
  }, {url: '/svg/diamond.svg', revision: '0559a1164d7a1d7eddf0b78bb0dd627e'}, {
    url: '/svg/dice-outline.svg',
    revision: '04991cc96a28fdd6d6b1b36e82d03f32'
  }, {url: '/svg/dice-sharp.svg', revision: 'b06f1b2d93ee2bf3f206aba81a620875'}, {
    url: '/svg/dice.svg',
    revision: 'edc9dbd56c19bb3a5c7ef879e760cd83'
  }, {url: '/svg/disc-outline.svg', revision: '571563c42180e34cb0de0e5a9e1d3383'}, {
    url: '/svg/disc-sharp.svg',
    revision: '400714cb78f4458ee2585c413dfb04c3'
  }, {url: '/svg/disc.svg', revision: '8e32f7bc707b0609f0783a9322dffd74'}, {
    url: '/svg/document-attach-outline.svg',
    revision: '3cfa8bfdab5516294c893b8fe30487d4'
  }, {
    url: '/svg/document-attach-sharp.svg',
    revision: '76ff1e829b709b639b27414422f16e29'
  }, {
    url: '/svg/document-attach.svg',
    revision: '1f3119f1d34e36c01d59ba90a750d1c5'
  }, {
    url: '/svg/document-lock-outline.svg',
    revision: '57944fc031b667aadbcbb7631393a4f0'
  }, {
    url: '/svg/document-lock-sharp.svg',
    revision: '62cea63612279c7f02adadc194a17f9e'
  }, {url: '/svg/document-lock.svg', revision: 'e040d282cf86be0f24054d06061c4c8b'}, {
    url: '/svg/document-outline.svg',
    revision: '478d6f99c98a452c7f7ddf007a4d854d'
  }, {
    url: '/svg/document-sharp.svg',
    revision: 'fcc8b467c5915102174e83ba16a84996'
  }, {
    url: '/svg/document-text-outline.svg',
    revision: '57c648f3cce8bde2f5cdfe9b859cb999'
  }, {
    url: '/svg/document-text-sharp.svg',
    revision: 'd94ad28c18b107f1282de3c3d5f063fc'
  }, {url: '/svg/document-text.svg', revision: '978b3b03554f690c3ce4b6db746a9ebb'}, {
    url: '/svg/document.svg',
    revision: 'd74e4731df3904faef1d27527b1b73f4'
  }, {
    url: '/svg/documents-outline.svg',
    revision: '41d4cac085cbd6a639ab91414faed5c4'
  }, {url: '/svg/documents-sharp.svg', revision: 'a64f8d521c6c5afe9c1a4b753ae2a233'}, {
    url: '/svg/documents.svg',
    revision: '220fe7cdef491cdf7ca746cb3478ea55'
  }, {url: '/svg/download-outline.svg', revision: '6f8e98cc3c84630d105ad29368dc96d5'}, {
    url: '/svg/download-sharp.svg',
    revision: 'f14c8077a407ab4749e6c48177cb0b89'
  }, {url: '/svg/download.svg', revision: '63a0852a9558e39729e6e62a7e59e25c'}, {
    url: '/svg/duplicate-outline.svg',
    revision: 'a6c55b30a177b1d2a61b2ff668ccd0ef'
  }, {url: '/svg/duplicate-sharp.svg', revision: 'ae2d5382e0a59d7fea8f31c84720ef8a'}, {
    url: '/svg/duplicate.svg',
    revision: 'a6b77c0900e95ef259c4b62c07cbde4a'
  }, {url: '/svg/ear-outline.svg', revision: 'a7e013525e5cf0ec4bd30836a9842384'}, {
    url: '/svg/ear-sharp.svg',
    revision: 'd06f613086ce1815e6af08862693eae7'
  }, {url: '/svg/ear.svg', revision: 'c1364fd938593f8d33aaa9734398bca4'}, {
    url: '/svg/earth-outline.svg',
    revision: '9c170c2b9b5a978b6a110b7de8dcd820'
  }, {url: '/svg/earth-sharp.svg', revision: 'b3bbabc323e0e0c3c7fe4419d3cd7a14'}, {
    url: '/svg/earth.svg',
    revision: '5aa28eb56a73ba4183cce6834a72bf31'
  }, {url: '/svg/easel-outline.svg', revision: '79cd44814fe07f42c07e1e2596bb4f41'}, {
    url: '/svg/easel-sharp.svg',
    revision: '093e34c5f6ffd86811048fca8975d2d5'
  }, {url: '/svg/easel.svg', revision: 'c700ed972e8a826dc067621da3b1b06d'}, {
    url: '/svg/egg-outline.svg',
    revision: '0768286a928acda00e8f40fa595d564c'
  }, {url: '/svg/egg-sharp.svg', revision: '29eedc0cb1c978c88ce7ec3586dad4c9'}, {
    url: '/svg/egg.svg',
    revision: '5a6b507ee11101576b5daa4a915fe0e6'
  }, {url: '/svg/ellipse-outline.svg', revision: '11030585254adeaace287656b5620a10'}, {
    url: '/svg/ellipse-sharp.svg',
    revision: '04285d41ed3e1dab8f8533b1b122f915'
  }, {
    url: '/svg/ellipse.svg',
    revision: '04285d41ed3e1dab8f8533b1b122f915'
  }, {
    url: '/svg/ellipsis-horizontal-circle-outline.svg',
    revision: '2c1fd5e8e100e2a824f900e4f91eb17a'
  }, {
    url: '/svg/ellipsis-horizontal-circle-sharp.svg',
    revision: '65104a166801e671e1a1b2488205fe8b'
  }, {
    url: '/svg/ellipsis-horizontal-circle.svg',
    revision: '2c1fd5e8e100e2a824f900e4f91eb17a'
  }, {
    url: '/svg/ellipsis-horizontal-outline.svg',
    revision: 'ef6907c4813996bb7c02fd137dfff76a'
  }, {
    url: '/svg/ellipsis-horizontal-sharp.svg',
    revision: '4e4e874c776016e67ebfc4686b66d297'
  }, {
    url: '/svg/ellipsis-horizontal.svg',
    revision: '4e4e874c776016e67ebfc4686b66d297'
  }, {
    url: '/svg/ellipsis-vertical-circle-outline.svg',
    revision: '4b0c94eb9487091e82b85a491e953b55'
  }, {
    url: '/svg/ellipsis-vertical-circle-sharp.svg',
    revision: '5aa88f86772ac84616de928ba5433184'
  }, {
    url: '/svg/ellipsis-vertical-circle.svg',
    revision: '4b0c94eb9487091e82b85a491e953b55'
  }, {
    url: '/svg/ellipsis-vertical-outline.svg',
    revision: '074a9b33020c00a1ea68d64cd0a62191'
  }, {
    url: '/svg/ellipsis-vertical-sharp.svg',
    revision: '49a6c8003c1715237005499ea3ea7dd5'
  }, {url: '/svg/ellipsis-vertical.svg', revision: '49a6c8003c1715237005499ea3ea7dd5'}, {
    url: '/svg/enter-outline.svg',
    revision: '36d9fda25d7ebc6553353cf005a54a84'
  }, {url: '/svg/enter-sharp.svg', revision: '5a98cf135c0ee1c0a14645217b6cea90'}, {
    url: '/svg/enter.svg',
    revision: '18bd86c9c6a0c5c00c9dddcea799eb18'
  }, {url: '/svg/exit-outline.svg', revision: 'a638caab772868ee94686adbd2cf3950'}, {
    url: '/svg/exit-sharp.svg',
    revision: '9a1b3ba36de1a73128367ca12f1d09ba'
  }, {url: '/svg/exit.svg', revision: 'a4ad11e908a6e74637a7303691b804b2'}, {
    url: '/svg/expand-outline.svg',
    revision: '0b31094752c02d1b4e1998658e6984c3'
  }, {url: '/svg/expand-sharp.svg', revision: '0918fc1eab1977594d6000b60ec328f5'}, {
    url: '/svg/expand.svg',
    revision: '0b31094752c02d1b4e1998658e6984c3'
  }, {
    url: '/svg/extension-puzzle-outline.svg',
    revision: 'c509980f749510f3b1473820e585abf4'
  }, {
    url: '/svg/extension-puzzle-sharp.svg',
    revision: '2a2d17c6216b13925528f3b5f88a1bcb'
  }, {url: '/svg/extension-puzzle.svg', revision: 'b81c9ea211d2b6ffec9a94eeee443f94'}, {
    url: '/svg/eye-off-outline.svg',
    revision: '31fdd6383523cabf660f119804738879'
  }, {url: '/svg/eye-off-sharp.svg', revision: '1b68ed6507aeed025af7802f4e83eab4'}, {
    url: '/svg/eye-off.svg',
    revision: '03437f39900689ad62ce9f55286a5705'
  }, {url: '/svg/eye-outline.svg', revision: 'd1ca8c6a24efadcd29e55acc84d93040'}, {
    url: '/svg/eye-sharp.svg',
    revision: 'afc22c2643809184dd82962b0444d475'
  }, {url: '/svg/eye.svg', revision: '65ce18917fa729e916357c40b1d7c5e7'}, {
    url: '/svg/eyedrop-outline.svg',
    revision: 'd4ea58a49030d8747b026bb7a605e0f7'
  }, {url: '/svg/eyedrop-sharp.svg', revision: 'd8e99a79ad2064ff18061b552db09ed4'}, {
    url: '/svg/eyedrop.svg',
    revision: '69f9ec2a11fac9f7a9778a6271566c96'
  }, {
    url: '/svg/fast-food-outline.svg',
    revision: '60d95b18ad609fae205b88a14ee35f5b'
  }, {url: '/svg/fast-food-sharp.svg', revision: 'a24c01ed202d847b905a6235f2e70945'}, {
    url: '/svg/fast-food.svg',
    revision: '6cb73a3d53f9d907e0a368844278de9f'
  }, {url: '/svg/female-outline.svg', revision: '318b13308dc36cea36d16808e3264b1e'}, {
    url: '/svg/female-sharp.svg',
    revision: 'efa4e21b13267813872713eb39a33271'
  }, {url: '/svg/female.svg', revision: '72d8e4130461ad821158a4cd102e982d'}, {
    url: '/svg/file-tray-full-outline.svg',
    revision: 'd1929970d16eda199ebcb87c3155de43'
  }, {
    url: '/svg/file-tray-full-sharp.svg',
    revision: 'b226ef4a97e1680953a8781f8460cc60'
  }, {url: '/svg/file-tray-full.svg', revision: 'd37ab9a2ef75b963362a1955db745933'}, {
    url: '/svg/file-tray-outline.svg',
    revision: 'e6449adae9e4b7be9b866fc983b335aa'
  }, {
    url: '/svg/file-tray-sharp.svg',
    revision: '8fc0a31a2ca1036316b7c03032d7f176'
  }, {
    url: '/svg/file-tray-stacked-outline.svg',
    revision: 'e1d20207eac30c751636b3678c5edbfd'
  }, {
    url: '/svg/file-tray-stacked-sharp.svg',
    revision: '4530e1a22ed02230d937047c32a708f8'
  }, {url: '/svg/file-tray-stacked.svg', revision: '37369552563c320b14cc2e143ad378f0'}, {
    url: '/svg/file-tray.svg',
    revision: '1a971e77974df527d47a1d01827ae7e3'
  }, {url: '/svg/film-outline.svg', revision: '3ef0845373fdde7019cc4f734b37861b'}, {
    url: '/svg/film-sharp.svg',
    revision: 'a0769c2e907d9940ea507001479f13ca'
  }, {url: '/svg/film.svg', revision: 'f3e5a348af15fc10468e6efd1ae02962'}, {
    url: '/svg/filter-circle-outline.svg',
    revision: '2de1a9959008100c6eab9c10cbdd43c8'
  }, {
    url: '/svg/filter-circle-sharp.svg',
    revision: '9b8d9ef9e5e4fbd729717be68ca2f109'
  }, {url: '/svg/filter-circle.svg', revision: 'd4fb7325df47861dc3a46a6d4c14d583'}, {
    url: '/svg/filter-outline.svg',
    revision: '3d5f46006575b039397c125f9721c4b9'
  }, {url: '/svg/filter-sharp.svg', revision: 'b3d2c1c80d8dd9ded01ae0594d99ddad'}, {
    url: '/svg/filter.svg',
    revision: 'f544d331be43a0d57c4401db086a8c51'
  }, {
    url: '/svg/finger-print-outline.svg',
    revision: 'bb43da7e860d17b134f9aacdb8b2d725'
  }, {url: '/svg/finger-print-sharp.svg', revision: '397ac5ccf4cab4067a289bd0a3f518ef'}, {
    url: '/svg/finger-print.svg',
    revision: 'b03aaf43add4e1dc292e1832c1930895'
  }, {url: '/svg/fish-outline.svg', revision: '06d5af9e4192f2999487aec9981b5bd8'}, {
    url: '/svg/fish-sharp.svg',
    revision: 'a4bce07251abc9549560e8740306e1a4'
  }, {url: '/svg/fish.svg', revision: 'e5efdba4cf30cc56b359dc5a81056a9b'}, {
    url: '/svg/fitness-outline.svg',
    revision: 'd21a61d35e84a13e08e128eab79615ec'
  }, {url: '/svg/fitness-sharp.svg', revision: 'd2ddd219689658e83e30b3af61453cf6'}, {
    url: '/svg/fitness.svg',
    revision: 'd56910cb6eccc597031fe17138f5c75f'
  }, {url: '/svg/flag-outline.svg', revision: '12c282e75220758bd35aa1a1431dad59'}, {
    url: '/svg/flag-sharp.svg',
    revision: '14f4d08ce43d909efb536a5b6d2bb44d'
  }, {url: '/svg/flag.svg', revision: '1175b6d9df92a3459e5c3d39f88a1805'}, {
    url: '/svg/flame-outline.svg',
    revision: '0b4be77af8c947f359f8bc5c400fafdb'
  }, {url: '/svg/flame-sharp.svg', revision: '6a92fc6334d9dc82179aee2356163d4e'}, {
    url: '/svg/flame.svg',
    revision: '740017ec9957c56caf9c97f1ca0521ee'
  }, {
    url: '/svg/flash-off-outline.svg',
    revision: '25a6999960f39f23a628bd31a65e2580'
  }, {url: '/svg/flash-off-sharp.svg', revision: '79874aeab658613db979bf35c96be940'}, {
    url: '/svg/flash-off.svg',
    revision: '84199980b0a3ebe5c8774a8bae24d0a5'
  }, {url: '/svg/flash-outline.svg', revision: '451a860e44458adc7fc162a6e90fac15'}, {
    url: '/svg/flash-sharp.svg',
    revision: '967739f8cc0fb787abb327e70c9979ba'
  }, {url: '/svg/flash.svg', revision: '84d59632c5ce3e213e07386bfe3adc04'}, {
    url: '/svg/flashlight-outline.svg',
    revision: '8ebd74f07da6cc6c177dec419a49a97c'
  }, {url: '/svg/flashlight-sharp.svg', revision: 'f36a2de2d3d2b1dffac41ccd162a579c'}, {
    url: '/svg/flashlight.svg',
    revision: '948f1cb9c38edd6448d87c7568617bab'
  }, {url: '/svg/flask-outline.svg', revision: '7ca7f83018f831ed9cbd3f0c146e3a74'}, {
    url: '/svg/flask-sharp.svg',
    revision: '53580cbe05f5efbff3b04b125b8c3d06'
  }, {url: '/svg/flask.svg', revision: '5c8a3d8a15b7b4515c9e2b6051d6247a'}, {
    url: '/svg/flower-outline.svg',
    revision: '2b3c0a521e69f32c591aa7e351a5ff6d'
  }, {url: '/svg/flower-sharp.svg', revision: '5e3b551ad8250a0cc8b196bb50b8a539'}, {
    url: '/svg/flower.svg',
    revision: 'eed2266169bea052c2781a8261e9dd90'
  }, {
    url: '/svg/folder-open-outline.svg',
    revision: '757a8b0eb9681f803f27ccef740db5cd'
  }, {url: '/svg/folder-open-sharp.svg', revision: '65ae6a06ca519a888c57b958a419df53'}, {
    url: '/svg/folder-open.svg',
    revision: 'a4dc4f2124b33cbb6c290e32b4623599'
  }, {url: '/svg/folder-outline.svg', revision: '9abd92b569676a33f8e9cacd6d71302a'}, {
    url: '/svg/folder-sharp.svg',
    revision: '2435341f7d89f5c29bb84234bc3e7f1c'
  }, {url: '/svg/folder.svg', revision: '0e2bf68170abfdcb52471ba8fb97bfc5'}, {
    url: '/svg/football-outline.svg',
    revision: 'b8df9a024efa6b1b1774a7785ef18254'
  }, {url: '/svg/football-sharp.svg', revision: '5c927ec17fd0730bdd113a353d03e171'}, {
    url: '/svg/football.svg',
    revision: 'c7300d0f5becc93ba30774aef1307d5c'
  }, {
    url: '/svg/footsteps-outline.svg',
    revision: '1d33981f90fc3eae68b9cf74039d86a6'
  }, {url: '/svg/footsteps-sharp.svg', revision: '981c5533791dba98c522dbbfde3e2bc5'}, {
    url: '/svg/footsteps.svg',
    revision: '0d4fd2dc7e28255b8750a92d2be0d01d'
  }, {url: '/svg/funnel-outline.svg', revision: 'b6185d2c77273fc0d64270a27fdd498c'}, {
    url: '/svg/funnel-sharp.svg',
    revision: '42c5fe8993b2f04d2b7afd3a67fffc50'
  }, {url: '/svg/funnel.svg', revision: '5785058bb11cfda496f10014199de1ee'}, {
    url: '/svg/game-controller-outline.svg',
    revision: '274a1f1f1a47d1059ec0f4b8ff2067ba'
  }, {
    url: '/svg/game-controller-sharp.svg',
    revision: 'f3a7c7d42791953289b26527d336dec5'
  }, {url: '/svg/game-controller.svg', revision: '3cad253cb39a7aa644457ca9167a5567'}, {
    url: '/svg/gift-outline.svg',
    revision: '39fd73469f48feafe9a92f18f8858ae6'
  }, {url: '/svg/gift-sharp.svg', revision: 'c38b19aeb5a047de53b52b597929b0ca'}, {
    url: '/svg/gift.svg',
    revision: 'f36e084ca755c997577487ab6a759b89'
  }, {
    url: '/svg/git-branch-outline.svg',
    revision: 'c3f2f19bccea368e268e95f69886507b'
  }, {url: '/svg/git-branch-sharp.svg', revision: 'ba9333a7fdfd1c8724d06b10988e3441'}, {
    url: '/svg/git-branch.svg',
    revision: 'fc7c0bbd7b9d264ab85b3392aab9fd11'
  }, {
    url: '/svg/git-commit-outline.svg',
    revision: '023b72c60d05f102141ff7662cf590dc'
  }, {url: '/svg/git-commit-sharp.svg', revision: '3205d71f487887d49d12f17764b10616'}, {
    url: '/svg/git-commit.svg',
    revision: '20fa319e423aa867faffd5f30c4a66c5'
  }, {
    url: '/svg/git-compare-outline.svg',
    revision: 'cc51330e9229cbca95da0b72be37c35a'
  }, {url: '/svg/git-compare-sharp.svg', revision: 'a8e31f27e1247e03c2249666babe6ad9'}, {
    url: '/svg/git-compare.svg',
    revision: 'd9908780d6186db0e754b3680418aacd'
  }, {
    url: '/svg/git-merge-outline.svg',
    revision: 'd8d411d24b2e018ca8581da5d66142fe'
  }, {url: '/svg/git-merge-sharp.svg', revision: 'c3f11b6a04483e42ae41b88cf13bc4af'}, {
    url: '/svg/git-merge.svg',
    revision: '3d48d1455a8864f91d256ebb1c799877'
  }, {
    url: '/svg/git-network-outline.svg',
    revision: '0ab1aa09a9b3750bfdb9dc4952cf44e9'
  }, {url: '/svg/git-network-sharp.svg', revision: '981a7f593020203b5f3561c70f8ec56a'}, {
    url: '/svg/git-network.svg',
    revision: '613666d2134f2bdbe01411e6df8c436d'
  }, {
    url: '/svg/git-pull-request-outline.svg',
    revision: '50b03d63fd9d579f662fa9c1b0e9606e'
  }, {
    url: '/svg/git-pull-request-sharp.svg',
    revision: 'f597a87067b77d2e22a33ffe92687483'
  }, {url: '/svg/git-pull-request.svg', revision: 'dff3172251bdcb572ef55471caac3f6c'}, {
    url: '/svg/glasses-outline.svg',
    revision: '7fd646577cbe47884aaa31c528824d70'
  }, {url: '/svg/glasses-sharp.svg', revision: '7451d72d16c80606659afeda11ff729e'}, {
    url: '/svg/glasses.svg',
    revision: '3712ef3c1067c157b87157aa8da907a3'
  }, {url: '/svg/globe-outline.svg', revision: 'fa661320028625408486ccaa22d2b403'}, {
    url: '/svg/globe-sharp.svg',
    revision: 'd0cd23047ea593de598bfcffe94a1f8f'
  }, {url: '/svg/globe.svg', revision: '3d7f367662fe0861fb2ba0b1cd446b89'}, {
    url: '/svg/golf-outline.svg',
    revision: '7e8718a4557445b326af710c217c1b62'
  }, {url: '/svg/golf-sharp.svg', revision: 'd35a041bce064d6195fa71d2ef2e1a00'}, {
    url: '/svg/golf.svg',
    revision: 'c262a5e7a93fc2221a85c3bf1711712a'
  }, {url: '/svg/grid-outline.svg', revision: '947c74a4e52b1b68209240927c5552ab'}, {
    url: '/svg/grid-sharp.svg',
    revision: '10c224feb1ab46b7d29f64f4afd1ff3d'
  }, {url: '/svg/grid.svg', revision: 'a703b26367af2a8378cc06b8ac56011f'}, {
    url: '/svg/hammer-outline.svg',
    revision: '110f489b64ccf499bb9053787a12d1fa'
  }, {url: '/svg/hammer-sharp.svg', revision: '3a62022cb86054e55476560045c799ba'}, {
    url: '/svg/hammer.svg',
    revision: '6cda428e38cd36307d012031acc457d1'
  }, {
    url: '/svg/hand-left-outline.svg',
    revision: '7f166fb42ee403cea3645a729db73e13'
  }, {url: '/svg/hand-left-sharp.svg', revision: '6fba1301fa1bc359e5d28559cf1214ca'}, {
    url: '/svg/hand-left.svg',
    revision: '401680abe12737b4ecba55b2d2cc7358'
  }, {
    url: '/svg/hand-right-outline.svg',
    revision: '3df19c890622d82e76095c257220b325'
  }, {url: '/svg/hand-right-sharp.svg', revision: '20ad7e3802f07af93d13b25083a8ba5b'}, {
    url: '/svg/hand-right.svg',
    revision: '7aac7bc5e9646ba0848ffc64aa327068'
  }, {url: '/svg/happy-outline.svg', revision: 'e1a7d51a720898d8bb75df17b09e4653'}, {
    url: '/svg/happy-sharp.svg',
    revision: '4eab0397eebbe01d6b16982e06ba02c9'
  }, {url: '/svg/happy.svg', revision: '4a8b38fb13b89b099f7b10cb6c66bf30'}, {
    url: '/svg/hardware-chip-outline.svg',
    revision: '0fdb89b86bc70cca000e5a655ff8a8d1'
  }, {
    url: '/svg/hardware-chip-sharp.svg',
    revision: '8f8f5a57e864d3d4ea58fe8100975546'
  }, {url: '/svg/hardware-chip.svg', revision: '7917d2d80a5834098ae69d0128938846'}, {
    url: '/svg/headset-outline.svg',
    revision: 'c53792dee205b95468ee2a878be4a811'
  }, {url: '/svg/headset-sharp.svg', revision: '4066ad3a307e229f89080e43d661ea07'}, {
    url: '/svg/headset.svg',
    revision: 'bc6c808e1ef2060de568a51225deb364'
  }, {
    url: '/svg/heart-circle-outline.svg',
    revision: '58b1bc1936e99c25d05f9f3a2569bc90'
  }, {url: '/svg/heart-circle-sharp.svg', revision: '1d2ed9212cd2163f3e73857c92710e23'}, {
    url: '/svg/heart-circle.svg',
    revision: 'ae8ed7a9ba65a4017d54d52a526ce56d'
  }, {
    url: '/svg/heart-dislike-circle-outline.svg',
    revision: 'df8cd7576ac9629392cc63c65c17dc18'
  }, {
    url: '/svg/heart-dislike-circle-sharp.svg',
    revision: 'ff464770e59caefd836dee67464ca79b'
  }, {
    url: '/svg/heart-dislike-circle.svg',
    revision: '90404f325c2e3f46b93c72bf8fce319e'
  }, {
    url: '/svg/heart-dislike-outline.svg',
    revision: 'cc6a64672250214dfa1a25fbc911f9df'
  }, {
    url: '/svg/heart-dislike-sharp.svg',
    revision: '3bbcbf9f129a991130e92d6ce1702456'
  }, {url: '/svg/heart-dislike.svg', revision: '6e4189391fc93e36c5125c8801741e85'}, {
    url: '/svg/heart-half-outline.svg',
    revision: 'b1aabc3918bcdc1ecf5607bcb2d5532b'
  }, {url: '/svg/heart-half-sharp.svg', revision: 'ac376c3a79f25cedb44945fbe00ed7eb'}, {
    url: '/svg/heart-half.svg',
    revision: 'b1aabc3918bcdc1ecf5607bcb2d5532b'
  }, {url: '/svg/heart-outline.svg', revision: 'e4b7bb717af94414efcd123467a34fbe'}, {
    url: '/svg/heart-sharp.svg',
    revision: 'd0018c73929a910e713202f082ae5a39'
  }, {url: '/svg/heart.svg', revision: 'e6d65fbdffbf9b4272d6728642a0a46e'}, {
    url: '/svg/help-buoy-outline.svg',
    revision: '66fd65a41834ef36b92eed9b0f0f1822'
  }, {url: '/svg/help-buoy-sharp.svg', revision: '04dc48659450025102983a379cd267fd'}, {
    url: '/svg/help-buoy.svg',
    revision: 'e774c8cef520b50bbe56b6e33eb47b5b'
  }, {
    url: '/svg/help-circle-outline.svg',
    revision: 'cf53f3c29f0e8ae0c7e81a332f980d73'
  }, {url: '/svg/help-circle-sharp.svg', revision: '094b60b973b103c56caa90c581c92346'}, {
    url: '/svg/help-circle.svg',
    revision: '418df8222845ff9aa5684b822c41e396'
  }, {url: '/svg/help-outline.svg', revision: 'c9946bf6fe330fa0b0c8a0120a25a456'}, {
    url: '/svg/help-sharp.svg',
    revision: '4dc95c27bd6bd3f62af256922bca8e5c'
  }, {url: '/svg/help.svg', revision: 'c9946bf6fe330fa0b0c8a0120a25a456'}, {
    url: '/svg/home-outline.svg',
    revision: '207c6c2ef856e08f59bcdfad3b994889'
  }, {url: '/svg/home-sharp.svg', revision: '572c64c6520fc6984fe6b6fce9a9700c'}, {
    url: '/svg/home.svg',
    revision: 'e16b7483b581e4701569d3f5e7fc0ae2'
  }, {
    url: '/svg/hourglass-outline.svg',
    revision: '2ad7c0fb72d340f53ac1e582e85dbc17'
  }, {url: '/svg/hourglass-sharp.svg', revision: '65f3af193483e42ab88e958d8a29a430'}, {
    url: '/svg/hourglass.svg',
    revision: '58a99ee6ecbef2ce6131c794e57be0f2'
  }, {
    url: '/svg/ice-cream-outline.svg',
    revision: '0057d71eac183cc74ae97b605b2f50c0'
  }, {url: '/svg/ice-cream-sharp.svg', revision: 'bf2e64ab62f5ffc122a0cd2bfca1f20e'}, {
    url: '/svg/ice-cream.svg',
    revision: '585a91e191dce1c053d019f5b8b73878'
  }, {url: '/svg/id-card-outline.svg', revision: '08f07497a23435ae6d6bcdd3cbcaa7a7'}, {
    url: '/svg/id-card-sharp.svg',
    revision: '93e6c3ef15a1c1654999c6ed9f724ef9'
  }, {url: '/svg/id-card.svg', revision: 'bbdd442b0176702360adcbd63b7e03b0'}, {
    url: '/svg/image-outline.svg',
    revision: '0cb3e82e9d53f618ef76181b74003425'
  }, {url: '/svg/image-sharp.svg', revision: 'acfce167460c72349a1f9cdbc8541c05'}, {
    url: '/svg/image.svg',
    revision: 'feb0e88bbc7ab372fac3afde031cf39d'
  }, {url: '/svg/images-outline.svg', revision: 'ac12ce4e61534b9bc553513c956876dd'}, {
    url: '/svg/images-sharp.svg',
    revision: 'ce8f2352dfabf0695662d7a8e1d3e2b9'
  }, {url: '/svg/images.svg', revision: '72947ae7c5e151060ea55ab7bc945859'}, {
    url: '/svg/infinite-outline.svg',
    revision: '16f9013fceebf1f17bdf7cc84b8c10cd'
  }, {url: '/svg/infinite-sharp.svg', revision: '84fe9b5f00aaddc94ac2da960c6f18dc'}, {
    url: '/svg/infinite.svg',
    revision: '2d70688c0ad2a4f59b90a804e2fed16f'
  }, {
    url: '/svg/information-circle-outline.svg',
    revision: 'e5ca5a8855b180bdd326ff6c85e1de60'
  }, {
    url: '/svg/information-circle-sharp.svg',
    revision: '3e4a0bb91b0e1fcba6065f497a4422df'
  }, {
    url: '/svg/information-circle.svg',
    revision: '4843000a8c92884458277e77b7af7814'
  }, {
    url: '/svg/information-outline.svg',
    revision: '0668cb20fece2b4a5d3700b7680868c1'
  }, {url: '/svg/information-sharp.svg', revision: 'aef35d1ab71f60322450b9ba6b5021b9'}, {
    url: '/svg/information.svg',
    revision: '0668cb20fece2b4a5d3700b7680868c1'
  }, {
    url: '/svg/invert-mode-outline.svg',
    revision: 'cf577bc7130d2502a18c97d6626b7b5c'
  }, {url: '/svg/invert-mode-sharp.svg', revision: 'da2c8bb57ce078db59a86a1be7309bfb'}, {
    url: '/svg/invert-mode.svg',
    revision: '1efc1cbfa4dbf7695be23241f723d492'
  }, {url: '/svg/journal-outline.svg', revision: 'b667fbaa45d46b757bd9746977256097'}, {
    url: '/svg/journal-sharp.svg',
    revision: 'f138b4bc741551bb7619c17039cb364a'
  }, {url: '/svg/journal.svg', revision: 'a7b509ecb36cb58aa954fdedbc04a39f'}, {
    url: '/svg/key-outline.svg',
    revision: '65f0b702b673425137a9b42d01a93c30'
  }, {url: '/svg/key-sharp.svg', revision: 'dfe77ba50c17418220475b246264cd20'}, {
    url: '/svg/key.svg',
    revision: 'a65885564c889170d388449bb4abc7ce'
  }, {url: '/svg/keypad-outline.svg', revision: '502ccd56e95afd7d8c73d6d21bdcdb56'}, {
    url: '/svg/keypad-sharp.svg',
    revision: '3a64bd02b48c2a339f68b7ed419a3183'
  }, {url: '/svg/keypad.svg', revision: '669534d5c6b27520130b6565f2481e0a'}, {
    url: '/svg/language-outline.svg',
    revision: 'd5af2b9778167fbd50e871db9f785a3e'
  }, {url: '/svg/language-sharp.svg', revision: 'f2549c6a904240ff525509c8a1857583'}, {
    url: '/svg/language.svg',
    revision: '59eb9e01773888427851c140a61e0b6a'
  }, {url: '/svg/laptop-outline.svg', revision: '09a8cc5a84f7aa2262a52cb15a31a2f4'}, {
    url: '/svg/laptop-sharp.svg',
    revision: '1cad306adac741e98c35a1f9b2a51bff'
  }, {url: '/svg/laptop.svg', revision: 'aeff95613f1c33bd4f906395c89134c9'}, {
    url: '/svg/layers-outline.svg',
    revision: '39c577dc0b625cb26dbb936c04cca064'
  }, {url: '/svg/layers-sharp.svg', revision: 'c1c723e8af475867eed8007684ce8c98'}, {
    url: '/svg/layers.svg',
    revision: '931b3ef9529ea5b9519e2f2b65f1a273'
  }, {url: '/svg/leaf-outline.svg', revision: 'e4af82ec1684379dbc9ffc3187b188fb'}, {
    url: '/svg/leaf-sharp.svg',
    revision: '6a9119b901a185e0bcbcb0e6d9cd5832'
  }, {url: '/svg/leaf.svg', revision: 'e16780f2158b8c581df38b5b0591e0ab'}, {
    url: '/svg/library-outline.svg',
    revision: '24d057c1d4493699b8f600c6922c289e'
  }, {url: '/svg/library-sharp.svg', revision: 'e41a701b02aa9ac149b7871c8ac3b0a9'}, {
    url: '/svg/library.svg',
    revision: '0b4bb60ce0e51c17f1b1f77040a098de'
  }, {url: '/svg/link-outline.svg', revision: '848e4a3982a6bcb544245c8a9f6d891a'}, {
    url: '/svg/link-sharp.svg',
    revision: 'e158c603068e1376426d6742772d1578'
  }, {url: '/svg/link.svg', revision: '65e72a8aab08d13f707acf5d1ab7c87e'}, {
    url: '/svg/list-circle-outline.svg',
    revision: '56bd38434c8cd7b487ebb47c2dc7bdb9'
  }, {url: '/svg/list-circle-sharp.svg', revision: 'd9551126c49721e0d6e863221b2ed849'}, {
    url: '/svg/list-circle.svg',
    revision: '7aad461ded3cf1ea629fe9e4faaba870'
  }, {url: '/svg/list-outline.svg', revision: 'f971bb9b9955fecfb2640cfda22c4a1f'}, {
    url: '/svg/list-sharp.svg',
    revision: 'e9a6a08376f8093d48eaef9dbac75c68'
  }, {url: '/svg/list.svg', revision: 'a04416c90053e28d6f2bfa4f891dbb3f'}, {
    url: '/svg/locate-outline.svg',
    revision: '147daffd5e04e5b1cd47c09d85954a7c'
  }, {url: '/svg/locate-sharp.svg', revision: '127fa906d98a989ee029a017e6ee6484'}, {
    url: '/svg/locate.svg',
    revision: '947cb3a0b339ea23c4cf4a85788a9ebf'
  }, {url: '/svg/location-outline.svg', revision: '9e1938bf968282ccfe79143bc7a79ad6'}, {
    url: '/svg/location-sharp.svg',
    revision: '6b34523eca05fb83485d0bb8115b261f'
  }, {url: '/svg/location.svg', revision: 'd736483a7c427018f13a29366bea96cc'}, {
    url: '/svg/lock-closed-outline.svg',
    revision: '0eeb1fce1ac1a564f025d505334326d2'
  }, {url: '/svg/lock-closed-sharp.svg', revision: 'da4c71db32e501294bf216e319f37831'}, {
    url: '/svg/lock-closed.svg',
    revision: 'e640f15d28c7221dc2f54393a40e5e66'
  }, {
    url: '/svg/lock-open-outline.svg',
    revision: '5d2b6520f8954651a0b3060355108b9a'
  }, {url: '/svg/lock-open-sharp.svg', revision: '6f5506b0a5770c8f32f6b80b833803b7'}, {
    url: '/svg/lock-open.svg',
    revision: 'f6a57fb93d4a9c7b86ca1f5c421ea352'
  }, {url: '/svg/log-in-outline.svg', revision: '52e3fde56018cd230ad61bedae9456af'}, {
    url: '/svg/log-in-sharp.svg',
    revision: 'eeb3f08fcff3373ee4ea6b30e069f184'
  }, {url: '/svg/log-in.svg', revision: '24e24f3396c296707bc4abf79146c01b'}, {
    url: '/svg/log-out-outline.svg',
    revision: '1ba9253af5c4358bc84e21526c1151d3'
  }, {url: '/svg/log-out-sharp.svg', revision: '5331683c086fe21eab37477c6aaeb2e3'}, {
    url: '/svg/log-out.svg',
    revision: '5b0f72fa549f03b567b98d487046f821'
  }, {url: '/svg/logo-alipay.svg', revision: '6350017aaf7246bc35da828ee73c60eb'}, {
    url: '/svg/logo-amazon.svg',
    revision: '74c3e04b36c67025ee762c3c000d960f'
  }, {url: '/svg/logo-amplify.svg', revision: 'c8637496e7b46b9ef93fd1524a362af4'}, {
    url: '/svg/logo-android.svg',
    revision: '177f6eaefe8c55c15b52b1d4560b928d'
  }, {url: '/svg/logo-angular.svg', revision: 'b111a3a7aab3c69c09b56cb000d41fae'}, {
    url: '/svg/logo-apple-appstore.svg',
    revision: '4702ff8565f789c1df9bb5a05fcb311b'
  }, {url: '/svg/logo-apple-ar.svg', revision: '9bba4c633b38c09990681caf29ea539c'}, {
    url: '/svg/logo-apple.svg',
    revision: '812f8eeb6bd3d8bbf3e3d6a6f2cc7247'
  }, {url: '/svg/logo-behance.svg', revision: 'f7a44443b54f129603d949f2af8802ef'}, {
    url: '/svg/logo-bitbucket.svg',
    revision: 'fd3a86944e2bc7891037c66e05544903'
  }, {url: '/svg/logo-bitcoin.svg', revision: 'a030afa1fb01e213d77ddd94b429863a'}, {
    url: '/svg/logo-buffer.svg',
    revision: 'eeadd5ddaa7e31413212470f901257c1'
  }, {url: '/svg/logo-capacitor.svg', revision: 'd4a9690b20900dbd48ad49b6224c1b26'}, {
    url: '/svg/logo-chrome.svg',
    revision: 'e8af5cc5d5c1923011d2a65ef3a08362'
  }, {
    url: '/svg/logo-closed-captioning.svg',
    revision: 'b6937e1f2de62ff826ec3d62dce610b1'
  }, {url: '/svg/logo-codepen.svg', revision: 'b610d2fd70e85dce359e6b9d3e7ad8c7'}, {
    url: '/svg/logo-css3.svg',
    revision: 'a35360a90ad88f03799d349f2209dd7d'
  }, {
    url: '/svg/logo-designernews.svg',
    revision: '7fcf1bfa833ce61a07e8e2c9cacef059'
  }, {url: '/svg/logo-deviantart.svg', revision: 'b871f1b6693a935e87bd066653d4daf7'}, {
    url: '/svg/logo-discord.svg',
    revision: '184dc46d568501c2bea4f47ea51f9f3d'
  }, {url: '/svg/logo-docker.svg', revision: '735d4f40ba711056c1590e199a3a1b2b'}, {
    url: '/svg/logo-dribbble.svg',
    revision: '0f19033ea3e3e83325d8edcb698106fc'
  }, {url: '/svg/logo-dropbox.svg', revision: 'c63b53027e9523bfb83e9709cd2a6c32'}, {
    url: '/svg/logo-edge.svg',
    revision: '03a55e0744bb617664770765a7853bfb'
  }, {url: '/svg/logo-electron.svg', revision: 'd673920bf5e89743be9d91683ab86611'}, {
    url: '/svg/logo-euro.svg',
    revision: 'a3ad50bba4eaaec43f8ae6a963a51669'
  }, {url: '/svg/logo-facebook.svg', revision: '0a8c05b537d16f923e52b7feb18b677d'}, {
    url: '/svg/logo-figma.svg',
    revision: '5a6dcf7cfc283bf08651e77670bbb9e9'
  }, {url: '/svg/logo-firebase.svg', revision: '471e668f031bb5fd73eca896b571b6bd'}, {
    url: '/svg/logo-firefox.svg',
    revision: '839794cb3e1f974b5ad6fee7a7f02d3e'
  }, {url: '/svg/logo-flickr.svg', revision: 'e9d6af820eae741857f59dc026e359c2'}, {
    url: '/svg/logo-foursquare.svg',
    revision: '6db59024215239ba4a4fdecc5342c4a8'
  }, {url: '/svg/logo-github.svg', revision: '5eca19e8c927cb5cae4e9a9d0611c09a'}, {
    url: '/svg/logo-gitlab.svg',
    revision: 'bca08fcf5e3678b49fda55f8d2fc9d7d'
  }, {
    url: '/svg/logo-google-playstore.svg',
    revision: 'b2bab24852510eca4612222c84777ce2'
  }, {url: '/svg/logo-google.svg', revision: '35312845f735ff74c1415ebac6e9aae8'}, {
    url: '/svg/logo-hackernews.svg',
    revision: 'db209646b7dae940380b11c7feaf2d69'
  }, {url: '/svg/logo-html5.svg', revision: '74f8a361546f35a7622cff38bd38b7e7'}, {
    url: '/svg/logo-instagram.svg',
    revision: 'b51977d0533241bff8d34a73dcad9a1c'
  }, {url: '/svg/logo-ionic.svg', revision: '7cb41557c800379b9b8788cd3ea64945'}, {
    url: '/svg/logo-ionitron.svg',
    revision: '856ecc9ffc00bdd9d2ac8c5499d6d2af'
  }, {url: '/svg/logo-javascript.svg', revision: '6ac375ea4e985ff89098f9e9ffca5ce1'}, {
    url: '/svg/logo-laravel.svg',
    revision: '9f9b1937da8790944cfa67fd5c742a63'
  }, {url: '/svg/logo-linkedin.svg', revision: '9e40031f9d4b81e16c9bb9b49c56cff4'}, {
    url: '/svg/logo-markdown.svg',
    revision: '0711f87d452f02543e14e5c1aa3048c8'
  }, {url: '/svg/logo-mastodon.svg', revision: '065e9712b70950e21a6f8839946f793e'}, {
    url: '/svg/logo-medium.svg',
    revision: 'b91e4f2e27b3f201215a4e81c63b2c93'
  }, {url: '/svg/logo-microsoft.svg', revision: '536228c2b1ebbfcb5e29a076bf0544bb'}, {
    url: '/svg/logo-no-smoking.svg',
    revision: 'ad5a1f1a333994af1b27c69c98deb229'
  }, {url: '/svg/logo-nodejs.svg', revision: '0f268589a3ac82f2e2997a1ef8526c27'}, {
    url: '/svg/logo-npm.svg',
    revision: '611f3db2dc7cc467e68408e0869f64c6'
  }, {url: '/svg/logo-octocat.svg', revision: 'c92f2d72112eb69b0b00f4b6095a59fd'}, {
    url: '/svg/logo-paypal.svg',
    revision: '3433f1005c91c7a3548d678fa996e430'
  }, {url: '/svg/logo-pinterest.svg', revision: '6f2ab342124113c6864cdf1558d99719'}, {
    url: '/svg/logo-playstation.svg',
    revision: '7643d0d8db6659efc38d9bba91cd7c42'
  }, {url: '/svg/logo-pwa.svg', revision: '32ffebb8940016352b8137b46ae16323'}, {
    url: '/svg/logo-python.svg',
    revision: '986b4a92120e075d503cf5f5b27fb54d'
  }, {url: '/svg/logo-react.svg', revision: '3671c211f02a42a15704b26698715dcd'}, {
    url: '/svg/logo-reddit.svg',
    revision: '9816d5af739f9d9603221c48e251052b'
  }, {url: '/svg/logo-rss.svg', revision: 'bfeb0ebb297ae89a10c7e975cc3b44da'}, {
    url: '/svg/logo-sass.svg',
    revision: '2b8d120bbd4aec0e965e2a027ea9bf61'
  }, {url: '/svg/logo-skype.svg', revision: '0878d8433a21d81959c25e94c4f3707a'}, {
    url: '/svg/logo-slack.svg',
    revision: 'bd0f0eccd331d5f8215cd4c62f105fca'
  }, {url: '/svg/logo-snapchat.svg', revision: 'f92b2304388de164b688630cae6ea7e3'}, {
    url: '/svg/logo-soundcloud.svg',
    revision: '55e13782188f606f25095fa321b2aeb4'
  }, {url: '/svg/logo-stackoverflow.svg', revision: '3df04f79fd1347efd470b3499d08747c'}, {
    url: '/svg/logo-steam.svg',
    revision: '6cb0568a8a52ea114b7622c0cd4ef69d'
  }, {url: '/svg/logo-stencil.svg', revision: '532d23fbdd9e4926f21c3187c0fa652b'}, {
    url: '/svg/logo-tableau.svg',
    revision: 'db7313ebf65c90783135249f5549b597'
  }, {url: '/svg/logo-tiktok.svg', revision: '1fc87bbdcbff94f5519ca56cb191b091'}, {
    url: '/svg/logo-tumblr.svg',
    revision: '6d5c0f1e647e8237c0fcbce6bf62ec33'
  }, {url: '/svg/logo-tux.svg', revision: '10b7762a0a58bbc84d1e8ddbea03dc94'}, {
    url: '/svg/logo-twitch.svg',
    revision: '08b25f8c5b0870cbefc8e2a87c9c1afa'
  }, {url: '/svg/logo-twitter.svg', revision: 'e7a6cfef9ca0d34ae3a641b890040975'}, {
    url: '/svg/logo-usd.svg',
    revision: 'dc54bac8aed343e1230bd376ff5fd82a'
  }, {url: '/svg/logo-venmo.svg', revision: '5477cb61cfb1d8424a88908fe6233946'}, {
    url: '/svg/logo-vercel.svg',
    revision: '286b8ff83b8c498e3f9dc42916c01005'
  }, {url: '/svg/logo-vimeo.svg', revision: '75a1c4febe9e53fec52bb75ad3681c9a'}, {
    url: '/svg/logo-vk.svg',
    revision: '19d79a9d7b7502c270546a6dc9ca09fb'
  }, {url: '/svg/logo-vue.svg', revision: '0ec071749f552b12bcc166872da7945c'}, {
    url: '/svg/logo-web-component.svg',
    revision: 'eebf284d769be6a085ff40ac2e882bef'
  }, {url: '/svg/logo-wechat.svg', revision: '9a73d49b72ac8d8938398f33b40cec53'}, {
    url: '/svg/logo-whatsapp.svg',
    revision: '61c8a48ccfe190a882bd5f2e7e7383cc'
  }, {url: '/svg/logo-windows.svg', revision: 'a4068c59c7c4697ce77d482d2aacc30d'}, {
    url: '/svg/logo-wordpress.svg',
    revision: '5b39b7e8f4e32063f6280e49e22a6612'
  }, {url: '/svg/logo-xbox.svg', revision: '96d27ec9b57640cf98df68f2a307ec6f'}, {
    url: '/svg/logo-xing.svg',
    revision: 'e3f834b77981f89a317a93868ea4c4ea'
  }, {url: '/svg/logo-yahoo.svg', revision: '5727a042ac80b8548a61a421e99eb703'}, {
    url: '/svg/logo-yen.svg',
    revision: '196cd68ccfe099196b22ad6ccaaa546b'
  }, {url: '/svg/logo-youtube.svg', revision: '8b6e47d534d13061c836f2f3b8585ef7'}, {
    url: '/svg/magnet-outline.svg',
    revision: '4c17163462aac5a5ccd827c822f511ff'
  }, {url: '/svg/magnet-sharp.svg', revision: '4591a86a03b0fb87e4d21c4058917272'}, {
    url: '/svg/magnet.svg',
    revision: 'f812766417db7be7368f40649bc268a6'
  }, {
    url: '/svg/mail-open-outline.svg',
    revision: '60ba1eb517cc93e61814fc7ce8111c8e'
  }, {url: '/svg/mail-open-sharp.svg', revision: '24494b0f7a8c04fdcdc1a8001038e39a'}, {
    url: '/svg/mail-open.svg',
    revision: 'df35fdb3ce8aca0194ad63b5521e0578'
  }, {url: '/svg/mail-outline.svg', revision: '01636633ecdbe4fbd410a679054899df'}, {
    url: '/svg/mail-sharp.svg',
    revision: 'c62dee8f763a9f57d5b864fe8592ec46'
  }, {
    url: '/svg/mail-unread-outline.svg',
    revision: '7f4423fd81764ba7dddd8eaca76ab212'
  }, {url: '/svg/mail-unread-sharp.svg', revision: 'ad77e98bfdc897c0bb2b31dc1b8af6ab'}, {
    url: '/svg/mail-unread.svg',
    revision: '9a82e4cfe00eb3b1c9d2fb38149ede40'
  }, {url: '/svg/mail.svg', revision: 'f86bee7363669815f647c32a06069359'}, {
    url: '/svg/male-female-outline.svg',
    revision: '8e4a63359bb238a8f885ace3e6df97d7'
  }, {url: '/svg/male-female-sharp.svg', revision: 'd11340d1def5f93ecc72d1e1d887b160'}, {
    url: '/svg/male-female.svg',
    revision: '3939198bb0f42ae42d1c1c0d8d4d47e6'
  }, {url: '/svg/male-outline.svg', revision: '966f540ba34eb30cb6eff3bbb6dd38ad'}, {
    url: '/svg/male-sharp.svg',
    revision: '479d5542c26caf9b875b9857d141a6da'
  }, {url: '/svg/male.svg', revision: '53c4c75d74b746e9705dbd9b6c56aaa3'}, {
    url: '/svg/man-outline.svg',
    revision: 'bc387b0e39b3cc255ea12fb55ddc2bf0'
  }, {url: '/svg/man-sharp.svg', revision: 'bcb5d7e51b0e1350a1923a6c8de80475'}, {
    url: '/svg/man.svg',
    revision: 'ef27692d38d09e94e07ee6cb7ae0ea7d'
  }, {url: '/svg/map-outline.svg', revision: '80fb0da2bfa774d12629e338fae2e48d'}, {
    url: '/svg/map-sharp.svg',
    revision: 'b22f54007bace74b87d4abd9b0f11e50'
  }, {url: '/svg/map.svg', revision: 'd5dfe43cf9d6bc2fc52af233d2c97fc5'}, {
    url: '/svg/medal-outline.svg',
    revision: 'e6653675e1fd434d7a8453d1c13f2c41'
  }, {url: '/svg/medal-sharp.svg', revision: 'fc5f3735d2c516dce23593fcc8b6ff43'}, {
    url: '/svg/medal.svg',
    revision: '74084a84e7774e550a158b6e346240d6'
  }, {url: '/svg/medical-outline.svg', revision: 'bc257b3eb8da7178f1fa422e7ebd80e1'}, {
    url: '/svg/medical-sharp.svg',
    revision: '60eae838e308525ea6e37d446ce9a7b4'
  }, {url: '/svg/medical.svg', revision: '763ebfef96178bbaac4bbeee2d69bc81'}, {
    url: '/svg/medkit-outline.svg',
    revision: '9c7a6d4cbc1a9162d4233cca164abc4c'
  }, {url: '/svg/medkit-sharp.svg', revision: '25ab4388b66127aadac9b691621f14bf'}, {
    url: '/svg/medkit.svg',
    revision: '3922519f44f262e5960f5acf8a23b3ce'
  }, {
    url: '/svg/megaphone-outline.svg',
    revision: '7abaa85d27b73af816052171ee7d4715'
  }, {url: '/svg/megaphone-sharp.svg', revision: 'd2495b9d772c0f9005dda89d1ec67ac9'}, {
    url: '/svg/megaphone.svg',
    revision: '95cc62a319f2f99d29edadbc5d719e3c'
  }, {url: '/svg/menu-outline.svg', revision: 'e3384be43bf25483c11ad7e0a604c887'}, {
    url: '/svg/menu-sharp.svg',
    revision: 'bc9eec83fa3b4a968fd0af9726ba034a'
  }, {url: '/svg/menu.svg', revision: 'd29d41029c3e008e8d48a6ec2abd280a'}, {
    url: '/svg/mic-circle-outline.svg',
    revision: 'cbb10591c84e2815d994f2a3eff77452'
  }, {url: '/svg/mic-circle-sharp.svg', revision: '7b5a5ab2a8eac7808a195b18630a4d0a'}, {
    url: '/svg/mic-circle.svg',
    revision: 'b5e8e3280c99087039158d51f08dd5ee'
  }, {
    url: '/svg/mic-off-circle-outline.svg',
    revision: '7b396e665350132374db4d4663888c8f'
  }, {
    url: '/svg/mic-off-circle-sharp.svg',
    revision: 'e781d3a243630ed2a760ce214484f679'
  }, {url: '/svg/mic-off-circle.svg', revision: '950508cfa256b8a6354c41aa13de6159'}, {
    url: '/svg/mic-off-outline.svg',
    revision: '1a4c41ee54d45a649d7b703ffe8450a0'
  }, {url: '/svg/mic-off-sharp.svg', revision: '3975725be7e0b5a66b2d377e7833f7f3'}, {
    url: '/svg/mic-off.svg',
    revision: '1c3dfc6eacfc9b45cab77bbac1a154f4'
  }, {url: '/svg/mic-outline.svg', revision: 'd10aaa53fcbd20ce8e8a1b916402597d'}, {
    url: '/svg/mic-sharp.svg',
    revision: 'c5c83ffe839fe7238299f79b0f2e2a03'
  }, {url: '/svg/mic.svg', revision: 'c4b4f777e608281fe957120944623549'}, {
    url: '/svg/moon-outline.svg',
    revision: '80237e3d896fb7c47fae0ef79707468d'
  }, {url: '/svg/moon-sharp.svg', revision: '2227018f8dde613d2ce1d17f8d266cc3'}, {
    url: '/svg/moon.svg',
    revision: 'b1ad58651e083eb865f4be3fbd1707ab'
  }, {url: '/svg/move-outline.svg', revision: 'e2b82dfdb827fe953cd7bec8e9e34152'}, {
    url: '/svg/move-sharp.svg',
    revision: '97fe9e6366670b0dcd742659e79ce805'
  }, {url: '/svg/move.svg', revision: 'e2b82dfdb827fe953cd7bec8e9e34152'}, {
    url: '/svg/musical-note-outline.svg',
    revision: '14bc3a338ce516685fcedafc50303d86'
  }, {url: '/svg/musical-note-sharp.svg', revision: '0df70ece197c3bc509e6d549045765ca'}, {
    url: '/svg/musical-note.svg',
    revision: '3cb7cc70022bc53032e489df7766eb87'
  }, {
    url: '/svg/musical-notes-outline.svg',
    revision: '0c0edc98d40b544b8924672f8e0571ae'
  }, {
    url: '/svg/musical-notes-sharp.svg',
    revision: '47c289a101f048b978fb28e8d27e2d43'
  }, {
    url: '/svg/musical-notes.svg',
    revision: '5c0f9e08dbb3f8610aacc855b1a8d4bd'
  }, {
    url: '/svg/navigate-circle-outline.svg',
    revision: '35c323a14ebb39e91238e23a3cc9e4a8'
  }, {
    url: '/svg/navigate-circle-sharp.svg',
    revision: '18fd315ef72fa4d79101a0713bb13686'
  }, {url: '/svg/navigate-circle.svg', revision: 'cbbfd4d1bc043069b34742cd7240795e'}, {
    url: '/svg/navigate-outline.svg',
    revision: 'd7bdcd04cf5c965d9811152d9a7a6c3e'
  }, {url: '/svg/navigate-sharp.svg', revision: '4be2198398dd2dc5f20a9a769901fc21'}, {
    url: '/svg/navigate.svg',
    revision: '797fdaccba38beafe945b19e4f42d2ee'
  }, {
    url: '/svg/newspaper-outline.svg',
    revision: '9d628544df9316f794f38ec39dad27aa'
  }, {url: '/svg/newspaper-sharp.svg', revision: '013d38289141e4b3ab8c87044fca0f9f'}, {
    url: '/svg/newspaper.svg',
    revision: '2a1930c0a2fbc2c862f24220bb7632a2'
  }, {
    url: '/svg/notifications-circle-outline.svg',
    revision: '2c4ed3925b9772f0e23c557654e63c9b'
  }, {
    url: '/svg/notifications-circle-sharp.svg',
    revision: '1cf8238024b5ee71f7a437921cfc1c4e'
  }, {
    url: '/svg/notifications-circle.svg',
    revision: 'a19c91fa4ec2b379728b3bbee49332b4'
  }, {
    url: '/svg/notifications-off-circle-outline.svg',
    revision: '22605f51e77938a4988ade23b9eb141b'
  }, {
    url: '/svg/notifications-off-circle-sharp.svg',
    revision: '5a60563fc20e88711a5a251e49eb1a5f'
  }, {
    url: '/svg/notifications-off-circle.svg',
    revision: '5498e9b322549bad65ab40ca1d820103'
  }, {
    url: '/svg/notifications-off-outline.svg',
    revision: '4eab99e570b26b51a277dae0667c7248'
  }, {
    url: '/svg/notifications-off-sharp.svg',
    revision: '4d244f4e394b2d15b7449d4f5aa6d742'
  }, {
    url: '/svg/notifications-off.svg',
    revision: 'c9165a86f109c1f133123c1bdc636d53'
  }, {
    url: '/svg/notifications-outline.svg',
    revision: '8e1be1bd49fc1ce23bcf3da9d71797a2'
  }, {
    url: '/svg/notifications-sharp.svg',
    revision: 'c664e1b5a2a558a2cf73bb9580b76582'
  }, {url: '/svg/notifications.svg', revision: 'bf852cd4d43edcb5e41352086ed4c632'}, {
    url: '/svg/nuclear-outline.svg',
    revision: 'ba9743c393df2aed598daf63e2ca6dc3'
  }, {url: '/svg/nuclear-sharp.svg', revision: '37e2f5f0600be23aabb30f1805185d50'}, {
    url: '/svg/nuclear.svg',
    revision: 'd3825c1b30236bd1ee339c0ea311d60f'
  }, {
    url: '/svg/nutrition-outline.svg',
    revision: '7db0bb7196fc70d169e335722d762076'
  }, {url: '/svg/nutrition-sharp.svg', revision: 'b2b103f79a21f939e25659a40a8396e2'}, {
    url: '/svg/nutrition.svg',
    revision: '8dadb07bba172b491204d0a98da0fc9b'
  }, {url: '/svg/open-outline.svg', revision: '3209be36d3e8d485b2011a2c16a8b2ac'}, {
    url: '/svg/open-sharp.svg',
    revision: '8312793281250061fc0cf1a8ec2104d4'
  }, {url: '/svg/open.svg', revision: '3e31988a6732a7f3f9336e321db8d8ec'}, {
    url: '/svg/options-outline.svg',
    revision: 'f621b3731178f8037dd33b43627eccfa'
  }, {url: '/svg/options-sharp.svg', revision: '16791ebb9fe4112543548eeff6e4d08e'}, {
    url: '/svg/options.svg',
    revision: '529ec63e148f8747fb7c31965dba56cf'
  }, {
    url: '/svg/paper-plane-outline.svg',
    revision: '1fb9d98a7ccd1681f5562b02aba76d4d'
  }, {url: '/svg/paper-plane-sharp.svg', revision: '36b3d32b9c9d0ceabec4926bf796b248'}, {
    url: '/svg/paper-plane.svg',
    revision: '1894630be369a7b5b9c680087ae1abcb'
  }, {
    url: '/svg/partly-sunny-outline.svg',
    revision: '01d75be14b2ab780a5a854b0efae1aa7'
  }, {url: '/svg/partly-sunny-sharp.svg', revision: '011381c6b05a033ba53756aeeff4f7f7'}, {
    url: '/svg/partly-sunny.svg',
    revision: '4fbc1a4adff159c5510ca12fd131ac4e'
  }, {
    url: '/svg/pause-circle-outline.svg',
    revision: '78d70eea0b595d1e5101a10056bffe64'
  }, {url: '/svg/pause-circle-sharp.svg', revision: 'be965875f4bb0bf481385ea3ce5d9fbe'}, {
    url: '/svg/pause-circle.svg',
    revision: '2bbbf0b1abf2974ecb42853bc5325024'
  }, {url: '/svg/pause-outline.svg', revision: 'fcd1be630fccdab41c29017df566b0d4'}, {
    url: '/svg/pause-sharp.svg',
    revision: 'b72a1440078e5f0952bf37e161409276'
  }, {url: '/svg/pause.svg', revision: '2fabe0466180d2f5eed6bea7ec7a424d'}, {
    url: '/svg/paw-outline.svg',
    revision: 'f3ccc5ee3b947a9ca59ca1966bfc2039'
  }, {url: '/svg/paw-sharp.svg', revision: '6550fc51a36e4ab064e6620fa85f4f0c'}, {
    url: '/svg/paw.svg',
    revision: '59f91aefa8aa644e0da2ac851e283cc7'
  }, {url: '/svg/pencil-outline.svg', revision: '0e2ff06fb438a6af2771ea5f9b876df5'}, {
    url: '/svg/pencil-sharp.svg',
    revision: 'f06d5912bdb0e0aed8db6948e684dc97'
  }, {url: '/svg/pencil.svg', revision: 'e73534a606a4bf478fbc50788eba7715'}, {
    url: '/svg/people-circle-outline.svg',
    revision: 'ad2fbacb02434d1e9ef49d3951a0038d'
  }, {
    url: '/svg/people-circle-sharp.svg',
    revision: 'c644e4edc8900b5369940343f18341dc'
  }, {url: '/svg/people-circle.svg', revision: '66526a8d96788ceba4898643a4c77124'}, {
    url: '/svg/people-outline.svg',
    revision: 'e5102ac36bd1897b5698c95f222c7135'
  }, {url: '/svg/people-sharp.svg', revision: '66b6c4c039118798554ac042b96e23b0'}, {
    url: '/svg/people.svg',
    revision: '2b462623734489df78c1b09873de4a58'
  }, {
    url: '/svg/person-add-outline.svg',
    revision: '3be0d197ed47c9d7db49debe5e5d3920'
  }, {url: '/svg/person-add-sharp.svg', revision: 'a56d1ff5ae831ebf5c8a5067001c0052'}, {
    url: '/svg/person-add.svg',
    revision: '7cd3fe6ab04cfc2c17610570b411750a'
  }, {
    url: '/svg/person-circle-outline.svg',
    revision: '6b834a5ffe33e505cb8410fa12f077f2'
  }, {
    url: '/svg/person-circle-sharp.svg',
    revision: 'e673ac77be60e181f7338ecbcd8a0c19'
  }, {url: '/svg/person-circle.svg', revision: '4c5ec61c7d9b966d260717e8cedf88b8'}, {
    url: '/svg/person-outline.svg',
    revision: '722d148c98b97f5ae191d22d8c3172f9'
  }, {
    url: '/svg/person-remove-outline.svg',
    revision: '8c4ab2794c10ba12c84ffec17a93a74c'
  }, {
    url: '/svg/person-remove-sharp.svg',
    revision: '8f5bc8a44aeda7b170c8601553c42517'
  }, {url: '/svg/person-remove.svg', revision: 'e02294fced3ba01cc54bfceb1f14e80e'}, {
    url: '/svg/person-sharp.svg',
    revision: 'f6f0d88c76b5ba922c99f848c0ffd85f'
  }, {url: '/svg/person.svg', revision: '2db87cdaaba7ea12f3a8a0f5fcb673f5'}, {
    url: '/svg/phone-landscape-outline.svg',
    revision: '0c81fae5a218ceffea3878a42ff27cc4'
  }, {
    url: '/svg/phone-landscape-sharp.svg',
    revision: '5062dd45e664062c072dade082815c62'
  }, {
    url: '/svg/phone-landscape.svg',
    revision: '92a16dbaa8141edc7a54acca065bc7f3'
  }, {
    url: '/svg/phone-portrait-outline.svg',
    revision: 'dc0077fc7b748ac3a0947bdddfc0b9f4'
  }, {
    url: '/svg/phone-portrait-sharp.svg',
    revision: 'cb057eb2568dba2c873b8b201dc1fa17'
  }, {url: '/svg/phone-portrait.svg', revision: '76070c8d05dafabea4e326dfbdc3aa25'}, {
    url: '/svg/pie-chart-outline.svg',
    revision: '2c7d592b2f2ecfa439e03ef5547ccc37'
  }, {url: '/svg/pie-chart-sharp.svg', revision: 'ba57ce5352b938f7b10d39d297287289'}, {
    url: '/svg/pie-chart.svg',
    revision: '0eafc3e5db9d204087990505d5e35ec3'
  }, {url: '/svg/pin-outline.svg', revision: 'ad0318cf6c2c9cf9e2543503b9b663d8'}, {
    url: '/svg/pin-sharp.svg',
    revision: 'e548665ffbb2c068dc0d2d520a09a893'
  }, {url: '/svg/pin.svg', revision: 'd703d454aa6eadbaf9c86d5e50940cd6'}, {
    url: '/svg/pint-outline.svg',
    revision: '6dba56eaf81fc460491b30b19258f274'
  }, {url: '/svg/pint-sharp.svg', revision: '2d071e18df34bbb4202d591337ce069f'}, {
    url: '/svg/pint.svg',
    revision: 'b128807b5e6dedcd39842c0b2200ab6e'
  }, {url: '/svg/pizza-outline.svg', revision: '2be73cba3c88008594f9975329956422'}, {
    url: '/svg/pizza-sharp.svg',
    revision: '6443917737971c1e47c05bac14b09c6c'
  }, {url: '/svg/pizza.svg', revision: 'ef0616ba28eef8dc50e932f683c52cbf'}, {
    url: '/svg/planet-outline.svg',
    revision: '8d860868e4b96c25cfdc66838ce8fd86'
  }, {url: '/svg/planet-sharp.svg', revision: '68c438195a34d5df10262811e032c91e'}, {
    url: '/svg/planet.svg',
    revision: '45b6b7cb436bd49e5745a097330f3286'
  }, {
    url: '/svg/play-back-circle-outline.svg',
    revision: '95152bfc3037b4ae83269d1b27a547a6'
  }, {
    url: '/svg/play-back-circle-sharp.svg',
    revision: '0f605a2532c6d55eb62e8b114fc2e1a9'
  }, {
    url: '/svg/play-back-circle.svg',
    revision: '3900928a09404688c4b775387f710b26'
  }, {
    url: '/svg/play-back-outline.svg',
    revision: '20ecf5ccb5ea6b8835a427e06c6f9cb4'
  }, {url: '/svg/play-back-sharp.svg', revision: '3e369a064a004d05b21a543893d0e956'}, {
    url: '/svg/play-back.svg',
    revision: '4daa51ee06c7cdb0cd8e0b5512ca0355'
  }, {
    url: '/svg/play-circle-outline.svg',
    revision: '5d6c9b38741ca2bb55bbbd0ee737a60c'
  }, {url: '/svg/play-circle-sharp.svg', revision: 'cd6804de520594440176587525ee3674'}, {
    url: '/svg/play-circle.svg',
    revision: '1bdd932a0dae17749949dc77d4de6782'
  }, {
    url: '/svg/play-forward-circle-outline.svg',
    revision: 'bdcf9fb0d5aa8e4d425b9ad711459b88'
  }, {
    url: '/svg/play-forward-circle-sharp.svg',
    revision: '938bce69de9c03dd4f72c1ffcd5a4b4b'
  }, {
    url: '/svg/play-forward-circle.svg',
    revision: 'dc8f2e153455f2b8dac4220684cc6a3d'
  }, {
    url: '/svg/play-forward-outline.svg',
    revision: '65808bf999e3b219a33bbc3ef5a68e29'
  }, {url: '/svg/play-forward-sharp.svg', revision: '3f4aba0c65a178700666b9bed713424b'}, {
    url: '/svg/play-forward.svg',
    revision: '2d39ee8ac4e79aaa6818dc90f591af06'
  }, {url: '/svg/play-outline.svg', revision: '6b064c6b8b75fc87e3b43c5ca06c7224'}, {
    url: '/svg/play-sharp.svg',
    revision: '5323e0e5194a14690866073aa7507476'
  }, {
    url: '/svg/play-skip-back-circle-outline.svg',
    revision: '95084ae76a57964e9f01f6a3042e2e56'
  }, {
    url: '/svg/play-skip-back-circle-sharp.svg',
    revision: 'c42da9db07464b0d9b48d623b2223629'
  }, {
    url: '/svg/play-skip-back-circle.svg',
    revision: '03217f4b58baf3b756f5889848f528d7'
  }, {
    url: '/svg/play-skip-back-outline.svg',
    revision: '07c0dc30f3184765b3fd28dfb9c3c32b'
  }, {
    url: '/svg/play-skip-back-sharp.svg',
    revision: 'a08ecde33e60f27f6649755c6df73b98'
  }, {
    url: '/svg/play-skip-back.svg',
    revision: '09e68904b95f2c3a4b27c22d07b296a9'
  }, {
    url: '/svg/play-skip-forward-circle-outline.svg',
    revision: '86b1aee1ef26c7ed8e483e0b9776e02c'
  }, {
    url: '/svg/play-skip-forward-circle-sharp.svg',
    revision: '08b37f9a22d406cb77c5db70400030c1'
  }, {
    url: '/svg/play-skip-forward-circle.svg',
    revision: '2c0709a1f92ba52d3056e84729541a4e'
  }, {
    url: '/svg/play-skip-forward-outline.svg',
    revision: '598c7d1f615cd1e8b23e427bdb767fa7'
  }, {
    url: '/svg/play-skip-forward-sharp.svg',
    revision: 'f8ba46fe8e417f8fa9b235adbf3a96f5'
  }, {url: '/svg/play-skip-forward.svg', revision: 'bc4c49abcff31d916cdfeebc9c9df5e0'}, {
    url: '/svg/play.svg',
    revision: '3a1ec4338984251929a1d617a9e639c9'
  }, {url: '/svg/podium-outline.svg', revision: '07c70e7497a052d172b8ddb8b0027f37'}, {
    url: '/svg/podium-sharp.svg',
    revision: '47f73c90727040c13e6ffd80c7e033d7'
  }, {url: '/svg/podium.svg', revision: '5f097546650737aaeb1e25a445976746'}, {
    url: '/svg/power-outline.svg',
    revision: 'fe17f44a41f02736e5a4cd4edb98e7ea'
  }, {url: '/svg/power-sharp.svg', revision: 'f9bf0e3691d60db6f47a3490483cddd4'}, {
    url: '/svg/power.svg',
    revision: '42f275dcbe582b17421af4549948c561'
  }, {url: '/svg/pricetag-outline.svg', revision: 'e29c4204b7513d15bf4172469ae3272c'}, {
    url: '/svg/pricetag-sharp.svg',
    revision: '4c69b23483d49bd7559575840f8f2de3'
  }, {url: '/svg/pricetag.svg', revision: '3b04bc73e619fb1be6be818cda6e00b8'}, {
    url: '/svg/pricetags-outline.svg',
    revision: '6a5841d33914f51909e88bbf2e047892'
  }, {url: '/svg/pricetags-sharp.svg', revision: 'c43e787e0c2be4501abfc33c5b3f45ca'}, {
    url: '/svg/pricetags.svg',
    revision: 'ad5c580bdc88c681d9fb29ef12945d82'
  }, {url: '/svg/print-outline.svg', revision: '6d7c35cc38191e8e9ce3cea70a9bb5f6'}, {
    url: '/svg/print-sharp.svg',
    revision: 'acf211500231a5582f43863284688289'
  }, {url: '/svg/print.svg', revision: '4fbcfb572a91270bc3d06a8b8e2ef0ae'}, {
    url: '/svg/prism-outline.svg',
    revision: '0545f63ab8050e58135b4be029d60675'
  }, {url: '/svg/prism-sharp.svg', revision: '55335131f6ffd3f1a0fa7338ffbd51df'}, {
    url: '/svg/prism.svg',
    revision: '98879d471e66f093a970692cb3024f90'
  }, {url: '/svg/pulse-outline.svg', revision: 'f7a24ca16cb16b9599da99afe14b39fa'}, {
    url: '/svg/pulse-sharp.svg',
    revision: '2b06b12cc6daa9a947215ae04066de6d'
  }, {url: '/svg/pulse.svg', revision: 'ebd8a6056a913abf6e964f911f02d139'}, {
    url: '/svg/push-outline.svg',
    revision: 'c93167a1ed467616f2780b4fdfbc2945'
  }, {url: '/svg/push-sharp.svg', revision: '192e120decd98940ec02c67d50dd312f'}, {
    url: '/svg/push.svg',
    revision: 'd1c733b3d7a4809a4bc50c538375d942'
  }, {url: '/svg/qr-code-outline.svg', revision: '02053697391aab011b9a3e05f4df2f42'}, {
    url: '/svg/qr-code-sharp.svg',
    revision: 'b84f94dfed866d33d3a773953f0c5128'
  }, {url: '/svg/qr-code.svg', revision: 'c3f254de9c4421a99115dc831def44e2'}, {
    url: '/svg/radio-button-off-outline.svg',
    revision: '160d918b39de327b981f3ad674125fc8'
  }, {
    url: '/svg/radio-button-off-sharp.svg',
    revision: '160d918b39de327b981f3ad674125fc8'
  }, {
    url: '/svg/radio-button-off.svg',
    revision: '160d918b39de327b981f3ad674125fc8'
  }, {
    url: '/svg/radio-button-on-outline.svg',
    revision: 'fa6cc728687ebcd9c79fc9be1efd0bba'
  }, {
    url: '/svg/radio-button-on-sharp.svg',
    revision: 'fa6cc728687ebcd9c79fc9be1efd0bba'
  }, {url: '/svg/radio-button-on.svg', revision: 'fa6cc728687ebcd9c79fc9be1efd0bba'}, {
    url: '/svg/radio-outline.svg',
    revision: 'c0f8c3fd49f65bca67e07e023b4feea7'
  }, {url: '/svg/radio-sharp.svg', revision: '7c033b4a7887cada8a4198866929f8f9'}, {
    url: '/svg/radio.svg',
    revision: '4f6c23e89478a5608cbe2c9cbd172755'
  }, {url: '/svg/rainy-outline.svg', revision: 'b4c98949db545b50ba20edd3ee8448c5'}, {
    url: '/svg/rainy-sharp.svg',
    revision: 'd660899b124546dac073d705adac67e9'
  }, {url: '/svg/rainy.svg', revision: 'e843d79f1d4e0714dd904af73cc3dff0'}, {
    url: '/svg/reader-outline.svg',
    revision: '3587cfe4e6b30c86b43ccfff573effad'
  }, {url: '/svg/reader-sharp.svg', revision: 'f5df8ea8faa1ac833b2f8d010f2084ba'}, {
    url: '/svg/reader.svg',
    revision: 'f2eaa83ca960e1368e4a2e65a84c4715'
  }, {url: '/svg/receipt-outline.svg', revision: 'dc1e7054477de1c033bed58a3fddda4a'}, {
    url: '/svg/receipt-sharp.svg',
    revision: '1cb8fe15fa433440f175c31c64878d16'
  }, {url: '/svg/receipt.svg', revision: '2b9f2ffe48a87d1354c928941b5a9780'}, {
    url: '/svg/recording-outline.svg',
    revision: 'd59dff0ff8b421cc6a3dd7450794fb47'
  }, {url: '/svg/recording-sharp.svg', revision: '91a7d0434e7768acbf2a152134c2f5aa'}, {
    url: '/svg/recording.svg',
    revision: '4b6f9b878656eee592f495886fdc270b'
  }, {
    url: '/svg/refresh-circle-outline.svg',
    revision: 'd80839120b826f3149959217ebd97798'
  }, {
    url: '/svg/refresh-circle-sharp.svg',
    revision: '3b686e03452e3f9fd5071ec5a78e345f'
  }, {url: '/svg/refresh-circle.svg', revision: '73686cd216ff0aa1f66c627a9f701b55'}, {
    url: '/svg/refresh-outline.svg',
    revision: '8a2fdc4e262dc6b82b42ccec540ab6fb'
  }, {url: '/svg/refresh-sharp.svg', revision: '2b981f7d62d319534d131b0bfaff8502'}, {
    url: '/svg/refresh.svg',
    revision: '8a2fdc4e262dc6b82b42ccec540ab6fb'
  }, {
    url: '/svg/reload-circle-outline.svg',
    revision: 'f2d455b6a2fac82064448eb601b13212'
  }, {
    url: '/svg/reload-circle-sharp.svg',
    revision: '6dfc3e62ff8bd61bec624a34ee1d77c4'
  }, {url: '/svg/reload-circle.svg', revision: 'a0bfc5b72f99e98501b2fb4ee1c6b65b'}, {
    url: '/svg/reload-outline.svg',
    revision: '3f6ef9334d9f4c66b30d3b066b30fa38'
  }, {url: '/svg/reload-sharp.svg', revision: 'aaf024edfb3adbb2f6f0b563499dd531'}, {
    url: '/svg/reload.svg',
    revision: '3f6ef9334d9f4c66b30d3b066b30fa38'
  }, {
    url: '/svg/remove-circle-outline.svg',
    revision: '116f1f9e59c8809e0555a41b82542b50'
  }, {
    url: '/svg/remove-circle-sharp.svg',
    revision: '2f979c54972bfc083f9fd24d20cee45c'
  }, {url: '/svg/remove-circle.svg', revision: '94d4982c7b1b655ac2247b2890b9c2c2'}, {
    url: '/svg/remove-outline.svg',
    revision: '593ab1c5ad20fc880b07a68ea399e66f'
  }, {url: '/svg/remove-sharp.svg', revision: 'd399a5bbf05a6063e8e44a796e05a1ca'}, {
    url: '/svg/remove.svg',
    revision: '593ab1c5ad20fc880b07a68ea399e66f'
  }, {
    url: '/svg/reorder-four-outline.svg',
    revision: 'cf196db938614434103b267f7c15e6c7'
  }, {url: '/svg/reorder-four-sharp.svg', revision: '9696a6ac2467ccd5f98991eb25bf08af'}, {
    url: '/svg/reorder-four.svg',
    revision: '3d9a27c45096ea87a540254804b492bd'
  }, {
    url: '/svg/reorder-three-outline.svg',
    revision: '327dcf0bb3ebfe51399dada9769754a3'
  }, {
    url: '/svg/reorder-three-sharp.svg',
    revision: '5451091eb762691bd11035999b3f73fa'
  }, {
    url: '/svg/reorder-three.svg',
    revision: 'f152aadad05951eb707fad7b0bd067d2'
  }, {
    url: '/svg/reorder-two-outline.svg',
    revision: '61e53b995cb23f6b855b43db9fad55e7'
  }, {url: '/svg/reorder-two-sharp.svg', revision: 'b42dd72702552c5e72f8f725956d9a4e'}, {
    url: '/svg/reorder-two.svg',
    revision: 'e78e6ad2ad90ada0ff1b19f21da728c8'
  }, {url: '/svg/repeat-outline.svg', revision: 'ae20bd7533a182eb976012b58638ce2b'}, {
    url: '/svg/repeat-sharp.svg',
    revision: '341a9861f6dbb82037335c36db213241'
  }, {url: '/svg/repeat.svg', revision: 'ae20bd7533a182eb976012b58638ce2b'}, {
    url: '/svg/resize-outline.svg',
    revision: '961b17b40974716ecd9051ef302a4c20'
  }, {url: '/svg/resize-sharp.svg', revision: '0c6e72f96dbc999025b5140a89e735b8'}, {
    url: '/svg/resize.svg',
    revision: '961b17b40974716ecd9051ef302a4c20'
  }, {
    url: '/svg/restaurant-outline.svg',
    revision: 'deeb4e07dfcff0b47dd3a4a144bfd060'
  }, {url: '/svg/restaurant-sharp.svg', revision: '30eb8f879d4006c7e87080b485e46abd'}, {
    url: '/svg/restaurant.svg',
    revision: '810001d3cb9e4e64b50eab35ef5e21f2'
  }, {
    url: '/svg/return-down-back-outline.svg',
    revision: '3eed4160b61a6f6b34efdfc54db6582b'
  }, {
    url: '/svg/return-down-back-sharp.svg',
    revision: '90e0ddac5ecb58b809481757c8719c28'
  }, {
    url: '/svg/return-down-back.svg',
    revision: '3eed4160b61a6f6b34efdfc54db6582b'
  }, {
    url: '/svg/return-down-forward-outline.svg',
    revision: '47ccfa88c7fc5db0eba62cf5caa4949d'
  }, {
    url: '/svg/return-down-forward-sharp.svg',
    revision: '050d7d28ab029c5af7183ad1a7b734a1'
  }, {
    url: '/svg/return-down-forward.svg',
    revision: '47ccfa88c7fc5db0eba62cf5caa4949d'
  }, {
    url: '/svg/return-up-back-outline.svg',
    revision: '5549c72a905fa06baeac3f9936c2655c'
  }, {
    url: '/svg/return-up-back-sharp.svg',
    revision: '5df57314bc9b257bafc5c3408a346fbe'
  }, {
    url: '/svg/return-up-back.svg',
    revision: '5549c72a905fa06baeac3f9936c2655c'
  }, {
    url: '/svg/return-up-forward-outline.svg',
    revision: '3cc1a1a5244e48693c5a5d075bcdc11f'
  }, {
    url: '/svg/return-up-forward-sharp.svg',
    revision: '57ef1e64819662043ffff40847eade61'
  }, {url: '/svg/return-up-forward.svg', revision: '3cc1a1a5244e48693c5a5d075bcdc11f'}, {
    url: '/svg/ribbon-outline.svg',
    revision: '3ffcd6995be4bb05ac589ce61b5795e8'
  }, {url: '/svg/ribbon-sharp.svg', revision: '65c736321fd5803138be2aa4d152cb81'}, {
    url: '/svg/ribbon.svg',
    revision: 'b9c416231fcaa3a7c8f53d075a81725c'
  }, {url: '/svg/rocket-outline.svg', revision: 'cb1ec9ae7a50c93fd11f9421850ea316'}, {
    url: '/svg/rocket-sharp.svg',
    revision: '0f73cc7a1e07aa6727daa5a8d467da45'
  }, {url: '/svg/rocket.svg', revision: 'ce6e250cc7f46392b9aa0365de30a7e6'}, {
    url: '/svg/rose-outline.svg',
    revision: 'fd7feee61983af205085829c06c760f4'
  }, {url: '/svg/rose-sharp.svg', revision: '558e49b61cee98cc52a56c7db4ca1989'}, {
    url: '/svg/rose.svg',
    revision: 'e126ffca5bdd5de512b9083086e07575'
  }, {url: '/svg/sad-outline.svg', revision: '85b975060e9f71f5ab771847d89efe2f'}, {
    url: '/svg/sad-sharp.svg',
    revision: '163a45f9724ed7b77e11be364d65f61f'
  }, {url: '/svg/sad.svg', revision: '79071e1d2a615ab9316adad3e8fd80de'}, {
    url: '/svg/save-outline.svg',
    revision: 'b912015fece0043161e623b35f42d1ef'
  }, {url: '/svg/save-sharp.svg', revision: 'd5e98afb8263f8203d699f938b4fea97'}, {
    url: '/svg/save.svg',
    revision: '1a59b273dc64ac9bb482fe77524ac588'
  }, {url: '/svg/scale-outline.svg', revision: 'a6df31bcc8c72e14d34ca67941fb9124'}, {
    url: '/svg/scale-sharp.svg',
    revision: '0dc49d28da609e416f9911783e4984b7'
  }, {url: '/svg/scale.svg', revision: '7de9d07d85dbfc2292d7c3c4063979bd'}, {
    url: '/svg/scan-circle-outline.svg',
    revision: '9dc26480794594fe253a6889fc9f1ce7'
  }, {url: '/svg/scan-circle-sharp.svg', revision: 'c9fdddfa52c39616a25ca74fb6361c82'}, {
    url: '/svg/scan-circle.svg',
    revision: 'd721109b7fabca93e37e716228b808ee'
  }, {url: '/svg/scan-outline.svg', revision: 'aec1132404ed6b037ce653e8cbfcc92a'}, {
    url: '/svg/scan-sharp.svg',
    revision: 'e17741768b7b15864c289d67b6ea8395'
  }, {url: '/svg/scan.svg', revision: 'c7575b5eca2e31e9941835e13dd99298'}, {
    url: '/svg/school-outline.svg',
    revision: '84a8bcae911bcfc56120e9a635f8d592'
  }, {url: '/svg/school-sharp.svg', revision: '1fdc3d71e856905ebaea1f546e6fbbe9'}, {
    url: '/svg/school.svg',
    revision: '69babd599643e7accf0e9de195fd69e7'
  }, {
    url: '/svg/search-circle-outline.svg',
    revision: '512e364669132d214202fa781af4aea6'
  }, {
    url: '/svg/search-circle-sharp.svg',
    revision: '8e6362b20718ce2d28263952ee8249a2'
  }, {url: '/svg/search-circle.svg', revision: '13d90e3a61f599bf939d75a4c85afbbc'}, {
    url: '/svg/search-outline.svg',
    revision: '42adb11e0835160a9202d9c480e6c668'
  }, {url: '/svg/search-sharp.svg', revision: '7c14ad04595e36b146c41e378c0daf44'}, {
    url: '/svg/search.svg',
    revision: '504c152f9965f68a2d7ad84710cf0210'
  }, {url: '/svg/send-outline.svg', revision: '67bf652d36d4c362795b930083998a23'}, {
    url: '/svg/send-sharp.svg',
    revision: 'ec730c0a0d5cc41546befeaf216d146d'
  }, {url: '/svg/send.svg', revision: '863eff52db9a7862df1d0aedd08d9087'}, {
    url: '/svg/server-outline.svg',
    revision: 'b4ecc62f95d0f86a7cda48cc04245361'
  }, {url: '/svg/server-sharp.svg', revision: '2ee7e28f53c182c9369a58068fc94c32'}, {
    url: '/svg/server.svg',
    revision: 'c3a1e3f0eef67496e91bc02a0601341f'
  }, {url: '/svg/settings-outline.svg', revision: '805f02cc77929f99014f41dc1a007484'}, {
    url: '/svg/settings-sharp.svg',
    revision: '6919a3abc4e82eec030288d26abf7546'
  }, {url: '/svg/settings.svg', revision: '9ae7c2fcea89a07aec803352f066cf99'}, {
    url: '/svg/shapes-outline.svg',
    revision: 'f56cf17e2798dbeda96b51d7ea6dc5d4'
  }, {url: '/svg/shapes-sharp.svg', revision: '2c87be21fe67d6f0d5c1ef0dd2aa8af6'}, {
    url: '/svg/shapes.svg',
    revision: '52dbd57657efe2177ab0e109846d0442'
  }, {url: '/svg/share-outline.svg', revision: 'eae7923df076f6637fe8cd300f3ad2c7'}, {
    url: '/svg/share-sharp.svg',
    revision: '6b426b9eb46c1c49647d840b5d4ab31a'
  }, {
    url: '/svg/share-social-outline.svg',
    revision: 'dca694e39ec79ca9a91fd799c64974ff'
  }, {url: '/svg/share-social-sharp.svg', revision: '908811882bb7c18d65974d2189599ba0'}, {
    url: '/svg/share-social.svg',
    revision: 'dacbd97a67c75cc7f8aebf0c601a765f'
  }, {url: '/svg/share.svg', revision: '03e75f949b27d32e1457bd47ae62526b'}, {
    url: '/svg/shield-checkmark-outline.svg',
    revision: '14ae567c11a31363590bf71c9d91b11b'
  }, {
    url: '/svg/shield-checkmark-sharp.svg',
    revision: '5b5c4dd9dd7e7049284abf8fce275c36'
  }, {
    url: '/svg/shield-checkmark.svg',
    revision: 'b853a067d5e6af6bf7f945eb6c307128'
  }, {
    url: '/svg/shield-half-outline.svg',
    revision: '8d16eff4c5a97c4a057a206b93d454d3'
  }, {url: '/svg/shield-half-sharp.svg', revision: 'd490d04fb51ebf502af2f9632e63adc7'}, {
    url: '/svg/shield-half.svg',
    revision: '785c03fbc547b880c8f2a9e76aefbc1b'
  }, {url: '/svg/shield-outline.svg', revision: 'bd47dbc761176288d9c62346d630a98e'}, {
    url: '/svg/shield-sharp.svg',
    revision: '117a3e7a5a33a0c4ca054a5aef87a40c'
  }, {url: '/svg/shield.svg', revision: '4be02475c1feba957b1a68a126d2dc98'}, {
    url: '/svg/shirt-outline.svg',
    revision: '51b7bbeeb94e959aacdfa042c8843692'
  }, {url: '/svg/shirt-sharp.svg', revision: 'f319396c1a85347f4f958a2fa2d10be2'}, {
    url: '/svg/shirt.svg',
    revision: 'ccd1479c5308a3fa6844f37daba5fd1f'
  }, {url: '/svg/shuffle-outline.svg', revision: '002d9e3f8850963845e79a38b9f6adf1'}, {
    url: '/svg/shuffle-sharp.svg',
    revision: '322e6409d334ad3bea9aae37a9cd0e31'
  }, {url: '/svg/shuffle.svg', revision: '002d9e3f8850963845e79a38b9f6adf1'}, {
    url: '/svg/skull-outline.svg',
    revision: 'f4abd9674fa12bc23c1fe6112375377f'
  }, {url: '/svg/skull-sharp.svg', revision: 'c1dc2172432e48a78a9b7747e7cdbcec'}, {
    url: '/svg/skull.svg',
    revision: 'd8eede0365037fb255c56938624696f2'
  }, {url: '/svg/snow-outline.svg', revision: '782de47af4fc51925e200a004894072d'}, {
    url: '/svg/snow-sharp.svg',
    revision: '043556551ddedd258389a8e13e8bcc5e'
  }, {url: '/svg/snow.svg', revision: '1d792f4a19667e5b98803c9ef0ae707e'}, {
    url: '/svg/sparkles-outline.svg',
    revision: 'e2b1c9bd340cf1fbb14fcbca3f0a5b4a'
  }, {url: '/svg/sparkles-sharp.svg', revision: '045610936bf9207102667f8d8966ec15'}, {
    url: '/svg/sparkles.svg',
    revision: '327afb407b2b6e52f5250022a0f0738d'
  }, {
    url: '/svg/speedometer-outline.svg',
    revision: '07c60146165de1d009d828df2438c755'
  }, {url: '/svg/speedometer-sharp.svg', revision: '17df9b8f4063baa4d7e14a9a877b96d2'}, {
    url: '/svg/speedometer.svg',
    revision: '0bedcb56f6053b3238a0a61cab40fd8e'
  }, {url: '/svg/square-outline.svg', revision: '39d5f07063a7601615dafb53b1e5d4fd'}, {
    url: '/svg/square-sharp.svg',
    revision: '3d139d9e4f5e9283c070db1bfc079c90'
  }, {url: '/svg/square.svg', revision: '76ae6a66d7f06bc6e544cc3732c60789'}, {
    url: '/svg/star-half-outline.svg',
    revision: 'dc7cbb2261dedd23cad50ce8ef858063'
  }, {url: '/svg/star-half-sharp.svg', revision: '095b58777eca202feae4ed050476465f'}, {
    url: '/svg/star-half.svg',
    revision: 'dc7cbb2261dedd23cad50ce8ef858063'
  }, {url: '/svg/star-outline.svg', revision: '9547d8188c2ecef326de38167114a9b0'}, {
    url: '/svg/star-sharp.svg',
    revision: '3e29ef0fcd6d91a96db00e867e386381'
  }, {url: '/svg/star.svg', revision: 'e78042efbd18b8ee0395e0b67be28470'}, {
    url: '/svg/stats-chart-outline.svg',
    revision: 'bb6b40a9cc019ed0fefea23407c4d0cd'
  }, {url: '/svg/stats-chart-sharp.svg', revision: '3faf1648c2ee02e54ca95fd528f16bf3'}, {
    url: '/svg/stats-chart.svg',
    revision: '34b769f15ba38bbc54bfbea58917b420'
  }, {
    url: '/svg/stop-circle-outline.svg',
    revision: '83febed2b80d377b3584932d5486588e'
  }, {url: '/svg/stop-circle-sharp.svg', revision: '8af80c6bee504d928e25fed9a2bdd045'}, {
    url: '/svg/stop-circle.svg',
    revision: '30d51d7c51a88b09507aad158e07dc1b'
  }, {url: '/svg/stop-outline.svg', revision: '3705ae2dee2160d4a08b0f95f927fd8f'}, {
    url: '/svg/stop-sharp.svg',
    revision: '1290ecfd6bf92ce4ef70fae03b315126'
  }, {url: '/svg/stop.svg', revision: 'af0cfd6a1d2aa66b73609f8b6bde9b29'}, {
    url: '/svg/stopwatch-outline.svg',
    revision: '720c7e6513cd0e048e5b738ad39ce20c'
  }, {url: '/svg/stopwatch-sharp.svg', revision: 'e23e8ce8b79b74e5c3d39416f7c5ae65'}, {
    url: '/svg/stopwatch.svg',
    revision: '992a40f20422bdce14f48f3a4a8547fe'
  }, {
    url: '/svg/storefront-outline.svg',
    revision: '853b8dcd37025169cecd61176dc2d53a'
  }, {url: '/svg/storefront-sharp.svg', revision: 'ec9b1086b28ceb49e20077ece18fe0b5'}, {
    url: '/svg/storefront.svg',
    revision: 'dc973b1d3138b3e78d02b658f432d975'
  }, {url: '/svg/subway-outline.svg', revision: 'be91c079f6e7f3e201388d689a2d46e6'}, {
    url: '/svg/subway-sharp.svg',
    revision: 'a0dbef4df9e1b261957925477fef119d'
  }, {url: '/svg/subway.svg', revision: '24bde26e296a45d31e25bf691579d4c8'}, {
    url: '/svg/sunny-outline.svg',
    revision: 'c7a70852641306ce9d49b030279d3513'
  }, {url: '/svg/sunny-sharp.svg', revision: '8c5af14e0e88d910186ef0f7550b1475'}, {
    url: '/svg/sunny.svg',
    revision: 'a323ac56546fe07fb8a8a54d41edaaac'
  }, {
    url: '/svg/swap-horizontal-outline.svg',
    revision: '3ef0c6ade020d39197c3ea1c8175d4e9'
  }, {
    url: '/svg/swap-horizontal-sharp.svg',
    revision: '39021685a3a69a4da448d6db8a89058b'
  }, {
    url: '/svg/swap-horizontal.svg',
    revision: '3ef0c6ade020d39197c3ea1c8175d4e9'
  }, {
    url: '/svg/swap-vertical-outline.svg',
    revision: 'cee3ac57bde9ed1a54f553e35cf971b1'
  }, {
    url: '/svg/swap-vertical-sharp.svg',
    revision: 'a9bc43f98e365d70962a118051b3c4ce'
  }, {
    url: '/svg/swap-vertical.svg',
    revision: 'cee3ac57bde9ed1a54f553e35cf971b1'
  }, {
    url: '/svg/sync-circle-outline.svg',
    revision: '515066f2f7ca56d7241c7092444053fa'
  }, {url: '/svg/sync-circle-sharp.svg', revision: '9110730d4e37967efed5f7ae2dca81c6'}, {
    url: '/svg/sync-circle.svg',
    revision: '6699db1468ee00c97c5f5ed4962d7d0a'
  }, {url: '/svg/sync-outline.svg', revision: '443591e7b18f63bfe121298410393596'}, {
    url: '/svg/sync-sharp.svg',
    revision: '169a554dde1fb2b2cb52119b8fd84c1e'
  }, {url: '/svg/sync.svg', revision: '443591e7b18f63bfe121298410393596'}, {
    url: '/svg/tablet-landscape-outline.svg',
    revision: 'f0a08e0be6227f5f843081a4c4e253e8'
  }, {
    url: '/svg/tablet-landscape-sharp.svg',
    revision: 'ecf7b17acd80c8b1070a38458a5a7abd'
  }, {
    url: '/svg/tablet-landscape.svg',
    revision: 'cef844c1c116e15c8db7371738e7da8a'
  }, {
    url: '/svg/tablet-portrait-outline.svg',
    revision: '1db1a2a73e69ad11ccd4652d16da5f4e'
  }, {
    url: '/svg/tablet-portrait-sharp.svg',
    revision: 'ad7e5d24fb1404559e1c915be33d4be7'
  }, {
    url: '/svg/tablet-portrait.svg',
    revision: 'd1e68abecd02074c88d290a5f5424a26'
  }, {
    url: '/svg/telescope-outline.svg',
    revision: '5739e6843e35528c73102d3b9195633e'
  }, {url: '/svg/telescope-sharp.svg', revision: 'b6e47af37e2dd058bafc8cf37344fd16'}, {
    url: '/svg/telescope.svg',
    revision: '02c9e8c8ce4cb40db5dfa19507f2bc92'
  }, {
    url: '/svg/tennisball-outline.svg',
    revision: 'c6c0c0bceb0627a76ddc5b8b0df2942f'
  }, {url: '/svg/tennisball-sharp.svg', revision: '0bdc92c8ae7474d2bb33f5a139be53ca'}, {
    url: '/svg/tennisball.svg',
    revision: 'a6f4cd766fa2bb156921b3a04ec6f9bb'
  }, {url: '/svg/terminal-outline.svg', revision: '3f6ea8759d475a4f1c215bcd9f0de302'}, {
    url: '/svg/terminal-sharp.svg',
    revision: '2e046b23d8a83595809e08dfc2de62eb'
  }, {url: '/svg/terminal.svg', revision: 'fe15a290f3f2dd31006dd8e36a31e934'}, {
    url: '/svg/text-outline.svg',
    revision: '3f9bb2b64c0b21bfb329c0ee7b5b5f85'
  }, {url: '/svg/text-sharp.svg', revision: 'f7a1480c3f621652592f685027db4459'}, {
    url: '/svg/text.svg',
    revision: '82346731a62659b8cc3fb1f784b0b0ff'
  }, {
    url: '/svg/thermometer-outline.svg',
    revision: 'd33648bba20273f0599ccceb33938b78'
  }, {url: '/svg/thermometer-sharp.svg', revision: '97be6eff30f44ab79be839e2c71a7f89'}, {
    url: '/svg/thermometer.svg',
    revision: '93d5fd8194c19df421bdb43d52d7d68e'
  }, {
    url: '/svg/thumbs-down-outline.svg',
    revision: 'f03c2e1507cfedebed720e7f4426bbfd'
  }, {url: '/svg/thumbs-down-sharp.svg', revision: 'bf04e85eaef1c27886bbe549682fa26a'}, {
    url: '/svg/thumbs-down.svg',
    revision: 'cd7c9750cb2991f792557615a243f39a'
  }, {
    url: '/svg/thumbs-up-outline.svg',
    revision: 'a8ed19b568de70f2d29e5d1caad222a5'
  }, {url: '/svg/thumbs-up-sharp.svg', revision: '6863d105ba18c29684e028ffbbcfcc82'}, {
    url: '/svg/thumbs-up.svg',
    revision: 'b8c34913edf000ac22cd0e70e2874429'
  }, {
    url: '/svg/thunderstorm-outline.svg',
    revision: '7a97cbfaabb0bf573345e4540daa7e62'
  }, {url: '/svg/thunderstorm-sharp.svg', revision: '823f04eae4f04282f098f44e2f327377'}, {
    url: '/svg/thunderstorm.svg',
    revision: 'c5a67cf5ce3a0e914545749a3e64adf0'
  }, {url: '/svg/ticket-outline.svg', revision: '60710048b71f89c06cd8a1dd6e25b4de'}, {
    url: '/svg/ticket-sharp.svg',
    revision: 'd37281c11e40c386b82eca8a38c3f56b'
  }, {url: '/svg/ticket.svg', revision: '9b469f4bb036291989a635dca24e06ac'}, {
    url: '/svg/time-outline.svg',
    revision: '085aafd5dc5efc134f87972294ad9d42'
  }, {url: '/svg/time-sharp.svg', revision: 'd64ab140efdfe228140ca53955f08aae'}, {
    url: '/svg/time.svg',
    revision: 'e5bf26075c368a181863586740a5bb7c'
  }, {url: '/svg/timer-outline.svg', revision: '29923ee367cb2fb050c565fcb372ccdf'}, {
    url: '/svg/timer-sharp.svg',
    revision: 'c8cfeac1de18ff361df20503516317e2'
  }, {url: '/svg/timer.svg', revision: '7b15c9d7e46a1ab19d78f5761728ec13'}, {
    url: '/svg/today-outline.svg',
    revision: '6147248bc79a39fbd32aa979c3b48bab'
  }, {url: '/svg/today-sharp.svg', revision: '6852fde3ead988581e5c0ef7230b80e6'}, {
    url: '/svg/today.svg',
    revision: '0eeacf646892d70b4c4116f6d26c3eb4'
  }, {url: '/svg/toggle-outline.svg', revision: 'fbffffd5d086b70d4507d26d5f916831'}, {
    url: '/svg/toggle-sharp.svg',
    revision: '68b63785e337dc7d2a9e144082dabe88'
  }, {url: '/svg/toggle.svg', revision: 'e787d1fbe46cacf77ac717df6d5e2016'}, {
    url: '/svg/trail-sign-outline.svg',
    revision: '4de58b14feb7d149e5a05f9c92746bda'
  }, {url: '/svg/trail-sign-sharp.svg', revision: '1c3b8a13caaaaa111b837b081cc65343'}, {
    url: '/svg/trail-sign.svg',
    revision: '6d6a9afa89af46d0384716b0147c7f65'
  }, {url: '/svg/train-outline.svg', revision: 'eb34605cce592c1db045febdbfe90005'}, {
    url: '/svg/train-sharp.svg',
    revision: '83c64b34249d00d45e3a377617f13a87'
  }, {url: '/svg/train.svg', revision: 'aab81df212a130d8a251ec476b20c348'}, {
    url: '/svg/transgender-outline.svg',
    revision: '2fa2cc56b1228270bb687bb2b2fce24f'
  }, {url: '/svg/transgender-sharp.svg', revision: '550fd25cd8936352625760f4d5608e16'}, {
    url: '/svg/transgender.svg',
    revision: 'd017052add37c41d91924c0696a0bc96'
  }, {
    url: '/svg/trash-bin-outline.svg',
    revision: '7d5d0787707c2c7531e65e11df0abf8b'
  }, {url: '/svg/trash-bin-sharp.svg', revision: '183c30f7d20bfac741f3067e6b892d46'}, {
    url: '/svg/trash-bin.svg',
    revision: '31995630ce07bedc49be60bcdadaceb0'
  }, {url: '/svg/trash-outline.svg', revision: '2d8d7a97448bc6afd613a684d43694ee'}, {
    url: '/svg/trash-sharp.svg',
    revision: '61f1ff722fbcd9cf80b126c9f77cc426'
  }, {url: '/svg/trash.svg', revision: '1c45b8adb5e36318f93df4a68e5181b4'}, {
    url: '/svg/trending-down-outline.svg',
    revision: 'c8bc5283926caa37584be45f9a3e7b49'
  }, {
    url: '/svg/trending-down-sharp.svg',
    revision: '8e32a47b5c377ff5aa284157a5be87d7'
  }, {
    url: '/svg/trending-down.svg',
    revision: 'c8bc5283926caa37584be45f9a3e7b49'
  }, {
    url: '/svg/trending-up-outline.svg',
    revision: '6f08ab53118d0127049a657d575d26ff'
  }, {url: '/svg/trending-up-sharp.svg', revision: '2f1939e1caa714d9f209ad6d4fe352f4'}, {
    url: '/svg/trending-up.svg',
    revision: '6f08ab53118d0127049a657d575d26ff'
  }, {url: '/svg/triangle-outline.svg', revision: '6b0cf6422f124032d95af62da34752ba'}, {
    url: '/svg/triangle-sharp.svg',
    revision: '689ea765674e7b74430270af74884695'
  }, {url: '/svg/triangle.svg', revision: '2050d5df3be72f382e63b3543bf0290f'}, {
    url: '/svg/trophy-outline.svg',
    revision: '63ff71aa5851fd22530481a314672b8e'
  }, {url: '/svg/trophy-sharp.svg', revision: 'd4e6163d35a5b7cc086e4918e6c7d803'}, {
    url: '/svg/trophy.svg',
    revision: 'f26ab8e9c7d660955d0d016c287449de'
  }, {url: '/svg/tv-outline.svg', revision: '0d37fea56f84253500fa5240222a2771'}, {
    url: '/svg/tv-sharp.svg',
    revision: 'd86c4feaad5cb5ed154f02acc4e25967'
  }, {url: '/svg/tv.svg', revision: '752ef21a2b79e1a99232a5dc685111d0'}, {
    url: '/svg/umbrella-outline.svg',
    revision: '2c8610d13b0b95fd1e12858fc18d5ef8'
  }, {url: '/svg/umbrella-sharp.svg', revision: '41943c0e6c9565523c3bc92cda8403d6'}, {
    url: '/svg/umbrella.svg',
    revision: '05441c7d560cfa34ba3d60a3ed463fd2'
  }, {url: '/svg/unlink-outline.svg', revision: '47da56f1e735ac0d57d1c42537efc035'}, {
    url: '/svg/unlink-sharp.svg',
    revision: '569f3ad47492ccbae49d85217dbbdd30'
  }, {url: '/svg/unlink.svg', revision: '24c058cd8ddbf9b9bfa9bcce099a9edd'}, {
    url: '/svg/videocam-off-outline.svg',
    revision: '324b336bfee3a136af2ef6fee5f3ccf8'
  }, {url: '/svg/videocam-off-sharp.svg', revision: '150b5a11ef4a70c0f156206c172397dd'}, {
    url: '/svg/videocam-off.svg',
    revision: 'a8aac7a0a9e2af91cb0f7ab304523f71'
  }, {url: '/svg/videocam-outline.svg', revision: 'cae53e06aee15de928e886db53a94011'}, {
    url: '/svg/videocam-sharp.svg',
    revision: '1297f06b8d76b874c91e8b0970e7fc18'
  }, {url: '/svg/videocam.svg', revision: 'cc96f13564aa4180a5cc489980278d69'}, {
    url: '/svg/volume-high-outline.svg',
    revision: '1e5cf31ab4a3580c7ef9224c6a518279'
  }, {url: '/svg/volume-high-sharp.svg', revision: '7e99d77fff03a569f55f645ba9c2e31b'}, {
    url: '/svg/volume-high.svg',
    revision: '4bffb483395c2e943703c94d8fe8a257'
  }, {
    url: '/svg/volume-low-outline.svg',
    revision: 'ca2d919bd73e62967ef42d5b09d724da'
  }, {url: '/svg/volume-low-sharp.svg', revision: '8c137902919c912ec1bc7636dc2147ad'}, {
    url: '/svg/volume-low.svg',
    revision: 'fa6062d5673de6fe102e75dbaa27e99d'
  }, {
    url: '/svg/volume-medium-outline.svg',
    revision: '892ee2dcf142072251aafb59b2931d6e'
  }, {
    url: '/svg/volume-medium-sharp.svg',
    revision: '7b6b1da7eabf8b53bd6dc2f4effc130d'
  }, {
    url: '/svg/volume-medium.svg',
    revision: '2a98636968d754ef878fd583a0cca5d4'
  }, {
    url: '/svg/volume-mute-outline.svg',
    revision: 'cea00543f8a78609495007fba5adf738'
  }, {url: '/svg/volume-mute-sharp.svg', revision: 'c3eb048e85ed3ed1f92f8e5a8d2c28a6'}, {
    url: '/svg/volume-mute.svg',
    revision: 'd0102632ca43f5686b9b62736814c9b6'
  }, {
    url: '/svg/volume-off-outline.svg',
    revision: 'eb9dff5b07b09f0c9c82cee8f18532d5'
  }, {url: '/svg/volume-off-sharp.svg', revision: '99b37af3e791968da990fb4a012f382b'}, {
    url: '/svg/volume-off.svg',
    revision: '66b202a9c5aada840cd3d85db820648a'
  }, {url: '/svg/walk-outline.svg', revision: '44773f72ecadfe9bc229001f4726b2f7'}, {
    url: '/svg/walk-sharp.svg',
    revision: '6ba1c31a71830ebc274edb714a76e5da'
  }, {url: '/svg/walk.svg', revision: 'e03d7a96e184a3196b3025ba6104bbd8'}, {
    url: '/svg/wallet-outline.svg',
    revision: '23ec8d6823a58ee88f60609f278d899d'
  }, {url: '/svg/wallet-sharp.svg', revision: '6e34020585ccc25399890911d39fd61b'}, {
    url: '/svg/wallet.svg',
    revision: '331a59817e6550414da8c70f28486d09'
  }, {url: '/svg/warning-outline.svg', revision: '031f9ab9d03f00ab6e229d13354db68f'}, {
    url: '/svg/warning-sharp.svg',
    revision: 'ce40375ce4c01a622dad34c8a39dd6d7'
  }, {url: '/svg/warning.svg', revision: '7be81e4ebb1258fd50d222aec8b960cd'}, {
    url: '/svg/watch-outline.svg',
    revision: 'bc9f30bca7eafc8e195472c28d0ccf00'
  }, {url: '/svg/watch-sharp.svg', revision: '0451d4ab500fec03832148003874f2c0'}, {
    url: '/svg/watch.svg',
    revision: '04bbe6c150430ebb2e912eb219665a18'
  }, {url: '/svg/water-outline.svg', revision: '724e94465f822afc728568e6b92b6e30'}, {
    url: '/svg/water-sharp.svg',
    revision: '927dc728eb3f46e3facbb9063589dbf0'
  }, {url: '/svg/water.svg', revision: '3ef8018651ab2a987f097c3fd6018855'}, {
    url: '/svg/wifi-outline.svg',
    revision: '5a4dc73faa219b7d7285865c3d16f17f'
  }, {url: '/svg/wifi-sharp.svg', revision: '26f7c1ef8a98e86a657ce23dc4e8be2d'}, {
    url: '/svg/wifi.svg',
    revision: '01b35f1d11bc60ef07abed103b2368a1'
  }, {url: '/svg/wine-outline.svg', revision: 'df22f52e51ad04d75450cb7b74a1b177'}, {
    url: '/svg/wine-sharp.svg',
    revision: '3e30def9b3055189d65d5b9be6958b06'
  }, {url: '/svg/wine.svg', revision: '892c1df7c45c8824d817c96a3f313a0e'}, {
    url: '/svg/woman-outline.svg',
    revision: '6ec89a4d85e02d820b8731aa55cc87f5'
  }, {url: '/svg/woman-sharp.svg', revision: '3865958ba9ea792b67d3f5c8a4fa74fa'}, {
    url: '/svg/woman.svg',
    revision: 'e5e8274f8fe603091609f95c12e9a365'
  }, {
    url: '/vercel.svg',
    revision: '4b4f1876502eb6721764637fe5c41702'
  }], {ignoreURLParametersMatching: []}), e.cleanupOutdatedCaches(), e.registerRoute('/', new e.NetworkFirst({
    cacheName: 'start-url',
    plugins: [{
      cacheWillUpdate: async ({
                                request: e,
                                response: s,
                                event: r,
                                state: a
                              }) => s && 'opaqueredirect' === s.type ? new Response(s.body, {
        status: 200,
        statusText: 'OK',
        headers: s.headers
      }) : s
    }]
  }), 'GET'), e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new e.CacheFirst({
    cacheName: 'google-fonts',
    plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-image-assets',
    plugins: [new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\.(?:mp3|mp4)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-media-assets',
    plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
    cacheName: 'static-data-assets',
    plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/\/api\/.*$/i, new e.NetworkFirst({
    cacheName: 'apis',
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET'), e.registerRoute(/.*/i, new e.NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]
  }), 'GET')
}));
