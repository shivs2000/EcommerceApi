# EcommerceApi

ER -DIAGRAM 
![updated er diagram](https://user-images.githubusercontent.com/43001208/126680984-8e8b78d1-934d-4cd2-81a0-3cfb2a669236.png)

CONTROLLERS FOR ADMIN
1)viewOrder=>for viewing orders made by Users
2)adminLogin
3)adminRegistration
4)adminLogout
5)confirmOrder=>for changing status of orders by users
6)postProduct =>this is for uploading new products
7)getProducts




CONTROLLERS FOR USER
1)login
2)signUp
3)getOrders
4)getProducts
5)getUser
6)postOrder
7)logout



QUERIES(DONE IN VSCODE TEST CLIENT )

1)FOR ADDING PRODUCT=>

POST http://localhost:3000/postProducts
content-type: application/json

{
    "name": "addmin1",
    "product":{
        "productType":"Food",
        "available":"12",
        "price":"25",
        "discount":"5",
        "productName":"maggi"

    }
    
    
}


2)FOR ADMIN REGISTRATION

POST http://localhost:3000/adminRegistration
content-type: application/json

{
    "name": "addmin1",
    "email":"NJDJ@gmaail.com",
    "password":"12asdsd33"
}

3) ADMIN LOGIN

POST http://localhost:3000/adminLogin
content-type: application/json

{
    "name": "addmin1",
    "password":"12asdsd33"

    
    
}

    
 4) GET PRODUCTS
GET http://localhost:3000/getProducts
content-type: application/json

{
    
    
}
5) USER REGISTRATION
POST http://localhost:3000/signUP
content-type: application/json

{
    "name": "user1",
    "email":"NJDJ@gmaail.com",
    "password":"12asdsd33" ,
    "address":"h-12,vasant vihar,mumbai" 
    
}
6)LOGIN USER
POST http://localhost:3000/login
content-type: application/json

{
    "name": "user1",
    
    "password":"12asdsd33" 
    
    
}


  


