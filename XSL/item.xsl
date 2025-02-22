<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <head>
        <title>Cart for Items</title>
    </head>
    <body>
        <table border="1">
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            <xsl:for-each select="cart/item">
                <xsl:sort select="price"/>
                <xsl:if test="qty != 0">
                    <xsl:choose>
                        <xsl:when test="price &gt; 30">
                            <tr bgcolor="red">
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <td><xsl:value-of select="qty"/></td>
                            </tr>
                        </xsl:when>
                        <xsl:otherwise>
                            <tr bgcolor="green">
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <td><xsl:value-of select="qty"/></td>
                            </tr>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:if>
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>