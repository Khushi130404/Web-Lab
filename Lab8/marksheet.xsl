<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>Semester Mark Sheet</title>
                <style>
                    table {
                        width: 60%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Semester Mark Sheet</h1>
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Marks Obtained</th>
                        <th>Max Marks</th>
                    </tr>
                    <xsl:for-each select="marksheet/student/subjects/subject">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="marks"/></td>
                            <td><xsl:value-of select="max_marks"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                <p><strong>Student Name:</strong> <xsl:value-of select="marksheet/student/name"/></p>
                <p><strong>Roll Number:</strong> <xsl:value-of select="marksheet/student/roll_number"/></p>
                <p><strong>Semester:</strong> <xsl:value-of select="marksheet/student/semester"/></p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
