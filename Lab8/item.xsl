<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/items">
        <html>
            <head>
                <title>Products List (Price &lt; 300 Rs)</title>
            </head>
            <body>
                <h2>Products with Price Less than 300 Rs</h2>
                <table border="1">
                    <tr>
                        <th>Product Name</th>
                        <th>Price (Rs)</th>
                    </tr>
                    <xsl:for-each select="item[price &lt; 300]">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="price"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
