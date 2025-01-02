import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en ">
      <Head />
      <script id="Cookiebot" 
      src="https://consent.cookiebot.com/uc.js" data-cbid="5cb7ed96-1c1b-4269-99ed-69b402f97049" data-blockingmode="auto" type="text/javascript">
      </script>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
