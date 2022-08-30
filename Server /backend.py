from urllib import response
from pymongo import MongoClient

from fastapi import FastAPI, status
from pydantic import BaseModel
from typing import List

DB = "Products_Data"
IPHONE_COLLECTION = "Iphone"

app = FastAPI()


client=MongoClient('localHost',27017)




app = FastAPI()


@app.get("/products/{collection}", response_model=list)
def get_Products(collection:str):
    """"gets All products"""
    products_collection = client[DB][collection]
    msg_list = products_collection.find({},{'_id':0})
    movie_title_list = []
    for msg in msg_list:
        movie_title_list.append(msg)
    return movie_title_list


@app.get("/products/{collection}/{ref}",response_model=dict)
def get_Product(collection:str,ref:str):
    products_collection = client[DB][collection]
    msg_list = products_collection.find_one({'Reference':ref},{'_id':0})
    return msg_list