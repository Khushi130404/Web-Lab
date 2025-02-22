<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Cricket Players</title>
                <style>
                    table {
                        width: 50%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 10px;
                        text-align: center;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h2>Cricket Players Statistics</h2>
                <table>
                    <tr>
                        <th>Player Name</th>
                        <th>Bowling Average</th>
                        <th>Highest Score</th>
                    </tr>
                    <xsl:for-each select="cricket/player">
                        <tr>
                            <td><xsl:value-of select="player_name"/></td>
                            <td><xsl:value-of select="balling_avg"/></td>
                            <td><xsl:value-of select="highest_score"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
