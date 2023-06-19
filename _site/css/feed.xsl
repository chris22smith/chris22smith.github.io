<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style>
          body { font-family: sans-serif; line-height: 1.5; }
          header, footer, main { display: block; margin: 2rem; }
          a, a:link, a:visited { color: #07d; }
          h1 { margin-block-end: 0; }
          ol { padding: 0; }
          li { display: block; list-style: none; margin: 1rem 0; }
          li > a { display: block; }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
          <a target="_blank">
            <xsl:attribute name="href">
              <xsl:value-of select="/rss/channel/link"/>
            </xsl:attribute>
            Visit Website &#x2192;
          </a>
        </header>
        <main>
          <ol>
            <xsl:for-each select="/rss/channel/item">
              <li>
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
                <span><xsl:value-of select="pubDate" /></span>
              </li>
            </xsl:for-each>
          </ol>
        </main>
        <footer>
        <a target="_blank">
            <xsl:attribute name="href">
              <xsl:value-of select="/rss/channel/link"/>
            </xsl:attribute>
            Visit Website &#x2192;
          </a>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
