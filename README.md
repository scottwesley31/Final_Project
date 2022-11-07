# Launch-It
A machine learning app to predict success in a business from the time of an IPO.

## What business would you like to start?
The group was interested in IPO's for the past 4 years, to determine which sector, type of business or country affected the success.
>**This is a work in progress and _can/will_ change.**

## Dataset Description
#### The yfinance package was used and yfinance is a python package that enables us to fetch historical market data from Yahoo Finance API in a Pythonic way. You must install yfinance prior to importing.
If using jupyter notebook
```pip install yfinance```
If using google colab
```!pip install yfinance``` 

1. Identify the datasource
    - Link: [The AWS link can be added here]
    - Description:


>**This will also change, for now just experimenting**

## Data exploration example below
    - The csv files were imported, and variables were created and the data was cleaned.
    - Pandas DataFrame was created.
    - try...except statements were used for testing.
    - DataFrames were mereged.
    - Dropped null data from dataframe.


## Week One: 

### Repository Management (Square)


### Source Data and Database Management (Circle)
<p>Database diagram</p>
<p>Source Data</p>
<p>Correlations</p>
<p>Model data</p>

### Machine Learning Model (Triangle)

* Unsupervised Machine Learning: 

#### Questionable..?

* Supervised Machine Learning:

#### We would like to run some machine learning models with the cleaned data, once available, that’s when we will get a starting point for how well the model will perform. 
#### We know that there will likely be additional steps to the cleaning process, but this will give us a baseline to see how our additional changes are affecting the models. 
#### To start, we’re thinking M. Linear Regression and Random Forest Regressor.
#### LabelEncoder so all values in columns are numeric.
#### Next, we can define our target variable and features, split and scale the data and build the multiple linear regression model
#### Most likely M.Liner Regression won’t be our best model, once we get outcomes from our R squared.
#### Next, we can try a Random Forest Regressor model with 100 estimators to see if that performs any better before further cleaning the data. Random Forest is better at predicting non-linear data by using decision trees to better fit the model. It might also be better for handling outliers in the data.
#### We can also try using the OneHotEncoder instead of LabelEncoder
#### We will probably be using PyCaret, an open-source machine learning library to help automate the entire process of training a machine learning model. From model selection to training and testing.



### Use of Technologies and Front-End (X)
