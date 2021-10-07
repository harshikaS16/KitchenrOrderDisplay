# KitchenOrderDisplay

This project is a POC for use case of a restaurant. The restaurant receives a daily prediction of sales numbers, to help them pre-prep the food before usual rush. It lets them decide how much of each raw material needs to be in ready state. The application displays these numbers in a simple report that is accessible via browser but that can also be displayed on a large screen in the kitchen. For every order that is created, workers mark it as “done” on the kitchen display which automatically increases “created-till-now” column for that product

# Sample Display
| Name  | Quantity  | Created-till-now  | Predicted    | Status  |
| ------------- | ------------- |------------- | ------------- |------------- |
| Green Chilli Pork    | 1  | 14  | 123  | DONE (button)  |
| Fried Avocado Taco  | 2  | 23  | 456  | DONE (button)  |


# Sample Report

| Dish  | Produced  | Predicted    |
| ------------- | ------------- |------------- |
| Green Chilli Pork    | 17  | 123  |
| Fried Avocado Taco  | 38  | 456  |
| Grand Burrito     | 21  | 1230  |
| Chips & Guacamole  | 67  | 1435  |
