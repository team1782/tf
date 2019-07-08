# -*- coding: utf-8 -*-
"""
Created on Wed Jun 19 14:50:23 2019

@author: snghj
"""

#TOILET WEB SCRAPING

#importing necessary packages
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

#opening up connection, grabbing the page
my_url = 'https://www.toilet.org.sg/loomapdirectory'
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")
page_soup = page_soup.body

#csv
filename = "sgtoilets.csv"
f = open(filename, "w")
headers = "Place,Name,Address\n"
f.write(headers)

#traversing the data
page_soup = page_soup.find("div", {"class":"main-container"})
page_soup = page_soup.find("section",{"class":"text-center space--xxs"})
page_soup = page_soup.div.div.div.div.ul.li
page_soup = page_soup.find("div",{"class":"tab__content"})
page_soup = page_soup.table.tbody
containers = page_soup.findAll("tr")

for container in containers:
    place = container.contents[1].text
    name = container.contents[3].text
    address = container.contents[5].text
    f.write(place + "," + name.replace(","," ") + "," + address.replace(","," ")+ "\n")

page_soup = soup(page_html, "html.parser")
page_soup = page_soup.body

page_soup = page_soup.find("div", {"class":"main-container"})
page_soup = page_soup.find("section",{"class":"text-center space--xxs"})
page_soup = page_soup.div.div.div.div.ul.contents[3]
page_soup = page_soup.find("div",{"class":"tab__content"})
page_soup = page_soup.table.tbody
containers = page_soup.findAll("tr")

for container in containers:
    place = container.contents[1].text
    name = container.contents[3].text
    address = container.contents[5].text
    f.write(place + "," + name.replace(","," ") + "," + address.replace(","," ")+ "\n")

page_soup = soup(page_html, "html.parser")
page_soup = page_soup.body

page_soup = page_soup.find("div", {"class":"main-container"})
page_soup = page_soup.find("section",{"class":"text-center space--xxs"})
page_soup = page_soup.div.div.div.div.ul.contents[5]
page_soup = page_soup.find("div",{"class":"tab__content"})
page_soup = page_soup.table.tbody
containers = page_soup.findAll("tr")

for container in containers:
    place = container.contents[1].text
    name = container.contents[3].text
    address = container.contents[5].text
    f.write(place + "," + name.replace(","," ") + "," + address.replace(","," ")+ "\n")

page_soup = soup(page_html, "html.parser")
page_soup = page_soup.body

page_soup = page_soup.find("div", {"class":"main-container"})
page_soup = page_soup.find("section",{"class":"text-center space--xxs"})
page_soup = page_soup.div.div.div.div.ul.contents[7]
page_soup = page_soup.find("div",{"class":"tab__content"})
page_soup = page_soup.table.tbody
containers = page_soup.findAll("tr")

for container in containers:
    place = container.contents[1].text
    name = container.contents[3].text
    address = container.contents[5].text
    f.write(place + "," + name.replace(","," ") + "," + address.replace(","," ")+ "\n")

page_soup = soup(page_html, "html.parser")
page_soup = page_soup.body

page_soup = page_soup.find("div", {"class":"main-container"})
page_soup = page_soup.find("section",{"class":"text-center space--xxs"})
page_soup = page_soup.div.div.div.div.ul.contents[9]
page_soup = page_soup.find("div",{"class":"tab__content"})
page_soup = page_soup.table.tbody
containers = page_soup.findAll("tr")

for container in containers:
    place = container.contents[1].text
    name = container.contents[3].text
    address = container.contents[5].text
    f.write(place + "," + name.replace(","," ") + "," + address.replace(","," ")+ "\n")


f.close()