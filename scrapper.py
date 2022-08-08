from bs4 import BeautifulSoup
import requests
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from pymongo import MongoClient

client=MongoClient()
client=MongoClient('localHost',27017)
db=client.Products_Data
DataList=[]
#######################################################
#######################################################
driver=webdriver.Chrome('C:\SeleniumDrivers\chromedriver.exe')
list_of_links=['/informatique/ordinateur_portable/pc_portable']
for link in list_of_links:
    driver.get('https://www.mega.tn{}'.format(link))
    time.sleep(3)
    previous_height=driver.execute_script('return document.body.scrollHeight')
    while True:
        driver.execute_script('window.scrollTo(0,document.body.scrollHeight);')
        new_height=driver.execute_script('return document.body.scrollHeight')
        if new_height == previous_height:
            break
        else :
            time.sleep(10)
            break
    time.sleep(30)
    body=driver.find_element(By.TAG_NAME,"body").get_attribute("outerHTML")
########################################################
########################################################
    html_text = body
    soup= BeautifulSoup(html_text,'lxml')
    products=soup.find_all('div',class_='product-item product-item-holder')
    for product in products:
        datadict={}
        product_name=product.find('div',class_='title').text
        reference=product.find('div',class_='brand').text
        specs=product.find('span',class_='cl_desc').text
        image=product.find('div',class_='image').img['src']
        product_link=product.find('div',class_='title').a['href']
        def offre_disponible(product_link):
            offres_list=[]
            product_html_text=requests.get(product_link).text
            sp= BeautifulSoup(product_html_text,'lxml')
            offres=sp.find_all('li',class_='productOffers-listItem row row-24 row-24-mobile')
            for offre in offres:
                offre_dict={}
                offre_prix=offre.find('div',class_='centerofferdiv productOffers-listItemOffer small-8 medium-8 large-2 xlarge-4 columns').a.text
                date_maj=offre.find('a',class_='datemajstore').text
                logo_link=offre.find('div',class_='centerofferdiv centerdivmob logomob2 small-8 medium-8 large-2 xlarge-3 columns xlarge-text-left large-text-center small-text-right productOffers-listItemOfferShopBlock va-middle-xlarge-up').img['src']
                product_link=offre.find('div',class_='centerdivmob productOffers-listItemOfferDetailsMobile medium-8 offerbuttondiv hide-for-large').a['href']
                offre_dict['Price']=offre_prix
                offre_dict['Last-update']=date_maj.replace('*','')
                offre_dict['Store']=logo_link
                offre_dict['product-link']=product_link
                offres_list.append(offre_dict)
            return offres_list
        datadict["Name"]=product_name.replace('\n','')
        datadict["Reference"]=reference
        datadict["type"]=link
        datadict["Specs"]=specs
        datadict["Image"]=image
        datadict["Offres"]=offre_disponible(product_link)
#      DataList.append(datadict)
        db.pc_portable.insert_one(datadict)
    
print("finished ")








        
