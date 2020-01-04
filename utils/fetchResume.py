#!/usr/bin/python
# -*- coding: UTF-8 -*-
import requests
import cgitb
cgitb.enable()
try:
    response = requests.get("https://www.googleapis.com/drive/v3/files/1qD3DCz9i9haYFJrhTo1PWMKkLrU_HrwvKFIJIpHGM-8/export?mimeType=application/pdf&alt=media&key=AIzaSyCs4MmAnOdLo7GHtVdn7UmmpfOOZz7Yg28")
    resumeBytes = response.content
    F = open("/var/www/html/Resume.pdf", "wb")
    F.write(resumeBytes)
    F.close()
    print "Status: 200 OK"
    print "Content-Type: text/plain;charset=utf-8"
    print
    print "OK"
except Exception as e:

    print "Status: 500 Internal Server Error"
    print "Content-Type: text/plain;charset=utf-8"
    print
    print e