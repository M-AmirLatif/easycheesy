async function test() {
  const res = await fetch('http://127.0.0.1:3000');
  const html = await res.text();
  const cssMatches = html.match(/href="(\/_next\/static\/css\/[^"]+\.css)"/g) || [];
  console.log('CSS matches:', cssMatches);
  for (const m of cssMatches) {
    const url = m.match(/"([^"]+)"/)[1];
    const cssRes = await fetch('http://127.0.0.1:3000' + url);
    console.log(url, 'status:', cssRes.status, 'size:', cssRes.headers.get('content-length'));
  }
}
test();
