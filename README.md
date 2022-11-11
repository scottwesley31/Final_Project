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
<p>The yfinance Python library offers developers a built-in and relatively easy-to-use option for downloading historical stock data. Documentation for yfinance can be found on <a href="https://pypi.org/project/yfinance/">PyPi yfinance</a>. We additionally utilized a .csv collection of stocks that had gone through the necessary steps to engage in an initial public offering (IPO) in recent years. Four our purposes we were able to glean the last four years of such companies. We then utilized the yfinance documentation and methods to pull historical stock data and additional company qualitative data for recently IPO'd companies.</p>
<p>Upon initial exploration of the data, I came up with a proposed structured table. This attempted to merge much of the harvested information into a single table. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/database_initial_schema.png"> In the process of trying to understand the data and figure out some correlations along with building some initial models this kind of merging demonstrated some obvious deficiencies. Attempting to associate some of the qualitative data with the historical stock prices lacked the ability to associate some of the qualitative fields and/or ratios with the specific stock price dates. In exploring how to overcome this, I proposed the solution of utilizing the historical stock data in a neural networking machine model to calculate a growth rate and predicted future stock price for the various companies in the dataset.</p>
<p>Using this new approach afforded us the opportunity to dive into some ML modeling and also disaggregate the tables. As such the datbase is now structured with two tables, with a third table planned. <img src="https://github.com/scottwesley31/Final_Project/blob/main/images/schema_segment2.png"> The plan at this point is to utilize the model to create a third table with tickers and projected stock prices that can then be used to calculate a projected growth rate for each company. Having this projected growth rate, we can then input this into the qualitative data table and fold this last table into yet another ML model that offers a glimpse at the potential success rate of certain entrepreneurial ventures.</p><p><img src="https://github.com/scottwesley31/Final_Project/blob/main/images/ERD_segment2.png"></p>
<p>Correlations</p>
<p>Model data</p>

### Machine Learning Model (Triangle)


### Use of Technologies and Front-End (X)
